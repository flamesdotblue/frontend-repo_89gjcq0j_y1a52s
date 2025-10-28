import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Sparkles, Megaphone, Image as ImageIcon, Send, BarChart3 } from 'lucide-react'

const fadeIn = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35 } }

export default function CMODashboard() {
  const [ideas, setIdeas] = useState([])
  const [ad, setAd] = useState(null)
  const [adForm, setAdForm] = useState({ offer: '', audience: '', tone: 'Confident' })

  const generateIdeas = () => {
    setIdeas([
      'Case study: 40% CAC reduction with onboarding tweaks',
      'Webinar: AI-driven lifecycle emails that convert',
      'Partner spotlight: Co-marketing with top integration',
      'SEO pillar: FounderOS “Runway Control” framework',
      'Shorts: 30-second KPI teardown series',
    ])
  }

  const generateAd = () => {
    const headline = `${adForm.offer} for ${adForm.audience}`.trim() || 'High-ROI growth playbook'
    const primary = `Unlock repeatable growth with a ${adForm.tone.toLowerCase()} approach. Launch faster, learn faster.`
    setAd({ headline, primary })
  }

  return (
    <div className="space-y-6">
      {/* Content Calendar */}
      <motion.div {...fadeIn} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2"><Calendar className="h-5 w-5"/> Content Calendar</h3>
          <span className="text-xs text-neutral-500">Week snapshot</span>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-7 gap-3 text-sm">
          {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d, i)=> (
            <div key={d} className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
              <div className="flex items-center justify-between">
                <span className="font-medium">{d}</span>
                <span className="text-xs text-neutral-500">{i+1}</span>
              </div>
              <ul className="mt-2 space-y-1 text-neutral-600 dark:text-neutral-400">
                {i%2===0 ? (
                  <li>Blog: FounderOS runway math</li>
                ) : (
                  <li>LinkedIn: KPI spotlight</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Idea Generator & Ads */}
      <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-lg font-semibold flex items-center gap-2"><Sparkles className="h-5 w-5"/> AI Content Idea Generator</h3>
          <textarea className="mt-3 w-full rounded-md border border-neutral-300 bg-white p-3 text-sm dark:border-neutral-700 dark:bg-neutral-800" rows={4} placeholder="Describe your focus this week (e.g., activation, retention, product launch)" />
          <button onClick={generateIdeas} className="mt-3 inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800">
            <Send className="h-4 w-4"/> Generate Ideas (n8n-agent)
          </button>
          {ideas.length>0 && (
            <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
              {ideas.map((i)=> <li key={i}>{i}</li>)}
            </ul>
          )}
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-lg font-semibold flex items-center gap-2"><Megaphone className="h-5 w-5"/> AI Ads Generator</h3>
          <div className="mt-3 grid grid-cols-1 gap-3">
            <input className="rounded-md border border-neutral-300 bg-white p-2.5 text-sm dark:border-neutral-700 dark:bg-neutral-800" placeholder="Offer (e.g., Free audit call)" value={adForm.offer} onChange={(e)=>setAdForm({...adForm, offer:e.target.value})}/>
            <input className="rounded-md border border-neutral-300 bg-white p-2.5 text-sm dark:border-neutral-700 dark:bg-neutral-800" placeholder="Target Audience (e.g., SaaS founders)" value={adForm.audience} onChange={(e)=>setAdForm({...adForm, audience:e.target.value})}/>
            <select className="rounded-md border border-neutral-300 bg-white p-2.5 text-sm dark:border-neutral-700 dark:bg-neutral-800" value={adForm.tone} onChange={(e)=>setAdForm({...adForm, tone:e.target.value})}>
              <option>Confident</option>
              <option>Analytical</option>
              <option>Friendly</option>
              <option>Bold</option>
            </select>
          </div>
          <button onClick={generateAd} className="mt-3 inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800">
            <Sparkles className="h-4 w-4"/> Generate Ad (Gemini Nano + Unsplash via n8n)
          </button>
          {ad && (
            <div className="mt-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
              <div className="text-sm text-neutral-500">Preview</div>
              <h4 className="mt-1 text-lg font-semibold">{ad.headline}</h4>
              <p className="mt-1 text-neutral-700 dark:text-neutral-300">{ad.primary}</p>
              <div className="mt-3 flex h-32 items-center justify-center rounded-md border border-dashed border-neutral-300 text-neutral-500 dark:border-neutral-700">
                <ImageIcon className="h-6 w-6" />
                <span className="ml-2 text-sm">Image Preview</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Social Scheduler & Performance */}
      <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-lg font-semibold">Social Media Scheduler</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-neutral-500">
                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                  <th className="py-2">Platform</th>
                  <th className="py-2">Content</th>
                  <th className="py-2">Time</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {[
                  { p:'LinkedIn', c:'Runway control thread', t:'Tue 10:00', s:'Scheduled' },
                  { p:'X', c:'Launch teaser', t:'Thu 12:30', s:'Draft' },
                  { p:'YouTube', c:'KPI teardown ep.2', t:'Fri 16:00', s:'Scheduled' },
                ].map((row)=> (
                  <tr key={row.p+row.t}>
                    <td className="py-2 font-medium">{row.p}</td>
                    <td className="py-2">{row.c}</td>
                    <td className="py-2">{row.t}</td>
                    <td className="py-2"><span className={`rounded-full px-2 py-0.5 text-xs ${row.s==='Scheduled'?'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300':'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'}`}>{row.s}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold flex items-center gap-2"><BarChart3 className="h-5 w-5"/> Performance Analyzer</h3>
            <button className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800">
              <Send className="h-4 w-4"/> Generate Weekly Summary (n8n-agent)
            </button>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <Metric label="CTR" value="3.2%" trend="up"/>
            <Metric label="CPL" value="$28.4" trend="down"/>
            <Metric label="Signup Rate" value="6.1%" trend="up"/>
            <Metric label="CAC" value="$312" trend="down"/>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function Metric({ label, value, trend }){
  return (
    <div className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800">
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500">{label}</span>
        <span className={`text-xs ${trend==='up'?'text-emerald-600':'text-rose-600'}`}>{trend==='up'?'+':''}{trend==='up'?'Improving':'Improving'}</span>
      </div>
      <div className="mt-1 text-xl font-semibold">{value}</div>
    </div>
  )
}
