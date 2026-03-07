import { useState } from 'react'
import AppShell, { type AppView } from './shared/AppShell'

const imgAlex   = 'http://localhost:3845/assets/f8f64cf3a1b2c3d4e5f6a7b8c9d0e1f2.png'
const imgSarah  = 'http://localhost:3845/assets/3d312615b2c3d4e5f6a7b8c9d0e1f2a3.png'
const imgJordan = 'http://localhost:3845/assets/c7213871c3d4e5f6a7b8c9d0e1f2a3b4.png'

interface TwinMatchProps {
  activeView: AppView
  onNavigate: (v: AppView) => void
  onLogout: () => void
}

const twins = [
  {
    id: 1,
    name: 'Alex Rivera',
    avatar: imgAlex,
    score: 92,
    sharedArtists: ['M83', 'Tame Impala', 'Bon Iver', 'Radiohead', 'The National'],
    genres: [
      { name: 'Indie / Alternative',  pct: 85 },
      { name: 'Electronic / Synth',   pct: 72 },
      { name: 'Ambient',              pct: 61 },
      { name: 'Post-rock',            pct: 54 },
    ],
    breakdown: [
      { label: 'Tempo',  score: 94 },
      { label: 'Género', score: 89 },
      { label: 'Mood',   score: 91 },
      { label: 'Era',    score: 87 },
    ],
  },
  {
    id: 2,
    name: 'Sarah Chen',
    avatar: imgSarah,
    score: 78,
    sharedArtists: ['Dua Lipa', 'The Weeknd', 'Billie Eilish', 'Lorde'],
    genres: [
      { name: 'Pop / Electropop',    pct: 80 },
      { name: 'R&B / Neo Soul',      pct: 68 },
      { name: 'Indie Pop',           pct: 55 },
      { name: 'Dark Pop',            pct: 48 },
    ],
    breakdown: [
      { label: 'Tempo',  score: 82 },
      { label: 'Género', score: 75 },
      { label: 'Mood',   score: 79 },
      { label: 'Era',    score: 71 },
    ],
  },
  {
    id: 3,
    name: 'Jordan Smith',
    avatar: imgJordan,
    score: 65,
    sharedArtists: ['Frank Ocean', 'Tyler the Creator', 'SZA'],
    genres: [
      { name: 'Hip-hop / Trap',      pct: 70 },
      { name: 'Neo Soul',            pct: 60 },
      { name: 'Alternative R&B',     pct: 52 },
      { name: 'Lo-fi',               pct: 40 },
    ],
    breakdown: [
      { label: 'Tempo',  score: 68 },
      { label: 'Género', score: 62 },
      { label: 'Mood',   score: 70 },
      { label: 'Era',    score: 59 },
    ],
  },
]

function ScoreRing({ score }: { score: number }) {
  const r = 52
  const circ = 2 * Math.PI * r
  const offset = circ - (score / 100) * circ
  const color = score >= 85 ? '#a855f7' : score >= 70 ? '#06b6d4' : '#f59e0b'

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg className="absolute inset-0 -rotate-90" width="128" height="128">
        <circle cx="64" cy="64" r={r} stroke="#2a2a35" strokeWidth="8" fill="none" />
        <circle
          cx="64" cy="64" r={r}
          stroke={color} strokeWidth="8" fill="none"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1s ease-out' }}
        />
      </svg>
      <div className="text-center z-10">
        <span className="text-3xl font-bold text-slate-100" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{score}</span>
        <span className="block text-xs text-slate-400 -mt-0.5">/ 100</span>
      </div>
    </div>
  )
}

function BreakdownBar({ label, score }: { label: string; score: number }) {
  const color = score >= 85 ? '#a855f7' : score >= 70 ? '#06b6d4' : '#f59e0b'
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-slate-400">{label}</span>
        <span className="text-slate-300 font-medium">{score}%</span>
      </div>
      <div className="h-1.5 bg-[#2a2a35] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${score}%`, backgroundColor: color, transition: 'width 0.8s ease-out' }}
        />
      </div>
    </div>
  )
}

export default function TwinMatch({ activeView, onNavigate, onLogout }: TwinMatchProps) {
  const [selected, setSelected] = useState(twins[0])
  const twin = selected

  return (
    <AppShell activeView={activeView} onNavigate={onNavigate} onLogout={onLogout}>
      <div className="p-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-2xl font-bold text-slate-100 mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Twin Match
          </h1>
          <p className="text-slate-400 text-sm">Descubre tu compatibilidad musical con tus amigos</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Twin list */}
          <div className="col-span-1 space-y-3">
            {twins.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setSelected(t)}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl border transition-all duration-200 text-left animate-fade-in-up stagger-${i + 1} ${
                  selected.id === t.id
                    ? 'bg-purple-500/10 border-purple-500/30'
                    : 'bg-[#141418] border-[#2a2a35] hover:border-[#3a3a45]'
                }`}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={t.avatar} alt={t.name}
                    className="w-10 h-10 rounded-full object-cover bg-[#2a2a35]"
                    onError={e => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=1e1e2e&color=a855f7&size=40` }}
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-[#141418]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-200 truncate">{t.name}</p>
                  <p className="text-xs text-slate-500">Compatibilidad</p>
                </div>
                <div
                  className="text-lg font-bold flex-shrink-0"
                  style={{
                    color: t.score >= 85 ? '#a855f7' : t.score >= 70 ? '#06b6d4' : '#f59e0b',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {t.score}%
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="col-span-2 space-y-5">
            {/* Profile + score */}
            <div key={twin.id} className="bg-[#141418] border border-[#2a2a35] rounded-2xl p-5 animate-fade-in">
              <div className="flex items-center gap-6">
                <ScoreRing score={twin.score} />
                <div>
                  <h2 className="text-xl font-bold text-slate-100 mb-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {twin.name}
                  </h2>
                  <p className="text-sm text-slate-400 mb-3">
                    {twin.score >= 85 ? '✨ Music Twin perfecto' : twin.score >= 70 ? '🎵 Gran compatibilidad' : '🎶 Buena compatibilidad'}
                  </p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-colors">
                      🎧 Escuchar juntos
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-[#1e293b] hover:bg-[#2a3444] text-slate-300 text-sm font-medium transition-colors border border-[#2a2a35]">
                      Enviar mensaje
                    </button>
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                {twin.breakdown.map(b => (
                  <BreakdownBar key={b.label} label={b.label} score={b.score} />
                ))}
              </div>
            </div>

            {/* Shared genres */}
            <div className="bg-[#141418] border border-[#2a2a35] rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Géneros en común</h3>
              <div className="space-y-3">
                {twin.genres.map(g => (
                  <div key={g.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">{g.name}</span>
                      <span className="text-slate-400 text-xs">{g.pct}%</span>
                    </div>
                    <div className="h-2 bg-[#2a2a35] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${g.pct}%`,
                          background: 'linear-gradient(90deg, #a855f7, #ec4899)',
                          transition: 'width 0.9s ease-out',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shared artists */}
            <div className="bg-[#141418] border border-[#2a2a35] rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Artistas compartidos</h3>
              <div className="flex flex-wrap gap-2">
                {twin.sharedArtists.map(a => (
                  <span
                    key={a}
                    className="px-3 py-1.5 rounded-full text-sm bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
