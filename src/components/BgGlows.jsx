export default function BgGlows({ two = false }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute -right-[120px] -top-[140px] h-[min(800px,120vw)] w-[min(800px,120vw)] rounded-full bg-[radial-gradient(circle,rgba(2,136,209,0.18),transparent_62%)] sm:-right-[200px] sm:-top-[240px]" />
      {two && (
        <div className="absolute -bottom-[180px] -left-[120px] h-[min(680px,100vw)] w-[min(680px,100vw)] rounded-full bg-[radial-gradient(circle,rgba(21,96,189,0.14),transparent_60%)] sm:-bottom-[320px] sm:-left-[240px]" />
      )}
    </div>
  )
}
