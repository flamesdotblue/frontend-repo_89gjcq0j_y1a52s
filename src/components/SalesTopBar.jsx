import { BarChart3 } from 'lucide-react'

export default function SalesTopBar(){
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold tracking-tight">Sales Dashboard</h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">Pipeline momentum, lead quality, and call outcomes</p>
    </div>
  )
}
