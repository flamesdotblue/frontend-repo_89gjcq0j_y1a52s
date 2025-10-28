import { motion } from 'framer-motion'
import { TrendingUp, Flame, Banknote, Users, ExternalLink, AlertTriangle, CheckCircle, Bell } from 'lucide-react'

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 ${className}`}>
      {children}
    </div>
  )
}

function CardHeader({ children, className = '' }) {
  return <div className={`mb-3 flex items-center justify-between ${className}`}>{children}</div>
}

function CardTitle({ children }) {
  return <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{children}</h3>
}

function CardContent({ children, className = '' }) {
  return <div className={`text-neutral-700 dark:text-neutral-300 ${className}`}>{children}</div>
}

function Separator() {
  return <div className="my-4 h-px w-full bg-neutral-200 dark:bg-neutral-800" />
}

export default function CEODashboardGrid() {
  const kpis = [
    { label: 'Revenue (MTD)', value: '$482k', icon: TrendingUp, hint: '+12.4% vs last month' },
    { label: 'Burn Rate', value: '$310k', icon: Flame, hint: 'Stable past 4 weeks' },
    { label: 'Cash Runway', value: '14.6 months', icon: Banknote, hint: 'Target ≥ 12 months' },
    { label: 'Team Size', value: '42', icon: Users, hint: '4 open roles' },
  ]

  const news = [
    { title: 'AI infrastructure costs drop as new GPUs hit market', source: 'TechCrunch', time: '2h ago', href: '#' },
    { title: 'Fintechs pivot to embedded finance partnerships', source: 'FT', time: '5h ago', href: '#' },
    { title: 'Open-source LLMs gain enterprise adoption momentum', source: 'The Verge', time: '8h ago', href: '#' },
    { title: 'Payments volumes rise in Q3 across B2B platforms', source: 'PYMNTS', time: '1d ago', href: '#' },
    { title: 'VC sentiment stabilizes on late-stage growth', source: 'CB Insights', time: '2d ago', href: '#' },
  ]

  const alerts = [
    { title: 'Runway under 15 months — review hiring plan', tag: 'Finance', priority: 'yellow' },
    { title: 'Candidate accepted offer for Senior Backend Engineer', tag: 'Hiring', priority: 'green' },
    { title: 'Competitor announced EU launch — evaluate response', tag: 'Market', priority: 'red' },
    { title: 'Ops: SLA breach trending in Tier-2 support', tag: 'Ops', priority: 'yellow' },
  ]

  const priorityDot = (p) => (
    <span
      className={`inline-block h-2.5 w-2.5 rounded-full ${
        p === 'red' ? 'bg-red-500' : p === 'yellow' ? 'bg-yellow-400' : 'bg-emerald-500'
      }`}
    />
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {/* KPIs */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Company KPIs Snapshot</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {kpis.map(({ label, value, icon: Icon, hint }) => (
              <li key={label} className="flex items-center justify-between rounded-xl bg-neutral-50 p-3 dark:bg-neutral-800/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{label}</p>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{value}</p>
                  </div>
                </div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">{hint}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* News */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4 text-neutral-500" />
            <CardTitle>Latest Industry & Market Signals</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {news.map((n) => (
              <li key={n.title} className="flex items-start justify-between py-3">
                <div className="pr-3">
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{n.title}</p>
                  <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                    {n.source} • {n.time}
                  </p>
                </div>
                <a
                  href={n.href}
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                  Open
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-neutral-500" />
            <CardTitle>Alerts & Founder Inbox</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {alerts.map((a) => (
              <li key={a.title} className="flex items-center justify-between rounded-xl border border-neutral-200 p-3 dark:border-neutral-800">
                <div className="flex items-start gap-3">
                  {priorityDot(a.priority)}
                  <div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{a.title}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">{a.tag}</span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">{a.priority === 'red' ? 'High' : a.priority === 'yellow' ? 'Medium' : 'Low'} priority</span>
                    </div>
                  </div>
                </div>
                {a.priority === 'green' ? (
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                ) : (
                  <AlertTriangle className={`h-4 w-4 ${a.priority === 'red' ? 'text-red-500' : 'text-yellow-500'}`} />
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Separator />
    </motion.div>
  )
}
