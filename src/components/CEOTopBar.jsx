import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'

export default function CEOTopBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-between"
    >
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100">
          <Crown className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">CEO Command Dashboard</h1>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          High-level insights, alerts, and strategic control.
        </p>
      </div>
    </motion.div>
  )
}
