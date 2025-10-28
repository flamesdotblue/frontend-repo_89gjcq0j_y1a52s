import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileSignature, ShieldCheck, CreditCard, Plane, Receipt, Globe, Rocket } from 'lucide-react'

const fadeIn = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35 } }

export default function OpsDashboard(){
  const [contractType, setContractType] = useState('NDA')

  const runContract = () => alert(`Generated ${contractType} via n8n-agent. Review and e-sign.`)

  return (
    <div className="space-y-6">
      {/* Contract Generator */}
      <motion.div {...fadeIn} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold flex items-center gap-2"><FileSignature className="h-5 w-5"/> Contract Generator</h3>
        <div className="mt-3 flex flex-col md:flex-row gap-3">
          <select value={contractType} onChange={(e)=>setContractType(e.target.value)} className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-800">
            <option>NDA</option>
            <option>Client</option>
            <option>Partner</option>
          </select>
          <button onClick={runContract} className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800">
            <Rocket className="h-4 w-4"/> Generate Contract (n8n-agent)
          </button>
        </div>
      </motion.div>

      {/* Compliance & Vendor Table */}
      <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-lg font-semibold flex items-center gap-2"><ShieldCheck className="h-5 w-5"/> Compliance Status</h3>
          <ul className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <li className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800 flex items-center justify-between">SOC 2 <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">On Track</span></li>
            <li className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800 flex items-center justify-between">GDPR <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">Compliant</span></li>
            <li className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800 flex items-center justify-between">ISO 27001 <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">In Review</span></li>
            <li className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800 flex items-center justify-between">DPA <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Updated</span></li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-lg font-semibold">Vendors & Subscriptions</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-neutral-500">
                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                  <th className="py-2">Vendor</th>
                  <th className="py-2">Plan</th>
                  <th className="py-2">Monthly</th>
                  <th className="py-2">Renewal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {[
                  {v:'Notion', p:'Team', m:'$16', r:'Aug 22'},
                  {v:'Linear', p:'Business', m:'$29', r:'Sep 03'},
                  {v:'Vercel', p:'Pro', m:'$20', r:'Aug 30'},
                  {v:'OpenAI', p:'Usage', m:'$2,100', r:'Monthly'},
                ].map(r => (
                  <tr key={r.v}>
                    <td className="py-2 font-medium">{r.v}</td>
                    <td className="py-2">{r.p}</td>
                    <td className="py-2">{r.m}</td>
                    <td className="py-2">{r.r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Quick Admin Actions */}
      <motion.div {...fadeIn} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold">Quick Admin Actions</h3>
        <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
          <QuickAction icon={Plane} label="Book Travel"/>
          <QuickAction icon={Receipt} label="File Expenses"/>
          <QuickAction icon={CreditCard} label="Update Card"/>
          <QuickAction icon={Globe} label="Renew Domain"/>
        </div>
      </motion.div>
    </div>
  )
}

function QuickAction({ icon:Icon, label }){
  return (
    <button className="flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-3 text-sm font-medium hover:bg-neutral-50 active:translate-y-px dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800">
      <Icon className="h-4 w-4"/>
      {label}
    </button>
  )
}
