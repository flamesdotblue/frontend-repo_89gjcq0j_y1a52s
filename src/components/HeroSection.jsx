import Spline from '@splinetool/react-spline'

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl border bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            FounderOS AI
          </h1>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Your autonomous AI co‑founder across Strategy, Finance, Marketing, Sales, Product, HR, and Operations. Run workflows, request approvals, and keep full control.
          </p>
          <div className="mt-6 flex gap-3">
            <button className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-black">
              Open Mission Control
            </button>
            <button className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              View Inbox
            </button>
          </div>
        </div>
        <div className="h-[360px] md:h-[420px] rounded-xl overflow-hidden border">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
