"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { UilChartGrowth, UilCommentAltLines, UilHeadphonesAlt, UilUsersAlt } from '@iconscout/react-unicons'
import AppShell from './shared/AppShell'

const twins = [
  {
    id: 1,
    name: 'Alex Rivera',
    score: 92,
    sharedArtists: ['M83', 'Tame Impala', 'Bon Iver', 'Radiohead', 'The National'],
    genres: [
      { name: 'Indie / Alternative', pct: 85 },
      { name: 'Electronic / Synth', pct: 72 },
      { name: 'Ambient', pct: 61 },
      { name: 'Post-rock', pct: 54 },
    ],
    breakdown: [
      { label: 'Tempo', score: 94 },
      { label: 'Genero', score: 89 },
      { label: 'Mood', score: 91 },
      { label: 'Era', score: 87 },
    ],
  },
  {
    id: 2,
    name: 'Sarah Chen',
    score: 78,
    sharedArtists: ['Dua Lipa', 'The Weeknd', 'Billie Eilish', 'Lorde'],
    genres: [
      { name: 'Pop / Electropop', pct: 80 },
      { name: 'R&B / Neo Soul', pct: 68 },
      { name: 'Indie Pop', pct: 55 },
      { name: 'Dark Pop', pct: 48 },
    ],
    breakdown: [
      { label: 'Tempo', score: 82 },
      { label: 'Genero', score: 75 },
      { label: 'Mood', score: 79 },
      { label: 'Era', score: 71 },
    ],
  },
  {
    id: 3,
    name: 'Jordan Smith',
    score: 65,
    sharedArtists: ['Frank Ocean', 'Tyler the Creator', 'SZA'],
    genres: [
      { name: 'Hip-hop / Trap', pct: 70 },
      { name: 'Neo Soul', pct: 60 },
      { name: 'Alternative R&B', pct: 52 },
      { name: 'Lo-fi', pct: 40 },
    ],
    breakdown: [
      { label: 'Tempo', score: 68 },
      { label: 'Genero', score: 62 },
      { label: 'Mood', score: 70 },
      { label: 'Era', score: 59 },
    ],
  },
]

function ScoreRing({ score }: { score: number }) {
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference
  const color = score >= 85 ? '#ec4899' : score >= 70 ? '#10b981' : '#ef4444'

  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      <svg className="absolute inset-0 -rotate-90" width="128" height="128">
        <circle cx="64" cy="64" r={radius} stroke="rgba(255,255,255,0.12)" strokeWidth="8" fill="none" />
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.9s ease-out' }}
        />
      </svg>
      <div className="text-center">
        <p className="font-display text-3xl font-black text-white">{score}</p>
        <p className="text-xs uppercase tracking-[0.16em] text-slate-300/60">/100</p>
      </div>
    </div>
  )
}

function BreakdownBar({ label, score }: { label: string; score: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs text-slate-200/85">
        <span>{label}</span>
        <span>{score}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#22d3ee] via-[#ff8d89] to-[#67e8f9]"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  )
}

function InitialTwin({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#22d3ee]/70 to-[#67e8f9]/35 font-display text-sm font-bold text-white">
      {initials}
    </span>
  )
}

export default function TwinMatch() {
  const [selected, setSelected] = useState(twins[0])
  const router = useRouter()

  return (
    <AppShell>
      <div className="mx-auto w-full max-w-6xl space-y-5 px-4 py-5 md:px-6 md:py-8">
        <header className="rounded-3xl border border-white/12 bg-[#25252a]/70 p-5 md:p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-[#67e8f9]">Twin intelligence</p>
          <h1 className="mt-2 font-display text-3xl font-black text-white md:text-4xl">Compatibilidad musical avanzada</h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-200/75 md:text-base">
            El motor Twin cruza ritmo, mood, epoca y repeticion para encontrar conexiones reales entre perfiles de escucha.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="space-y-3 rounded-3xl border border-white/12 bg-[#25252a]/70 p-4">
            {twins.map(twin => (
              <button
                key={twin.id}
                onClick={() => setSelected(twin)}
                className={`w-full rounded-2xl border p-3 text-left transition-colors ${
                  selected.id === twin.id
                    ? 'border-[#ff8d89]/35 bg-[#22d3ee]/30'
                    : 'border-white/12 bg-white/4 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <InitialTwin name={twin.name} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-base font-bold text-white">{twin.name}</p>
                    <p className="text-xs text-slate-300/70">Compatibilidad</p>
                  </div>
                  <span className="font-display text-xl font-black text-[#e5be85]">{twin.score}%</span>
                </div>
              </button>
            ))}
          </aside>

          <section className="space-y-4">
            <article className="rounded-3xl border border-white/12 bg-[#1f1f23]/70 p-5 md:p-6">
              <div className="flex flex-wrap items-center gap-5">
                <ScoreRing score={selected.score} />
                <div className="min-w-[240px] flex-1">
                  <h2 className="font-display text-2xl font-black text-white">{selected.name}</h2>
                  <p className="mt-1 text-sm text-slate-300/75">
                    {selected.score >= 85 ? 'Match de alta afinidad' : selected.score >= 70 ? 'Compatibilidad estable' : 'Buen potencial de match'}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#22d3ee] to-[#ff8d89] px-4 py-2 text-sm font-semibold text-white">
                      <UilHeadphonesAlt size={16} />
                      Escuchar juntos
                    </button>
                    <button
                      onClick={() => router.push('/messages')}
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm text-slate-100 transition-colors hover:bg-white/10"
                    >
                      <UilCommentAltLines size={16} />
                      Enviar mensaje
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {selected.breakdown.map(item => (
                  <BreakdownBar key={item.label} label={item.label} score={item.score} />
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-white/12 bg-[#25252a]/70 p-5">
              <div className="mb-4 inline-flex items-center gap-2 text-[#f0b7a9]">
                <UilChartGrowth size={16} />
                <p className="text-xs uppercase tracking-[0.16em]">Generos en comun</p>
              </div>
              <div className="space-y-3">
                {selected.genres.map(genre => (
                  <div key={genre.name}>
                    <div className="mb-1 flex justify-between text-sm text-slate-200/85">
                      <span>{genre.name}</span>
                      <span>{genre.pct}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#22d3ee] to-[#67e8f9]"
                        style={{ width: `${genre.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-white/12 bg-[#25252a]/70 p-5">
              <div className="mb-4 inline-flex items-center gap-2 text-[#e5be85]">
                <UilUsersAlt size={16} />
                <p className="text-xs uppercase tracking-[0.16em]">Artistas compartidos</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {selected.sharedArtists.map(artist => (
                  <span key={artist} className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-sm text-slate-100">
                    {artist}
                  </span>
                ))}
              </div>
            </article>
          </section>
        </div>
      </div>
    </AppShell>
  )
}
