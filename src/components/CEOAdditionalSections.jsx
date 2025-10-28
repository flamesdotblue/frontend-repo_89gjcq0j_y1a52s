import { motion } from 'framer-motion'
import { Calendar, Users, Video, Send, BarChart3 } from 'lucide-react'

function Section({ children }) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {children}
    </section>
  )
}

function SectionTitle({ children }) {
  return <h3 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">{children}</h3>
}

function Button({ children, variant = 'default', className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 disabled:opacity-60 disabled:cursor-not-allowed'
  const map = {
    default: 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200',
    ghost: 'bg-transparent text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800',
  }
  return (
    <button className={`${base} ${map[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default function CEOAdditionalSections() {
  const meetings = [
    {
      title: 'Board Prep: Q4 Strategy Review',
      date: 'Tue, Nov 12 • 10:00 AM',
      location: 'Zoom',
      participants: ['COO', 'CFO', 'VP Eng'],
    },
    {
      title: 'Enterprise Prospect — Procurement Call',
      date: 'Wed, Nov 13 • 2:30 PM',
      location: 'Google Meet',
      participants: ['AE Lead', 'Sales Eng'],
    },
    {
      title: 'All-Hands: Product & Roadmap',
      date: 'Fri, Nov 15 • 4:00 PM',
      location: 'HQ • Theater',
      participants: ['Entire Team'],
    },
  ]

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Section>
          <SectionTitle>Upcoming Meetings</SectionTitle>
          <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {meetings.map((m) => (
              <li key={m.title} className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-5 w-5 text-neutral-500" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{m.title}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{m.date} • {m.location}</p>
                    <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                      <Users className="h-3.5 w-3.5" /> {m.participants.join(', ')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" className="">
                    <Video className="h-4 w-4" /> Join
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
        <Section>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <SectionTitle>Quick Actions</SectionTitle>
            <div className="flex flex-wrap items-center gap-2">
              <Button>
                <Calendar className="h-4 w-4" /> Schedule Meeting
              </Button>
              <Button variant="ghost">
                <Send className="h-4 w-4" /> Send Update to Team
              </Button>
              <Button variant="ghost">
                <BarChart3 className="h-4 w-4" /> Review Company Metrics
              </Button>
            </div>
          </div>
        </Section>
      </motion.div>
    </div>
  )
}
