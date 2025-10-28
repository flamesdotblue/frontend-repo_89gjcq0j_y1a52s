import { Briefcase, DollarSign } from 'lucide-react'

export default function CFOTopBar(){
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">CFO Dashboard</h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Financial strategy, runway control, and investor updates</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs text-neutral-500">
          <DollarSign className="h-4 w-4"/> Precision mode
        </div>
      </div>
    </div>
  )
}
