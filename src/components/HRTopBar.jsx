import { Users } from 'lucide-react'

export default function HRTopBar(){
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold tracking-tight">HR Dashboard</h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">Hiring pipelines, sourcing, and team sentiment</p>
    </div>
  )
}
