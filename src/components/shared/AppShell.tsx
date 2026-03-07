import React from 'react'

const imgLogo   = 'http://localhost:3845/assets/400aeaa61e2e0c8c6e0c7e0e6d0c0d1a.svg'
const imgFeed   = 'http://localhost:3845/assets/4a8c0b3e8c8e2b6f3e0d7c4d2d5a1f3b.svg'
const imgMsg    = 'http://localhost:3845/assets/5b9d4f2e0a1c3d6e8f0b2c4e6a8d0f1c.svg'
const imgTwin   = 'http://localhost:3845/assets/7f1b8776e3a4c5d2b0e8f1a2c3d4e5f6.svg'
const imgUser   = 'http://localhost:3845/assets/f4933b1e0d2c4e6a8b0c2d4f6e8a0b2c.svg'

export type AppView = 'feed' | 'twin-match' | 'messages' | 'profile'

interface NavItemProps {
  icon: string
  label: string
  view: AppView
  active: boolean
  onClick: () => void
}

function NavItem({ icon, label, view: _view, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
        active
          ? 'bg-purple-500/20 text-purple-300'
          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
      }`}
    >
      <span
        className={`w-5 h-5 flex-shrink-0 transition-opacity ${active ? 'opacity-100' : 'opacity-50 group-hover:opacity-80'}`}
        style={{ WebkitMaskImage: `url(${icon})`, WebkitMaskRepeat: 'no-repeat', WebkitMaskSize: 'contain', backgroundColor: active ? '#a855f7' : 'currentColor' }}
      />
      <span>{label}</span>
      {active && (
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
      )}
    </button>
  )
}

interface AppShellProps {
  activeView: AppView
  onNavigate: (view: AppView) => void
  onLogout: () => void
  children: React.ReactNode
}

const navItems: { icon: string; label: string; view: AppView }[] = [
  { icon: imgFeed,  label: 'Feed',        view: 'feed'       },
  { icon: imgMsg,   label: 'Mensajes',    view: 'messages'   },
  { icon: imgTwin,  label: 'Twin Match',  view: 'twin-match' },
  { icon: imgUser,  label: 'Perfil',      view: 'profile'    },
]

export default function AppShell({ activeView, onNavigate, onLogout, children }: AppShellProps) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0d0d0f]">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 flex flex-col border-r border-[#2a2a35] bg-[#0f0f13]">
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-5 py-5 border-b border-[#2a2a35]">
          <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
            <img src={imgLogo} alt="" className="w-5 h-5 brightness-200" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
          </div>
          <span className="font-bold text-[15px] text-slate-100" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            MusicTwins
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 pt-4 space-y-1">
          {navItems.map(item => (
            <NavItem
              key={item.view}
              icon={item.icon}
              label={item.label}
              view={item.view}
              active={activeView === item.view}
              onClick={() => onNavigate(item.view)}
            />
          ))}
        </nav>

        {/* Listening now badge */}
        <div className="mx-3 mb-3 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-end gap-[2px] h-4">
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} className="eq-bar" style={{ animationDelay: `${i * 0.12}s` }} />
              ))}
            </div>
            <span className="text-xs font-medium text-purple-300">En reproducción</span>
          </div>
          <p className="text-xs text-slate-300 truncate">Midnight City — M83</p>
          <p className="text-xs text-slate-500 truncate">After Dark</p>
        </div>

        {/* Logout */}
        <div className="px-3 pb-4 border-t border-[#2a2a35] pt-3">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 group"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
            </svg>
            <span>Cerrar sesión</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
