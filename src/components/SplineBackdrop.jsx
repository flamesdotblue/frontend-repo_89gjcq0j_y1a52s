import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function SplineBackdrop() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white/60 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60"
      style={{ height: 220 }}
    >
      <Spline
        scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60 dark:from-neutral-900/40 dark:to-neutral-900/80" />
    </motion.div>
  )
}
