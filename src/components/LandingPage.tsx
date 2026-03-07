// MusicTwins – Landing Page

const imgWaves = 'http://localhost:3845/assets/27ba77c773249312806f4965c977293ca8fb9d13.svg';
const imgSpotifyIcon = 'http://localhost:3845/assets/f4933b1ed886d1709dba727108a32af7233dd591.svg';
const imgPlayIcon = 'http://localhost:3845/assets/ac8795c7a42c2ff90086f00ecdcf4dd84d720d64.svg';
const imgLogoIcon = 'http://localhost:3845/assets/400aeaa6785302fc616735de510c3eece5dcaef5.svg';
const imgFeatureSync = 'http://localhost:3845/assets/39ae562604e35e6f02d7a3b46272cc13a0501966.svg';
const imgFeatureTwin = 'http://localhost:3845/assets/7f1b8776d9b01f0774997bbf26db80246ec74a2c.svg';
const imgFeatureViz = 'http://localhost:3845/assets/26758d06d46c0dedb8b91515a5477e8c8e51c777.svg';

interface LandingPageProps {
  onEnterApp?: () => void;
}

export default function LandingPage({ onEnterApp }: LandingPageProps) {
  return (
    <div
      className="relative w-full"
      style={{
        minHeight: '1485px',
        backgroundImage: `
          url('data:image/svg+xml;utf8,<svg viewBox="0 0 1280 1485" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%25" width="100%25" fill="url(%23grad)" opacity="1"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(181.02 0 0 210.01 0 0)"><stop stop-color="rgba(168,85,247,0.15)" offset="0"/><stop stop-color="rgba(168,85,247,0)" offset="0.5"/></radialGradient></defs></svg>'),
          url('data:image/svg+xml;utf8,<svg viewBox="0 0 1280 1485" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%25" width="100%25" fill="url(%23grad)" opacity="1"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(181.02 0 0 210.01 1280 1485)"><stop stop-color="rgba(168,85,247,0.1)" offset="0"/><stop stop-color="rgba(168,85,247,0)" offset="0.5"/></radialGradient></defs></svg>'),
          linear-gradient(90deg, rgb(13,13,15) 0%, rgb(13,13,15) 100%)
        `,
      }}
    >
      {/* Background Audio Waves */}
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute left-0 bottom-0 w-full h-[300px]">
          <img alt="" className="absolute block w-full h-full" src={imgWaves} />
        </div>
      </div>

      {/* ─── HEADER ─── */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-24 py-6 z-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-[#a855f7] flex items-center justify-center p-2 rounded-full w-[35.7px] h-[37.7px] shrink-0">
            <img alt="MusicTwins icon" className="w-[19.7px] h-[21.7px]" src={imgLogoIcon} />
          </div>
          <span
            className="text-white text-[20px] tracking-[-0.5px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            MusicTwins
          </span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-8">
          {['Características', 'Comunidad', 'Premium'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#f1f5f9] text-[14px] font-medium no-underline hover:text-[#a855f7] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Login button */}
        <button
          className="border border-[#1e293b] text-white text-[14px] font-medium px-8 py-2.5 rounded-full hover:border-[#a855f7] transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Login
        </button>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <main className="absolute top-[92px] left-0 right-0 flex flex-col items-center px-6 pt-1">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-8 max-w-[896px] w-full relative">
          {/* Floating decorative cards */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            {/* Top left card */}
            <div
              className="absolute left-[122px] top-[98px] w-[267px] h-[133px] flex items-center justify-center animate-float-card-1 opacity-50 hover:opacity-70 transition-opacity"
            >
              <div className="backdrop-blur-md bg-white/[0.04] border border-white/[0.12] rounded-[48px] p-4 w-[256px] shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-[#1e293b] rounded-2xl w-12 h-12 shrink-0" />
                  <div className="flex flex-col gap-2">
                    <div className="bg-[#334155] h-3 rounded-2xl w-24" />
                    <div className="bg-[#1e293b] h-2 rounded-2xl w-16" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom right card */}
            <div
              className="absolute right-[124px] bottom-[126px] w-[263px] h-[108px] flex items-center justify-center animate-float-card-2 opacity-50 hover:opacity-70 transition-opacity"
            >
              <div className="backdrop-blur-md bg-white/[0.04] border border-white/[0.12] rounded-[48px] p-4 w-[256px] shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-[#1e293b] rounded-2xl w-12 h-12 shrink-0" />
                  <div className="flex flex-col gap-2">
                    <div className="bg-[#334155] h-3 rounded-2xl w-24" />
                    <div className="bg-[#1e293b] h-2 rounded-2xl w-16" />
                  </div>
                </div>
              </div>
            </div>

            {/* Middle left card */}
            <div
              className="absolute left-[60px] bottom-[163px] w-[200px] h-[97px] flex items-center justify-center animate-float-card-3 opacity-50 hover:opacity-70 transition-opacity"
            >
              <div className="backdrop-blur-md bg-white/[0.04] border border-white/[0.12] rounded-[48px] p-3 w-[192px] shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-[rgba(168,85,247,0.2)] rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                    <img alt="" className="w-[5.5px] h-[7px]" src={imgPlayIcon} />
                  </div>
                  <div className="bg-[#1e293b] h-2 rounded-2xl w-20" />
                </div>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="flex flex-col items-center gap-4 relative z-10">
            <div className="bg-[rgba(168,85,247,0.1)] px-3 py-1 rounded-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span
                className="text-[#a855f7] text-[12px] tracking-[1.2px] uppercase font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Comparte tu ritmo
              </span>
            </div>

            {/* Headline */}
            <div className="text-center">
              <p
                className="text-white text-[72px] leading-[1] tracking-[-1.8px] animate-fade-in-up"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, animationDelay: '0.2s' }}
              >
                Tu música. La de tus
              </p>
              <p
                className="text-white text-[72px] leading-[1] tracking-[-1.8px] animate-fade-in-up"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, animationDelay: '0.3s' }}
              >
                amigos.
              </p>
              <p
                className="text-[#a855f7] text-[72px] leading-[1] tracking-[-1.8px] animate-fade-in-up"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, animationDelay: '0.4s' }}
              >
                En un solo lugar.
              </p>
            </div>

            {/* Subtitle */}
            <p
              className="text-[#94a3b8] text-[20px] text-center leading-[28px] max-w-[576px] animate-fade-in-up"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, animationDelay: '0.5s' }}
            >
              Descubre las coincidencias musicales con tus amigos en una experiencia premium diseñada para audiófilos.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 relative z-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={onEnterApp}
              className="flex items-center gap-3 bg-[#a855f7] text-[#0d0d0f] font-medium text-[16px] px-8 py-4 rounded-full shadow-[0px_0px_30px_0px_rgba(168,85,247,0.5)] hover:bg-[#9333ea] hover:shadow-[0px_0px_40px_0px_rgba(168,85,247,0.7)] transition-all duration-300 w-[320px] justify-center active:scale-95"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <img alt="Spotify" className="w-6 h-6" src={imgSpotifyIcon} />
              Continuar con Spotify
            </button>
            <p
              className="text-[#64748b] text-[12px] font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              No publicaremos nada sin tu permiso.
            </p>
          </div>
        </div>
      </main>

      {/* ─── FEATURES BAR ─── */}
      <section className="absolute top-[548.5px] left-0 right-0 px-24 py-12">
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              icon: imgFeatureSync,
              iconSize: { w: 46, h: 42 },
              title: 'Sincronización Total',
              desc: 'Conecta tu cuenta y analiza tus hábitos de escucha en segundos.',
            },
            {
              icon: imgFeatureTwin,
              iconSize: { w: 48, h: 36 },
              title: 'Algoritmo Twin',
              desc: 'Nuestro IA encuentra conexiones profundas entre tus listas y las de tus amigos.',
            },
            {
              icon: imgFeatureViz,
              iconSize: { w: 40, h: 40 },
              title: 'Visualizaciones',
              desc: 'Gráficos dinámicos de tus géneros, artistas y estados de ánimo compartidos.',
            },
          ].map((feat, i) => (
            <div
              key={feat.title}
              className="backdrop-blur-sm bg-white/[0.02] border border-white/[0.05] rounded-[32px] p-[25px] flex flex-col gap-4 hover:bg-white/[0.04] hover:border-purple-500/20 transition-all duration-300 cursor-default animate-fade-in-up"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <img
                alt={feat.title}
                style={{ width: feat.iconSize.w, height: feat.iconSize.h }}
                src={feat.icon}
              />
              <div className="flex flex-col gap-1.5">
                <h3
                  className="text-white text-[18px] font-medium leading-[28px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {feat.title}
                </h3>
                <p
                  className="text-[#94a3b8] text-[14px] leading-[22.75px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── LIBRARY SECTION ─── */}
      <section className="absolute top-[840px] left-0 right-0 py-16">
        <h2
          className="text-white text-[24px] font-bold px-24 mb-8 leading-[32px]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Tendencias globales
        </h2>
        <div className="flex gap-6 px-24 overflow-x-auto pb-8">
          {[
            { title: 'After Hours', artist: 'The Weeknd' },
            { title: 'Future Nostalgia', artist: 'Dua Lipa' },
            { title: 'Midnights', artist: 'Taylor Swift' },
            { title: 'Un Verano Sin Ti', artist: 'Bad Bunny' },
          ].map((album) => (
            <div key={album.title} className="flex flex-col gap-4 shrink-0 w-[256px] group cursor-pointer">
              <div className="bg-[#1e293b] rounded-[48px] w-[256px] h-[256px] group-hover:bg-[#2a3444] transition-colors" />
              <div>
                <p
                  className="text-white text-[16px] font-medium leading-[24px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {album.title}
                </p>
                <p
                  className="text-[#94a3b8] text-[14px] leading-[20px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {album.artist}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        className="absolute bottom-0 left-0 right-0 border-t border-white/[0.05] flex items-center justify-between px-24 pb-10 pt-10"
        style={{ top: '1380px' }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-[#a855f7] flex items-center justify-center rounded-full w-6 h-6">
            <img alt="" className="w-[11.49px] h-[12.66px]" src={imgLogoIcon} />
          </div>
          <span
            className="text-white text-[16px] font-bold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            MusicTwins
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          {['Privacidad', 'Términos', 'Contacto'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#64748b] text-[14px] no-underline hover:text-white transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-[#64748b] text-[12px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          © 2024 MusicTwins. No afiliado con Spotify AB.
        </p>
      </footer>
    </div>
  );
}
