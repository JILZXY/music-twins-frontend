import { useState } from 'react'
import LandingPage from './components/LandingPage'
import AuthLoading from './components/AuthLoading'
import MainFeed from './components/MainFeed'
import TwinMatch from './components/TwinMatch'
import Messages from './components/Messages'
import Profile from './components/Profile'
import type { AppView } from './components/shared/AppShell'

type View = 'landing' | 'auth-loading' | 'feed' | AppView

function App() {
  const [view, setView] = useState<View>('landing')

  const appProps = {
    activeView: (view === 'feed' ? 'feed' : view) as AppView,
    onNavigate: (v: AppView) => setView(v),
    onLogout: () => setView('landing'),
  }

  return (
    <div className="min-h-screen bg-[#0d0d0f]">
      {view === 'landing' && (
        <LandingPage onEnterApp={() => setView('auth-loading')} />
      )}
      {view === 'auth-loading' && (
        <AuthLoading onComplete={() => setView('feed')} />
      )}
      {view === 'feed' && (
        <MainFeed
          onLogout={() => setView('landing')}
          onNavigate={(v: AppView) => setView(v)}
        />
      )}
      {view === 'twin-match' && <TwinMatch {...appProps} />}
      {view === 'messages'   && <Messages   {...appProps} />}
      {view === 'profile'    && <Profile    {...appProps} />}
    </div>
  )
}

export default App
