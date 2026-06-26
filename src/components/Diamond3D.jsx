import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { createDiamondScene } from '../lib/diamondGeometry'

export default function Diamond3D({ className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const size = el.clientWidth || 300
    const { scene, cam, renderer, pivot, geo, mat, edges } = createDiamondScene(el, size)

    let t = 0
    let frame
    const loop = () => {
      frame = requestAnimationFrame(loop)
      t += 0.016
      if (!reduced) {
        pivot.rotation.y = 0.72 + Math.sin(t * 0.6) * 0.55
        pivot.rotation.x = -0.1 + Math.sin(t * 0.4) * 0.08
        pivot.position.y = Math.sin(t * 0.8) * 0.08
      }
      renderer.render(scene, cam)
    }
    loop()

    return () => {
      cancelAnimationFrame(frame)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
      edges.geometry.dispose()
      edges.material.dispose()
      el.innerHTML = ''
    }
  }, [])

  return (
    <div className={`relative flex h-[340px] w-[340px] items-center justify-center ${className}`}>
      <div className="absolute inset-0 rounded-full border border-blue-pale/20" />
      <div className="absolute inset-[34px] rounded-full border border-blue-pale/10" />
      <div className="absolute inset-[68px] rounded-full border border-blue-pale/[0.06]" />
      <div ref={ref} className="h-[190px] w-[190px] drop-shadow-[0_20px_40px_rgba(2,136,209,0.45)]" />
      <span className="absolute left-[18%] top-[14%] h-1.5 w-1.5 rounded-full bg-blue-pale opacity-60" />
      <span className="absolute bottom-[20%] right-[14%] h-1.5 w-1.5 rounded-full bg-blue-pale opacity-60" />
      <span className="absolute right-[6%] top-[44%] h-1.5 w-1.5 rounded-full bg-blue-pale opacity-60" />
    </div>
  )
}

export function Sphere3D({ className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const size = el.clientWidth || 260

    const scene = new THREE.Scene()
    const cam = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
    cam.position.set(0, 0, 7)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(size, size)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)
    scene.add(new THREE.AmbientLight(0xffffff, 0.58))
    const l1 = new THREE.DirectionalLight(0xffffff, 1.1)
    l1.position.set(3, 5, 4)
    scene.add(l1)
    const l2 = new THREE.DirectionalLight(0x7cc4ef, 0.75)
    l2.position.set(-4, 2, 3)
    scene.add(l2)

    const geo = new THREE.IcosahedronGeometry(1.9, 1)
    const mat = new THREE.MeshStandardMaterial({
      color: 0x1e7fc8,
      metalness: 0.5,
      roughness: 0.28,
      flatShading: true,
    })
    const mesh = new THREE.Mesh(geo, mat)
    scene.add(mesh)
    const edgeLines = new THREE.LineSegments(
      new THREE.EdgesGeometry(geo, 1),
      new THREE.LineBasicMaterial({ color: 0x9ed2f2, transparent: true, opacity: 0.4 }),
    )
    mesh.add(edgeLines)

    let t = 0
    let frame
    const loop = () => {
      frame = requestAnimationFrame(loop)
      t += 0.016
      if (!reduced) {
        mesh.rotation.y = t * 0.4
        mesh.rotation.x = Math.sin(t * 0.3) * 0.2
      }
      renderer.render(scene, cam)
    }
    loop()

    return () => {
      cancelAnimationFrame(frame)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
      edgeLines.geometry.dispose()
      edgeLines.material.dispose()
      el.innerHTML = ''
    }
  }, [])

  return <div ref={ref} className={`h-[260px] w-[260px] ${className}`} />
}
