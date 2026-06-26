export default function BgGlows({ two = false }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute -right-[200px] -top-[240px] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(2,136,209,0.18),transparent_62%)]" />
      {two && (
        <div className="absolute -bottom-[320px] -left-[240px] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(21,96,189,0.14),transparent_60%)]" />
      )}
    </div>
  )
}
