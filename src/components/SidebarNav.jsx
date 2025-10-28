import { Home, Inbox, Workflow, Briefcase, DollarSign, Megaphone, Code, Users, Settings } from 'lucide-react'
import PropTypes from 'prop-types'

const items = [
  { label: 'Home', icon: Home },
  { label: 'Inbox', icon: Inbox },
  { label: 'CEO', icon: Briefcase },
  { label: 'CFO', icon: DollarSign },
  { label: 'CMO', icon: Megaphone },
  { label: 'Sales', icon: Workflow },
  { label: 'CTO', icon: Code },
  { label: 'HR', icon: Users },
  { label: 'Ops', icon: Briefcase },
  { label: 'Settings', icon: Settings },
]

export default function SidebarNav({ current, onSelect }) {
  return (
    <aside className="h-screen w-64 border-r bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="px-5 py-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">FounderOS</p>
            <p className="font-semibold text-gray-900">AI Co‑Founder</p>
          </div>
        </div>
      </div>
      <nav className="px-2 space-y-1">
        {items.map(({ label, icon: Icon }) => {
          const active = current === label
          return (
            <button
              key={label}
              onClick={() => onSelect(label)}
              className={`group w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                active ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'}`} />
              <span className="text-sm font-medium">{label}</span>
            </button>
          )
        })}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white/50">
        <div className="text-xs text-gray-500">Status: All systems nominal</div>
      </div>
    </aside>
  )
}

SidebarNav.propTypes = {
  current: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}
