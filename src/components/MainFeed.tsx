// MusicTwins – Main Feed
import { useState, useEffect } from 'react'
import type { AppView } from './shared/AppShell'

// Imágenes de perfil
const imgAlexRivera = 'http://localhost:3845/assets/f8f64cf34bf5923c64103f5526f4f42b79d2efaa.png';
const imgSarahChen = 'http://localhost:3845/assets/3d312615421f0b525d35810c521093c11e943a34.png';
const imgJordanSmith = 'http://localhost:3845/assets/c72138711aea42231c5dacb1977e26903c2dbac9.png';

// Carátulas de álbumes
const imgMidnightCity = 'http://localhost:3845/assets/23a32f177f5f94f891363d748381293d548262ac.png';
const imgStarboy = 'http://localhost:3845/assets/3de8b74dc6ceb2483d641767c8d171b55947a6f9.png';
const imgLevitating = 'http://localhost:3845/assets/48f7a0b7895da41a413ec3bc00cdd6f63a313655.png';

// Avatares en "Listeners"
const imgListener1 = 'http://localhost:3845/assets/c7725174bcda1ffa8526e96b2804944809cb07f5.png';
const imgListener2 = 'http://localhost:3845/assets/5d5956214cd28462f0018ded68ab80f148554b18.png';
const imgListener3 = 'http://localhost:3845/assets/7c227b46f15cc2e2901579458e5bcf85bf6ffc05.png';

// Álbum del Now Playing
const imgNowPlayingAlbum = 'http://localhost:3845/assets/1d17986048b08cc296cae54733861941f28d627e.png';

// Iconos SVG del sidebar / controles
const imgLogoIcon = 'http://localhost:3845/assets/819b82fe37669cffd60c82f8a9073f91ac5362a8.svg';
const imgFeedIcon = 'http://localhost:3845/assets/21b940dfcc7d7d514efe62026329e806ff0051f0.svg';
const imgMessagesIcon = 'http://localhost:3845/assets/0bfb825afb0edccad10813ad55d82137d2a89992.svg';
const imgSettingsIcon = 'http://localhost:3845/assets/23dddc2edf3b337e75c84735dda0af062557886e.svg';
const imgMusicNoteIcon = 'http://localhost:3845/assets/5864ec335f5440473e782dc4cd9498857d06d652.svg';
const imgPrevIcon = 'http://localhost:3845/assets/832495a4d7310cc040799f138aca1fa5ab1b5356.svg';
const imgPlayPauseIcon = 'http://localhost:3845/assets/1ee6ca60d615a9c60c865d908a2c118b67c3f3fa.svg';
const imgNextIcon = 'http://localhost:3845/assets/73233db11437fdb23f837f36e9667d43b313e1b4.svg';
const imgJoinIcon = 'http://localhost:3845/assets/1b160771dcb485c86875c30e5e1e58ac517c4f08.svg';

// ─── Tipos ───────────────────────────────────────────────────────────────────

interface Friend {
  name: string;
  avatar: string;
  status: 'online' | 'offline';
  statusLabel: string;
}

