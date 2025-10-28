import { Briefcase } from 'lucide-react'

export default function OpsTopBar(){
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold tracking-tight">Ops Dashboard</h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">Contracts, compliance, vendors, and admin actions</p>
    </div>
  )
}
