import { useState } from 'react'
import { motion } from 'framer-motion'
import { GitCommit, MonitorSmartphone, Activity, Rocket } from 'lucide-react'

const fadeIn = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35 } }

export default function CTODashboard(){
  const [desc, setDesc] = useState('')
  const [preview, setPreview] = useState('')

  const generateSite = () => {
    setPreview('Landing layout generated: Hero, Social proof, Feature grid, Pricing, and CTA. Export ready for Framer/Webflow.')
  }

  return (
    <div className="space-y-6">
      {/* Product Roadmap */}
      <motion.div {...fadeIn} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold">Product Roadmap Snapshot</h3>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <Column title="Now" items={["Voice call integration","Scenario planner v2","Metrics API"]} />
          <Column title="Next" items={["Multi-tenant billing","Insights feed","Mobile optimizations"]} />
          <Column title="Later" items={["In-product automation studio","Partner marketplace"]} />
        </div>
      </motion.div>

      {/* Repo Insights & System Health */}
      <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-lg font-semibold flex items-center gap-2"><GitCommit className="h-5 w-5"/> Repo Insights</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              'feat: add sales call summary engine',
              'chore: bump ui deps and prune icons',
              'fix: debounce scheduler updates',
              'docs: roadmap sections refreshed',
            ].map((m)=> (
              <li key={m} className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">{m}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-lg font-semibold flex items-center gap-2"><Activity className="h-5 w-5"/> System Health</h3>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <Health label="Uptime" value="99.96%" status="ok"/>
            <Health label="Latency" value="132 ms" status="ok"/>
            <Health label="Errors" value="0.08%" status="warn"/>
            <Health label="Incidents" value="0 active" status="ok"/>
          </div>
        </div>
      </motion.div>

      {/* Website Generator */}
      <motion.div {...fadeIn} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold flex items-center gap-2"><MonitorSmartphone className="h-5 w-5"/> AI Website / Landing Page Generator</h3>
            <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} rows={4} className="mt-3 w-full rounded-md border border-neutral-300 bg-white p-3 text-sm dark:border-neutral-700 dark:bg-neutral-800" placeholder="Describe the product and value prop" />
            <button onClick={generateSite} className="mt-3 inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800">
              <Rocket className="h-4 w-4"/> Generate Website (n8n + Framer/Webflow)
            </button>
          </div>
          <div className="hidden md:block w-1/2 min-h-[160px] rounded-md border border-dashed border-neutral-300 p-4 text-sm text-neutral-500 dark:border-neutral-700">
            {preview || 'Output preview will appear here with sections and component hints.'}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function Column({ title, items }){
  return (
    <div className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
      <div className="text-sm font-medium">{title}</div>
      <ul className="mt-2 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
        {items.map((i)=> <li key={i} className="rounded-md bg-neutral-100 px-3 py-2 dark:bg-neutral-800">{i}</li>)}
      </ul>
    </div>
  )
}

function Health({ label, value, status }){
  const tone = status==='ok'?'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300':'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
  return (
    <div className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500">{label}</span>
        <span className={`rounded-full px-2 py-0.5 text-xs ${tone}`}>{status==='ok'?'Healthy':'Attention'}</span>
      </div>
      <div className="mt-1 text-xl font-semibold">{value}</div>
    </div>
  )
}
