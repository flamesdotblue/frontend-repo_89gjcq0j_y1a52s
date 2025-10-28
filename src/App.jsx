import { useState } from 'react'
import SidebarNav from './components/SidebarNav'
import CEOTopBar from './components/CEOTopBar'
import SplineBackdrop from './components/SplineBackdrop'
import CEODashboardGrid from './components/CEODashboardGrid'
import CEOAdditionalSections from './components/CEOAdditionalSections'

function App() {
  const [current, setCurrent] = useState('CEO')

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-white text-neutral-900 dark:from-neutral-950 dark:to-neutral-950 dark:text-neutral-100">
      <div className="flex">
        <SidebarNav current={current} onSelect={setCurrent} />
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {current === 'CEO' && (
              <>
                <CEOTopBar />
                <SplineBackdrop />
                <CEODashboardGrid />
                <CEOAdditionalSections />
              </>
            )}

            {current !== 'CEO' && (
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                <h2 className="text-xl font-semibold">{current} Workspace</h2>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">Choose CEO to view the command dashboard.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