interface SongCard {
  id: number;
  albumArt: string;
  userAvatar: string;
  title: string;
  artistAlbum: string;
  timeAgo: string;
  reactions: { emoji: string; count: number }[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const friends: Friend[] = [
  { name: 'Alex Rivera', avatar: imgAlexRivera, status: 'online', statusLabel: 'En vivo' },
  { name: 'Sarah Chen', avatar: imgSarahChen, status: 'offline', statusLabel: 'Offline' },
  { name: 'Jordan Smith', avatar: imgJordanSmith, status: 'online', statusLabel: 'Listening' },
];

const songCards: SongCard[] = [
  {
    id: 1,
    albumArt: imgMidnightCity,
    userAvatar: imgAlexRivera,
    title: 'Midnight City',
    artistAlbum: "M83 • Hurry Up, We're Dreaming",
    timeAgo: '2m ago',
    reactions: [{ emoji: '🔥', count: 12 }, { emoji: '❤️', count: 8 }, { emoji: '🎧', count: 3 }],
  },
  {
    id: 2,
    albumArt: imgStarboy,
    userAvatar: imgJordanSmith,
    title: 'Starboy',
    artistAlbum: 'The Weeknd • Starboy',
    timeAgo: '15m ago',
    reactions: [{ emoji: '⚡', count: 24 }, { emoji: '🙌', count: 5 }],
  },
  {
    id: 3,
    albumArt: imgLevitating,
    userAvatar: imgSarahChen,
    title: 'Levitating',
    artistAlbum: 'Dua Lipa • Future Nostalgia',
    timeAgo: '45m ago',
    reactions: [{ emoji: '✨', count: 19 }, { emoji: '💃', count: 11 }],
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function FriendItem({ friend }: { friend: Friend }) {
  const isOnline = friend.status === 'online';
  return (
    <div className={`flex items-center gap-4 ${!isOnline ? 'opacity-50' : ''}`}>
      <div className="relative w-10 h-10 shrink-0">
        <img
          src={friend.avatar}
          alt={friend.name}
          className="absolute inset-0 w-full h-full rounded-full object-cover"
        />
        {isOnline && (
          <div className="absolute border-2 border-[#a855f7] opacity-60 rounded-full inset-[-4px] animate-pulse-ring" />
        )}
      </div>
      <div className="flex flex-col">
        <span
          className={`text-[14px] font-medium leading-[20px] ${isOnline ? 'text-[#f1f5f9]' : 'text-[#94a3b8]'}`}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {friend.name}
        </span>
        <div className="flex items-center gap-1">
          {isOnline && (
            <img alt="" className="w-[7.5px] h-[8.33px]" src={imgMusicNoteIcon} />
          )}
          <span
            className={`text-[12px] leading-[16px] ${isOnline ? 'text-[#a855f7]' : 'text-[#64748b]'}`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {friend.statusLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

function SongCardItem({ card, delay = 0 }: { card: SongCard; delay?: number }) {
  const [reactions, setReactions] = useState(card.reactions.map(r => ({ ...r })));
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  function handleReact(emoji: string) {
    const alreadyLiked = liked[emoji];
    setLiked(prev => ({ ...prev, [emoji]: !alreadyLiked }));
    setReactions(prev =>
      prev.map(r =>
        r.emoji === emoji
          ? { ...r, count: alreadyLiked ? r.count - 1 : r.count + 1 }
          : r
      )
    );
  }

  return (
    <div
      className="bg-[#141418] border border-[#2a2a35] rounded-2xl p-[17px] flex flex-col gap-4 hover:border-[#3a3a45] transition-all duration-200 animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <img
            src={card.albumArt}
            alt={card.title}
            className="w-16 h-16 rounded-2xl object-cover"
          />
          {/* User avatar badge */}
          <div className="absolute -bottom-1 -right-1 border-2 border-[#141418] rounded-full p-0.5">
            <img
              src={card.userAvatar}
              alt="user"
              className="w-5 h-5 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center self-stretch py-2.5">
          <div className="flex items-center justify-between">
            <h3
              className="text-[#f1f5f9] text-[18px] font-bold leading-[22.5px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {card.title}
            </h3>
            <span
              className="text-[#64748b] text-[12px] leading-[16px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {card.timeAgo}
            </span>
          </div>
          <p
            className="text-[#94a3b8] text-[14px] leading-[20px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {card.artistAlbum}
          </p>
        </div>
      </div>

      {/* Reaction bar */}
      <div className="border-t border-[rgba(42,42,53,0.5)] pt-[17px] flex items-center gap-3">
        {reactions.map((r) => (
          <button
            key={r.emoji}
            onClick={() => handleReact(r.emoji)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 active:scale-90 ${
              liked[r.emoji]
                ? 'bg-purple-500/20 border border-purple-500/30'
                : 'bg-white/5 hover:bg-white/10 border border-transparent'
            }`}
          >
            <span className="text-[14px] leading-[20px]">{r.emoji}</span>
            <span
              className={`text-[12px] font-medium leading-[16px] ${
                liked[r.emoji] ? 'text-purple-300' : 'text-[#f1f5f9]'
              }`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {r.count}
            </span>
          </button>
        ))}
        <button className="ml-auto text-slate-600 hover:text-slate-400 transition-colors text-xs flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Compartir
        </button>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

interface MainFeedProps {
  onLogout?: () => void
  onNavigate?: (view: AppView) => void
}

export default function MainFeed({ onNavigate }: MainFeedProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(43);

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + 0.05));
    }, 200);
    return () => clearInterval(id);
  }, [isPlaying]);

  const progressMin = Math.floor((progress / 100) * 4 * 60);
  const progressSec = Math.floor((progress / 100) * (4 * 60 + 3)) % 60;
  const progressLabel = `${Math.floor(progressMin / 60)}:${String(progressSec).padStart(2, '0')}`;

  return (
    <div className="bg-[#0d0d0f] w-full h-screen flex overflow-hidden">
      {/* ── LEFT SIDEBAR (256px) ── */}
      <aside className="bg-[#0d0d0f] border-r border-[#2a2a35] w-64 h-full flex flex-col shrink-0">
        {/* Logo + Nav */}
        <div className="p-6 flex flex-col gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img alt="logo" className="w-5 h-5" src={imgLogoIcon} />
            <span
              className="text-[#a855f7] text-[24px] font-bold tracking-[-0.6px] leading-[32px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              MusicTwins
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {/* Feed (active) */}
            <div className="flex items-center gap-3 bg-[rgba(168,85,247,0.1)] px-4 py-3 rounded-2xl">
              <img alt="" className="w-4 h-[18px]" src={imgFeedIcon} />
              <span
                className="text-[#a855f7] text-[16px] font-semibold leading-[24px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Feed
              </span>
            </div>
            {/* Messages */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors"
              onClick={() => onNavigate?.('messages')}
            >
              <img alt="" className="w-5 h-5" src={imgMessagesIcon} />
              <span
                className="text-[#f1f5f9] text-[16px] leading-[24px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Mensajes
              </span>
            </div>
            {/* Twin Match */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors"
              onClick={() => onNavigate?.('twin-match')}
            >
              <img alt="" className="w-5 h-5 opacity-60" src={imgFeedIcon} />
              <span
                className="text-[#f1f5f9] text-[16px] leading-[24px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Twin Match
              </span>
            </div>
            {/* Settings */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors"
              onClick={() => onNavigate?.('profile')}
            >
              <img alt="" className="w-5 h-5" src={imgSettingsIcon} />
              <span
                className="text-[#f1f5f9] text-[16px] leading-[24px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Perfil
              </span>
            </div>
          </nav>
        </div>

        {/* Friends list */}
        <div className="flex-1 px-6 pb-6 overflow-y-auto flex flex-col gap-4">
          <span
            className="text-[#94a3b8] text-[12px] font-bold tracking-[1.2px] uppercase leading-[16px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Amigos
          </span>
          <div className="flex flex-col gap-6">
            {friends.map((f) => (
              <FriendItem key={f.name} friend={f} />
            ))}
          </div>
        </div>
      </aside>

      {/* ── CENTER COLUMN – FEED (768px) ── */}
      <main className="flex-1 bg-[#0d0d0f] h-full overflow-y-auto px-8 py-6 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1
            className="text-[#f1f5f9] text-[24px] font-bold leading-[32px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Social Feed
          </h1>
          <div className="w-12 h-1 bg-[#a855f7] rounded-full" />
        </div>

        {/* Song cards */}
        <div className="flex flex-col gap-4">
          {songCards.map((card, i) => (
            <SongCardItem key={card.id} card={card} delay={i * 0.08} />
          ))}
        </div>
      </main>

      {/* ── RIGHT COLUMN – NOW PLAYING (256px) ── */}
      <aside className="bg-[#0d0d0f] border-l border-[#2a2a35] w-64 h-full shrink-0 flex flex-col justify-between pl-[25px] pr-6 py-6">
        {/* Header "Now Playing" */}
        <div className="flex items-center justify-between pb-8">
          <span
            className="text-[#94a3b8] text-[12px] font-bold tracking-[1.2px] uppercase leading-[16px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Now Playing
          </span>
          <div className="flex items-center gap-1.5 bg-[#a855f7] px-2 py-0.5 rounded-full">
            <div className="flex items-end gap-[2px] h-3">
              {[0,1,2].map(i => (
                <div
                  key={i}
                  className="eq-bar"
                  style={{ '--bar-h': '10px', animationDelay: `${i*0.15}s` } as React.CSSProperties}
                />
              ))}
            </div>
            <span
              className="text-white text-[10px] font-bold uppercase leading-[15px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              En vivo
            </span>
          </div>
        </div>

        {/* Album art */}
        <div className="flex flex-col items-start gap-6">
          {/* Cover */}
          <div className="w-full h-[207px] rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(168,85,247,0.1)] shrink-0">
            <img
              src={imgNowPlayingAlbum}
              alt="Now Playing album"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Track info */}
          <div className="flex flex-col items-center w-full gap-1">
            <h4
              className="text-[#f1f5f9] text-[20px] font-bold leading-[28px] text-center"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Midnight City
            </h4>
            <p
              className="text-[#a855f7] text-[14px] font-medium leading-[20px] text-center"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              M83
            </p>
            <p
              className="text-[#64748b] text-[12px] leading-[16px] text-center"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Hurry Up, We're Dreaming
            </p>
          </div>

          {/* Progress bar */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between">
              <span
                className="text-[#64748b] text-[10px] leading-[15px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {progressLabel}
              </span>
              <span
                className="text-[#64748b] text-[10px] leading-[15px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                4:03
              </span>
            </div>
            <div className="bg-white/10 h-1 rounded-full overflow-hidden w-full">
              <div
                className="h-full rounded-full transition-all duration-200"
                style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #a855f7, #ec4899)' }}
              />
            </div>
          </div>

          {/* Playback controls */}
          <div className="flex items-center justify-center gap-6 w-full">
            <button className="opacity-70 hover:opacity-100 transition-opacity">
              <img alt="Prev" className="w-[16.25px] h-[15px]" src={imgPrevIcon} />
            </button>
            <button
              onClick={() => setIsPlaying(p => !p)}
              className="hover:scale-110 active:scale-95 transition-transform"
            >
              {isPlaying ? (
                <div className="w-10 h-10 rounded-full bg-[#a855f7] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                </div>
              ) : (
                <img alt="Play/Pause" className="w-10 h-10" src={imgPlayPauseIcon} />
              )}
            </button>
            <button className="opacity-70 hover:opacity-100 transition-opacity">
              <img alt="Next" className="w-[16.25px] h-[15px]" src={imgNextIcon} />
            </button>
          </div>
        </div>

        {/* Listeners section */}
        <div className="border-t border-[#2a2a35] pt-8 flex flex-col gap-4">
          <span
            className="text-[#94a3b8] text-[12px] font-bold tracking-[1.2px] uppercase leading-[16px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Listeners
          </span>
          <div className="flex items-center">
            {[imgListener1, imgListener2, imgListener3].map((src, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#0d0d0f] overflow-hidden shrink-0"
                style={{ marginLeft: i === 0 ? 0 : '-8px', zIndex: 10 - i }}
              >
                <img src={src} alt="listener" className="w-full h-full object-cover" />
              </div>
            ))}
            <div
              className="w-8 h-8 rounded-full border-2 border-[#0d0d0f] bg-[#141418] flex items-center justify-center shrink-0"
              style={{ marginLeft: '-8px', zIndex: 7 }}
            >
              <span
                className="text-[#94a3b8] text-[10px] font-bold leading-[15px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                +12
              </span>
            </div>
          </div>

          {/* Join Listening Room button */}
          <button className="flex items-center justify-center gap-2 bg-[#a855f7] text-white text-[16px] font-bold py-3 rounded-2xl hover:bg-[#9333ea] transition-colors w-full">
            <img alt="" className="w-6 h-4" src={imgJoinIcon} />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Join Listening Room
            </span>
          </button>
        </div>
      </aside>
    </div>
  );
}
