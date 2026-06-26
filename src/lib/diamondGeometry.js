import * as THREE from 'three'

const PALETTE = {
  highlight: new THREE.Color(0xb8f8ff),
  bright: new THREE.Color(0x4fc3f7),
  mid: new THREE.Color(0x039be5),
  shadow: new THREE.Color(0x1565c0),
  deep: new THREE.Color(0x0d4a8c),
}

const LIGHT_DIR = new THREE.Vector3(0.55, 0.65, 0.52).normalize()

export function makeDiamondGeometry() {
  const N = 6
  const Rg = 1.48
  const Rt = 0.54
  const yT = 0.92
  const yG = 0.3
  const yC = -2.08

  const verts = []
  const tris = []
  const push = (p) => {
    verts.push(p[0], p[1], p[2])
    return verts.length / 3 - 1
  }

  const table = []
  const girdle = []
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2 - Math.PI / 2
    table.push([Math.cos(a) * Rt, yT, Math.sin(a) * Rt])
    girdle.push([Math.cos(a) * Rg, yG, Math.sin(a) * Rg])
  }

  const iTable = table.map(push)
  const iGirdle = girdle.map(push)
  const iCulet = push([0, yC, 0])

  for (let i = 1; i < N - 1; i++) tris.push(iTable[0], iTable[i], iTable[i + 1])

  for (let i = 0; i < N; i++) {
    const n = (i + 1) % N
    tris.push(iTable[i], iGirdle[i], iTable[n])
    tris.push(iTable[n], iGirdle[i], iGirdle[n])
  }

  for (let i = 0; i < N; i++) {
    const n = (i + 1) % N
    tris.push(iGirdle[i], iCulet, iGirdle[n])
  }

  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
  g.setIndex(tris)
  g.computeVertexNormals()
  addFacetColors(g, Rg)
  return g
}

function addFacetColors(geometry, Rg) {
  const positions = geometry.attributes.position
  const normals = geometry.attributes.normal
  const colors = new Float32Array(positions.count * 3)

  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i)
    const y = positions.getY(i)
    const c = shadeVertex(
      x,
      y,
      positions.getZ(i),
      normals.getX(i),
      normals.getY(i),
      normals.getZ(i),
      Rg,
    )
    colors[i * 3] = c.r
    colors[i * 3 + 1] = c.g
    colors[i * 3 + 2] = c.b
  }

  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
}

function shadeVertex(x, y, z, nx, ny, nz, Rg) {
  const side = x / Rg * 0.5 + 0.5
  let shade = nx * LIGHT_DIR.x + ny * LIGHT_DIR.y + nz * LIGHT_DIR.z
  shade = shade * 0.42 + side * 0.35 + 0.22
  if (y > 0.5) shade += 0.14
  if (y < 0) shade -= 0.04

  if (shade > 0.72) return PALETTE.highlight.clone()
  if (shade > 0.52) return PALETTE.bright.clone()
  if (shade > 0.34) return PALETTE.mid.clone()
  if (shade > 0.18) return PALETTE.shadow.clone()
  return PALETTE.deep.clone()
}

export function createDiamondScene(container, size) {
  const scene = new THREE.Scene()
  const cam = new THREE.PerspectiveCamera(36, 1, 0.1, 100)
  cam.position.set(0, 0.05, 6.2)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(size, size)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  container.appendChild(renderer.domElement)

  const geo = makeDiamondGeometry()

  const mat = new THREE.MeshBasicMaterial({
    vertexColors: true,
    flatShading: true,
  })

  const mesh = new THREE.Mesh(geo, mat)

  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(geo, 8),
    new THREE.LineBasicMaterial({ color: 0x061428, transparent: true, opacity: 0.9 }),
  )
  mesh.add(edges)

  const pivot = new THREE.Group()
  pivot.add(mesh)
  pivot.rotation.set(-0.1, 0.72, 0)
  scene.add(pivot)

  return { scene, cam, renderer, pivot, mesh, mat, geo, edges }
}
