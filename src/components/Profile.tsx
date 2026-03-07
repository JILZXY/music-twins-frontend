import { useState } from 'react'
import AppShell, { type AppView } from './shared/AppShell'

const imgMe = 'http://localhost:3845/assets/f8f64cf3a1b2c3d4e5f6a7b8c9d0e1f2.png'

interface ProfileProps {
  activeView: AppView
  onNavigate: (v: AppView) => void
  onLogout: () => void
}

const topArtists = [
  { name: 'M83',             genre: 'Synthwave',   plays: 348 },
  { name: 'Tame Impala',     genre: 'Psychedelic', plays: 290 },
  { name: 'Bon Iver',        genre: 'Folk',        plays: 241 },
  { name: 'Radiohead',       genre: 'Alt Rock',    plays: 198 },
  { name: 'The National',    genre: 'Indie Rock',  plays: 177 },
  { name: 'Sigur Rós',       genre: 'Post-rock',   plays: 153 },
]

const recentTracks = [
  { title: 'Midnight City',    artist: 'M83',          time: 'Hace 5 min' },
  { title: 'Let It Happen',    artist: 'Tame Impala',  time: 'Hace 22 min' },
  { title: 'Holocene',         artist: 'Bon Iver',     time: 'Hace 1h' },
  { title: 'Fake Plastic Trees', artist: 'Radiohead', time: 'Hace 2h' },
  { title: 'Bloodbuzz Ohio',   artist: 'The National', time: 'Hace 3h' },
]

const badges = [
  { icon: '🎵', label: 'Oyente compulsivo',  desc: '+1000h escuchadas' },
  { icon: '👥', label: 'Twin Finder',         desc: '5+ matches perfectos' },
  { icon: '🌙', label: 'Noctámbulo',          desc: 'Escucha después de las 2am' },
  { icon: '🔥', label: 'Racha de 30 días',    desc: '30 días consecutivos' },
]

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-[#141418] border border-[#2a2a35] rounded-2xl p-4 text-center">
      <p className="text-2xl font-bold text-slate-100 mb-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {value}
      </p>
      <p className="text-xs text-slate-400">{label}</p>
      {sub && <p className="text-xs text-purple-400 mt-1">{sub}</p>}
    </div>
  )
}

export default function Profile({ activeView, onNavigate, onLogout }: ProfileProps) {
  const [notifEnabled, setNotifEnabled] = useState(true)
  const [shareEnabled, setShareEnabled] = useState(true)
  const [publicProfile, setPublicProfile] = useState(true)

  return (
    <AppShell activeView={activeView} onNavigate={onNavigate} onLogout={onLogout}>
      <div className="p-6 max-w-4xl mx-auto space-y-6">

        {/* Profile header */}
        <div className="bg-[#141418] border border-[#2a2a35] rounded-2xl p-6 animate-fade-in-up">
          <div className="flex items-start gap-5">
            <div className="relative">
              <img
                src={imgMe} alt="Mi perfil"
                className="w-20 h-20 rounded-2xl object-cover bg-[#2a2a35] animate-glow-pulse"
                onError={e => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Luis+N&background=1e1e2e&color=a855f7&size=80'
                }}
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-[#141418] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-100 mb-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Luis Navarro
                  </h2>
                  <p className="text-sm text-slate-400 mb-2">@luisnavarro · Guadalajara, MX</p>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs bg-purple-500/15 text-purple-300 border border-purple-500/25 font-medium">
                      🎵 Oyente Premium
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs bg-[#1e293b] text-slate-400 border border-[#2a2a35]">
                      Nivel 12
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-xl bg-[#1e293b] hover:bg-[#2a3444] text-slate-300 text-sm font-medium transition-colors border border-[#2a2a35]">
                  Editar perfil
                </button>
              </div>
              <div className="flex gap-4 mt-3 text-sm text-slate-400">
                <span><strong className="text-slate-200">47</strong> amigos</span>
                <span><strong className="text-slate-200">12</strong> twins</span>
                <span><strong className="text-slate-200">823</strong> canciones compartidas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 animate-fade-in-up stagger-2">
          <StatCard label="Horas escuchadas" value="1,248h" sub="Este año" />
          <StatCard label="Twin matches"     value="12"     sub="3 nuevos" />
          <StatCard label="Género favorito"  value="Indie"  />
          <StatCard label="Streak actual"    value="30 🔥"  sub="días" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Top artists */}
          <div className="bg-[#141418] border border-[#2a2a35] rounded-2xl p-5 animate-fade-in-up stagger-3">
            <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Top Artistas</h3>
            <div className="space-y-3">
              {topArtists.map((a, i) => (
                <div key={a.name} className={`flex items-center gap-3 animate-fade-in-up`} style={{ animationDelay: `${i * 0.05}s` }}>
                  <span className="w-5 text-xs text-slate-600 text-right flex-shrink-0 font-mono">
                    {i + 1}
                  </span>
                  <div
                    className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center text-lg font-bold bg-gradient-to-br from-purple-900 to-slate-900"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {a.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-200 truncate">{a.name}</p>
                    <p className="text-xs text-slate-500">{a.genre}</p>
                  </div>
                  <span className="text-xs text-slate-600 flex-shrink-0">{a.plays}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Recent + Badges */}
          <div className="space-y-5">
            {/* Recent tracks */}
            <div className="bg-[#141418] border border-[#2a2a35] rounded-2xl p-5 animate-fade-in-up stagger-4">
              <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Escuchado recientemente</h3>
              <div className="space-y-2.5">
                {recentTracks.map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-900 to-slate-900 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-slate-200 truncate">{t.title}</p>
                      <p className="text-xs text-slate-600">{t.artist}</p>
                    </div>
                    <span className="text-xs text-slate-600 flex-shrink-0">{t.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div className="bg-[#141418] border border-[#2a2a35] rounded-2xl p-5 animate-fade-in-up stagger-5">
              <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Insignias</h3>
              <div className="grid grid-cols-2 gap-2">
                {badges.map(b => (
                  <div key={b.label} className="bg-[#1a1a22] rounded-xl p-3 border border-[#2a2a35]">
                    <div className="text-2xl mb-1">{b.icon}</div>
                    <p className="text-xs font-semibold text-slate-200">{b.label}</p>
                    <p className="text-xs text-slate-600">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-[#141418] border border-[#2a2a35] rounded-2xl p-5 animate-fade-in-up stagger-6">
          <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Configuración</h3>
          <div className="divide-y divide-[#2a2a35]">
            {[
              { label: 'Notificaciones de nuevos twins', sub: 'Recibe alertas cuando encuentres una coincidencia', value: notifEnabled, set: setNotifEnabled },
              { label: 'Compartir historial de escucha', sub: 'Tus amigos pueden ver qué estás escuchando', value: shareEnabled, set: setShareEnabled },
              { label: 'Perfil público',                 sub: 'Cualquier usuario puede ver tu perfil',         value: publicProfile, set: setPublicProfile },
            ].map(s => (
              <div key={s.label} className="flex items-center justify-between py-4">
                <div>
                  <p className="text-sm text-slate-200 font-medium">{s.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{s.sub}</p>
                </div>
                <button
                  onClick={() => s.set(v => !v)}
                  className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${s.value ? 'bg-purple-600' : 'bg-[#2a2a35]'}`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${s.value ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </AppShell>
  )
}
