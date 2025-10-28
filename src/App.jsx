import { useState } from 'react'
import SidebarNav from './components/SidebarNav'
import CEOTopBar from './components/CEOTopBar'
import SplineBackdrop from './components/SplineBackdrop'
import CEODashboardGrid from './components/CEODashboardGrid'
import CEOAdditionalSections from './components/CEOAdditionalSections'

import CFOTopBar from './components/CFOTopBar'
import CMOTopBar from './components/CMOTopBar'
import SalesTopBar from './components/SalesTopBar'
import CTOTopBar from './components/CTOTopBar'
import HRTopBar from './components/HRTopBar'
import OpsTopBar from './components/OpsTopBar'

import CFODashboard from './components/CFODashboard'
import CMODashboard from './components/CMODashboard'
import SalesDashboard from './components/SalesDashboard'
import CTODashboard from './components/CTODashboard'
import HRDashboard from './components/HRDashboard'
import OpsDashboard from './components/OpsDashboard'

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

            {current === 'CFO' && (
              <>
                <CFOTopBar />
                <CFODashboard />
              </>
            )}

            {current === 'CMO' && (
              <>
                <CMOTopBar />
                <CMODashboard />
              </>
            )}

            {current === 'Sales' && (
              <>
                <SalesTopBar />
                <SalesDashboard />
              </>
            )}

            {current === 'CTO' && (
              <>
                <CTOTopBar />
                <CTODashboard />
              </>
            )}

            {current === 'HR' && (
              <>
                <HRTopBar />
                <HRDashboard />
              </>
            )}

            {current === 'Ops' && (
              <>
                <OpsTopBar />
                <OpsDashboard />
              </>
            )}

            {['Home','Inbox','Settings'].includes(current) && (
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                <h2 className="text-xl font-semibold">{current}</h2>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">Select a workspace to view its dashboard.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
