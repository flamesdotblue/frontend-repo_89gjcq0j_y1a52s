import { useState } from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, CheckCircle2, XCircle, Sparkles, ListChecks, ArrowRightLeft } from 'lucide-react'

const fadeIn = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35 } }

export default function SalesDashboard(){
  const [lead, setLead] = useState('')
  const [callSummary, setCallSummary] = useState('')

  const qualifyLead = () => {
    alert(`Lead qualified via n8n-agent: ${lead || 'No name provided'}`)
  }
  const startCall = () => {
    setCallSummary('Call in progress... summarizing via Voice AI. Expect key moments and action items.')
    setTimeout(()=> setCallSummary('Prospect pain: scattered ops, poor forecasting. Next step: send proposal with runway model add-on. Close ETA: 2 weeks.'), 1200)
  }

  const columns = ['New','Qualified','Proposal','Negotiation','Won / Lost']
  const sample = {
    'New': ['Acme Retail','Northwind Logistics'],
    'Qualified': ['Fabrikam AI'],
    'Proposal': ['Globex Cloud'],
    'Negotiation': ['Umbrella Fintech'],
    'Won / Lost': ['Soylent Health (Won)','Initech (Lost)']
  }

  return (
    <div className="space-y-6">
      {/* Pipeline */}
      <motion.div {...fadeIn} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold">Kanban Sales Pipeline</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-3">
          {columns.map((col)=> (
            <div key={col} className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{col}</span>
                <span className="text-xs text-neutral-500">{sample[col].length}</span>
              </div>
              <ul className="mt-2 space-y-2">
                {sample[col].map((c)=> (
                  <li key={col+c} className="rounded-md bg-neutral-100 px-3 py-2 text-sm dark:bg-neutral-800">{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Lead Qualification and Calls */}
      <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-lg font-semibold flex items-center gap-2"><ListChecks className="h-5 w-5"/> Lead Qualification</h3>
          <input className="mt-3 w-full rounded-md border border-neutral-300 bg-white p-2.5 text-sm dark:border-neutral-700 dark:bg-neutral-800" placeholder="Lead name or website" value={lead} onChange={(e)=>setLead(e.target.value)} />
          <button onClick={qualifyLead} className="mt-3 inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800">
            <Sparkles className="h-4 w-4"/> Qualify Lead (n8n-agent)
          </button>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold flex items-center gap-2"><PhoneCall className="h-5 w-5"/> Voice AI Sales Calls</h3>
            <button onClick={startCall} className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800"><PhoneCall className="h-4 w-4"/> Start Sales Call</button>
          </div>
          <div className="mt-3 min-h-[88px] rounded-md border border-neutral-200 p-3 text-sm text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
            {callSummary || 'No calls yet. Start a call to capture a smart summary.'}
          </div>
        </div>
      </motion.div>

      {/* CRM Sync */}
      <motion.div {...fadeIn} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2"><ArrowRightLeft className="h-5 w-5"/> CRM Sync Activity</h3>
          <span className="text-xs text-neutral-500">HubSpot • Salesforce</span>
        </div>
        <ul className="mt-3 space-y-2 text-sm">
          <li className="flex items-center justify-between rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
            <span>Synced deal "Globex Cloud" to HubSpot</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-600"/>
          </li>
          <li className="flex items-center justify-between rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
            <span>Contact enrichment completed for "Fabrikam AI"</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-600"/>
          </li>
          <li className="flex items-center justify-between rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
            <span>Opportunity "Initech" marked as Lost</span>
            <XCircle className="h-4 w-4 text-rose-600"/>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}
