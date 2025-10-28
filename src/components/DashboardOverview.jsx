import { TrendingUp, Activity, Users, DollarSign } from 'lucide-react'

const metrics = [
  {
    name: 'Runway',
    value: '14.2 mo',
    change: '+0.4 mo',
    icon: Activity,
  },
  {
    name: 'Burn rate',
    value: '$38k',
    change: '-6% MoM',
    icon: DollarSign,
  },
  {
    name: 'Revenue',
    value: '$62k',
    change: '+18% MoM',
    icon: TrendingUp,
  },
  {
    name: 'Hiring Progress',
    value: '2 Roles',
    change: '1 offer out',
    icon: Users,
  },
]

const recs = [
  'Double down on self-serve onboarding; 32% trial→paid uplift projected.',
  'Shift $2.5k from brand to performance on LinkedIn + YouTube.',
  'Introduce annual plan at 20% discount to extend runway by ~2.1 months.',
]

export default function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.name} className="rounded-xl border bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{m.name}</p>
                <m.icon className="h-4 w-4 text-gray-400" />
              </div>
              <p className="mt-2 text-2xl font-semibold text-gray-900">{m.value}</p>
              <p className="text-xs text-gray-500">{m.change}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border bg-white p-4">
          <p className="text-sm font-medium text-gray-900">Sales pipeline</p>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {['Prospect', 'Qualified', 'Demo', 'Closed'].map((stage, i) => (
              <div key={stage} className="rounded-lg border p-3">
                <p className="text-xs text-gray-500">{stage}</p>
                <p className="mt-1 text-lg font-semibold text-gray-900">{[42, 18, 9, 3][i]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="rounded-xl border bg-white p-4">
          <p className="text-sm font-medium text-gray-900">Top strategic moves this week</p>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            {recs.map((r, idx) => (
              <li key={idx} className="text-sm text-gray-700 leading-relaxed">{r}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <p className="text-sm font-medium text-gray-900">System health</p>
          <div className="mt-3 grid grid-cols-3 gap-3 text-center">
            {[
              { label: 'Uptime', value: '99.98%' },
              { label: 'Latency', value: '128ms' },
              { label: 'Errors', value: '0.12%' },
            ].map((i) => (
              <div key={i.label} className="rounded-lg border p-3">
                <p className="text-xs text-gray-500">{i.label}</p>
                <p className="mt-1 text-lg font-semibold text-gray-900">{i.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
