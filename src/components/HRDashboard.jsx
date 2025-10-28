import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, FileText, Search, Smile, Send } from 'lucide-react'

const fadeIn = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35 } }

export default function HRDashboard(){
  const [jd, setJd] = useState('')
  const [role, setRole] = useState('Product Manager')
  const [seniority, setSeniority] = useState('Senior')
  const [keywords, setKeywords] = useState('AI, SaaS, PLG')
  const [location, setLocation] = useState('Remote')
  const [candidates, setCandidates] = useState([])

  const generateJD = () => {
    setJd(`${seniority} ${role} to own outcomes: discovery to delivery. Stack: Notion, Linear, SQL nice-to-have. KPIs: activation, retention, NPS.`)
  }
  const searchCandidates = () => {
    setCandidates([
      { name:'Jordan Lee', summary:'B2B SaaS PM, led onboarding that improved Day-1 activation +18%.' },
      { name:'Avery Kim', summary:'ML-focused PM, scaled growth experiments across two products.' },
      { name:'Riley Chen', summary:'Ex-consultant turned PM, great at stakeholder alignment.' },
    ])
  }

  return (
    <div className="space-y-6">
      {/* JD Generator */}
      <motion.div {...fadeIn} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold flex items-center gap-2"><FileText className="h-5 w-5"/> AI Job Description Generator</h3>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
          <input className="rounded-md border border-neutral-300 bg-white p-2.5 text-sm dark:border-neutral-700 dark:bg-neutral-800" value={role} onChange={(e)=>setRole(e.target.value)} placeholder="Role"/>
          <select className="rounded-md border border-neutral-300 bg-white p-2.5 text-sm dark:border-neutral-700 dark:bg-neutral-800" value={seniority} onChange={(e)=>setSeniority(e.target.value)}>
            <option>Junior</option>
            <option>Mid</option>
            <option>Senior</option>
            <option>Lead</option>
          </select>
          <button onClick={generateJD} className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800"><Send className="h-4 w-4"/> Generate JD (n8n-agent)</button>
        </div>
        <textarea value={jd} onChange={(e)=>setJd(e.target.value)} rows={4} className="mt-3 w-full rounded-md border border-neutral-300 bg-white p-3 text-sm dark:border-neutral-700 dark:bg-neutral-800" placeholder="Generated JD will appear here"/>
      </motion.div>

      {/* Candidate Sourcing */}
      <motion.div {...fadeIn} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold flex items-center gap-2"><Search className="h-5 w-5"/> Candidate Sourcing</h3>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
          <input className="rounded-md border border-neutral-300 bg-white p-2.5 text-sm dark:border-neutral-700 dark:bg-neutral-800" value={keywords} onChange={(e)=>setKeywords(e.target.value)} placeholder="Keywords"/>
          <input className="rounded-md border border-neutral-300 bg-white p-2.5 text-sm dark:border-neutral-700 dark:bg-neutral-800" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="Location"/>
          <button onClick={searchCandidates} className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800"><Send className="h-4 w-4"/> Search LinkedIn (n8n-agent)</button>
        </div>
        <ul className="mt-4 space-y-2 text-sm">
          {candidates.map((c)=> (
            <li key={c.name} className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
              <div className="font-medium">{c.name}</div>
              <div className="text-neutral-600 dark:text-neutral-400">{c.summary}</div>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Interview Pipeline & Sentiment */}
      <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-lg font-semibold flex items-center gap-2"><Users className="h-5 w-5"/> Interview Pipeline</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-neutral-500">
                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                  <th className="py-2">Candidate</th>
                  <th className="py-2">Stage</th>
                  <th className="py-2">Owner</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {[
                  { c:'Jordan Lee', s:'Phone Screen', o:'HR', st:'Scheduled' },
                  { c:'Avery Kim', s:'Panel', o:'Product', st:'Pending' },
                  { c:'Riley Chen', s:'Offer', o:'CTO', st:'Draft' },
                ].map(r => (
                  <tr key={r.c}>
                    <td className="py-2 font-medium">{r.c}</td>
                    <td className="py-2">{r.s}</td>
                    <td className="py-2">{r.o}</td>
                    <td className="py-2"><span className={`rounded-full px-2 py-0.5 text-xs ${r.st==='Scheduled'?'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300': r.st==='Pending'?'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300':'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'}`}>{r.st}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-lg font-semibold flex items-center gap-2"><Smile className="h-5 w-5"/> Team Sentiment Insights</h3>
          <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
            <Sentiment label="Engagement" score={78}/>
            <Sentiment label="Alignment" score={84}/>
            <Sentiment label="Workload" score={62}/>
          </div>
          <div className="mt-3 text-xs text-neutral-500">Insights from pulse surveys and 1:1 notes.</div>
        </div>
      </motion.div>
    </div>
  )
}

function Sentiment({ label, score }){
  const tone = score>=75?'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300': score>=65?'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300':'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300'
  return (
    <div className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500">{label}</span>
        <span className={`rounded-full px-2 py-0.5 text-xs ${tone}`}>{score}</span>
      </div>
      <div className="mt-1 h-2 w-full rounded bg-neutral-200 dark:bg-neutral-800">
        <div className="h-2 rounded bg-neutral-900 dark:bg-neutral-200" style={{ width: `${score}%` }} />
      </div>
    </div>
  )
}
