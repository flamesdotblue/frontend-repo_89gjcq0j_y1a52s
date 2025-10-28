import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Calculator, RefreshCw, FileText, CheckCircle2, AlertTriangle } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: 'easeOut' }
}

export default function CFODashboard() {
  const [scenario, setScenario] = useState('Base Case')
  const [ideasRefreshing, setIdeasRefreshing] = useState(false)

  const handleRecalculate = () => {
    setIdeasRefreshing(true)
    setTimeout(() => setIdeasRefreshing(false), 1000)
  }

  const handleInvestorUpdate = () => {
    alert('Investor update drafted via n8n-agent. Review before sending.')
  }

  return (
    <div className="space-y-6">
      {/* Financial Snapshot */}
      <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SnapshotCard label="Monthly Revenue" value="$182,400" positive icon={TrendingUp} />
        <SnapshotCard label="Monthly Burn" value="$132,900" negative icon={TrendingDown} />
        <SnapshotCard label="Runway" value="14.2 months" neutral icon={Calculator} />
        <SnapshotCard label="Profitability" value="Not yet" neutral icon={AlertTriangle} />
      </motion.div>

      {/* Scenario Planner */}
      <motion.div {...fadeIn} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Scenario Planner</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Model best/worst outcomes and see trend impact.</p>
          </div>
          <div className="flex items-center gap-3">
            <select value={scenario} onChange={(e)=>setScenario(e.target.value)} className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-800">
              <option>Base Case</option>
              <option>Best Case</option>
              <option>Downside</option>
              <option>Aggressive Hiring</option>
              <option>Conservative Spend</option>
            </select>
            <button onClick={handleRecalculate} className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800 active:translate-y-px">
              <RefreshCw className={`h-4 w-4 ${ideasRefreshing ? 'animate-spin' : ''}`} />
              Recalculate Forecast (n8n-agent)
            </button>
          </div>
        </div>
        {/* Placeholder chart */}
        <div className="mt-5 h-44 rounded-lg bg-gradient-to-b from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-end gap-2 p-3">
          {[30, 40, 45, 38, 50, 62, 70, 64, 72, 78, 84, 90].map((h, i) => (
            <div key={i} className="flex-1 bg-neutral-300/60 dark:bg-neutral-600/60 rounded-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-2 text-xs text-neutral-500">Scenario: {scenario} • Forecast horizon: 12 months</div>
      </motion.div>

      {/* Expense Monitoring */}
      <motion.div {...fadeIn} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Expense Monitoring</h3>
          <span className="text-xs rounded-full bg-emerald-100 px-2 py-1 font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">On Track</span>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-neutral-500">
              <tr className="border-b border-neutral-200 dark:border-neutral-800">
                <th className="py-2">Vendor</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Category</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {[
                { vendor: 'AWS', amt: '$4,320', cat: 'Cloud Infra', status: 'Paid' },
                { vendor: 'Google Workspace', amt: '$420', cat: 'SaaS', status: 'Paid' },
                { vendor: 'HubSpot', amt: '$1,260', cat: 'Sales', status: 'Due' },
                { vendor: 'Figma', amt: '$180', cat: 'Design', status: 'Paid' },
                { vendor: 'OpenAI', amt: '$2,980', cat: 'AI', status: 'Review' },
              ].map((row) => (
                <tr key={row.vendor}>
                  <td className="py-2 font-medium">{row.vendor}</td>
                  <td className="py-2">{row.amt}</td>
                  <td className="py-2">{row.cat}</td>
                  <td className="py-2">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                      row.status === 'Paid' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' :
                      row.status === 'Due' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' :
                      'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                    }`}>
                      {row.status === 'Paid' ? <CheckCircle2 className="h-3.5 w-3.5"/> : <AlertTriangle className="h-3.5 w-3.5"/>}
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Fundraising & IR */}
      <motion.div {...fadeIn} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold">Fundraising & Investor Relations</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Maintain proactive updates and transparent metrics.</p>
          </div>
          <button onClick={handleInvestorUpdate} className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800">
            <FileText className="h-4 w-4" />
            Generate Investor Update (n8n-agent)
          </button>
        </div>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <li className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
            Last round: Seed • $2.4M • Jan 2024
          </li>
          <li className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
            Current burn multiple: 1.7x • Target: ≤ 1.5x
          </li>
          <li className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
            Next milestone: $250k MRR • target Q2
          </li>
        </ul>
      </motion.div>
    </div>
  )
}

function SnapshotCard({ label, value, positive, negative, neutral, icon: Icon }) {
  const tone = positive ? 'text-emerald-600 bg-emerald-600/10' : negative ? 'text-rose-600 bg-rose-600/10' : 'text-blue-600 bg-blue-600/10'
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center justify-between">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{label}</p>
        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${tone}`}>
          <Icon className="h-3.5 w-3.5" />
          {positive ? 'Up' : negative ? 'Down' : 'Stable'}
        </span>
      </div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
    </div>
  )
}
