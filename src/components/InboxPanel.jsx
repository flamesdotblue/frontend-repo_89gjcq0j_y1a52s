import { Check, X, Clock } from 'lucide-react'

const items = [
  { id: 'hr-jd-1', title: 'Approve JD → HR posts “Senior Frontend Engineer”', time: '2m ago' },
  { id: 'cmo-post-3', title: 'Approve marketing post → Schedule LinkedIn + X', time: '18m ago' },
  { id: 'cfo-spend-2', title: 'Approve $1,200 spend → Renew Segment plan', time: '45m ago' },
  { id: 'ceo-price-1', title: 'Approve pricing change → Add annual plan', time: '1h ago' },
]

export default function InboxPanel() {
  return (
    <section className="rounded-2xl border bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Inbox — Approvals & Alerts</p>
        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
          <Clock className="h-3.5 w-3.5" /> {items.length} pending
        </span>
      </div>
      <div className="mt-4 divide-y">
        {items.map((it) => (
          <div key={it.id} className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm text-gray-900">{it.title}</p>
              <p className="text-xs text-gray-500">{it.time}</p>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
                <X className="h-4 w-4" /> Deny
              </button>
              <button className="inline-flex items-center gap-1 rounded-md bg-gray-900 px-2.5 py-1.5 text-sm text-white hover:bg-black">
                <Check className="h-4 w-4" /> Approve
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
