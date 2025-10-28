import { useState } from 'react'
import SidebarNav from './components/SidebarNav'
import HeroSection from './components/HeroSection'
import DashboardOverview from './components/DashboardOverview'
import InboxPanel from './components/InboxPanel'

function App() {
  const [current, setCurrent] = useState('Home')

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-white text-gray-900">
      <div className="flex">
        <SidebarNav current={current} onSelect={setCurrent} />
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            <HeroSection />

            {current === 'Home' && (
              <>
                <DashboardOverview />
                <InboxPanel />
              </>
            )}

            {current === 'Inbox' && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2"><InboxPanel /></div>
                <div className="space-y-4">
                  <div className="rounded-xl border bg-white p-4">
                    <p className="text-sm font-medium text-gray-900">Today at a glance</p>
                    <ul className="mt-3 space-y-2 list-disc pl-5 text-sm text-gray-700">
                      <li>7 tasks completed by agents</li>
                      <li>3 approvals requested</li>
                      <li>No anomalies detected</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {['CEO','CFO','CMO','Sales','CTO','HR','Ops'].includes(current) && (
              <section className="rounded-2xl border bg-white p-6">
                <h2 className="text-xl font-semibold">{current} Agent Workspace</h2>
                <p className="mt-2 text-gray-600">Conversational execution, action panels, metrics, and recent activity will appear here.</p>
              </section>
            )}

            {current === 'Settings' && (
              <section className="rounded-2xl border bg-white p-6">
                <h2 className="text-xl font-semibold">Settings</h2>
                <p className="mt-2 text-gray-600">Connect data sources, auth, and workflow engine. Configure approvals and notification preferences.</p>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
