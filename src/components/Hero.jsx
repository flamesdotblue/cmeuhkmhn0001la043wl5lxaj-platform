import React from 'react'
import { motion } from 'framer-motion'

const PixelSky = () => {
  return (
    <svg viewBox="0 0 800 420" className="w-full h-auto drop-shadow-2xl" shapeRendering="crispEdges">
      <defs>
        <linearGradient id="grad-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a235a" />
          <stop offset="100%" stopColor="#0b0e1a" />
        </linearGradient>
      </defs>
      <rect width="800" height="420" fill="url(#grad-sky)" />
      {/* Stars */}
      {Array.from({ length: 120 }).map((_, i) => (
        <rect key={i} x={(i * 53) % 800} y={(i * 37) % 320} width="2" height="2" fill={i % 3 === 0 ? '#9ad4ff' : '#ffffff'} opacity={0.8} />
      ))}
      {/* Pixel moon */}
      {Array.from({ length: 10 }).map((_, r) => (
        Array.from({ length: 10 }).map((__, c) => {
          const cx = 80 + c * 6
          const cy = 70 + r * 6
          const dx = c - 5
          const dy = r - 5
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 4.5 && !(dx < 0 && dy < 0 && d > 3.8)) {
            return <rect key={`${r}-${c}`} x={cx} y={cy} width="6" height="6" fill="#ffe28a" />
          }
          return null
        })
      ))}
      {/* Floating islands */}
      <g>
        <rect x="100" y="270" width="160" height="20" fill="#2f3d7a" />
        <rect x="100" y="290" width="160" height="8" fill="#1c254f" />
        <rect x="120" y="250" width="30" height="20" fill="#2f3d7a" />
        <rect x="210" y="250" width="30" height="20" fill="#2f3d7a" />

        <rect x="520" y="230" width="140" height="20" fill="#2f3d7a" />
        <rect x="520" y="250" width="140" height="8" fill="#1c254f" />
        <rect x="540" y="210" width="30" height="20" fill="#2f3d7a" />
        <rect x="610" y="210" width="30" height="20" fill="#2f3d7a" />
      </g>
      {/* Pixel character */}
      <g>
        {/* body */}
        <rect x="365" y="250" width="70" height="70" fill="#32a852" />
        <rect x="380" y="265" width="40" height="40" fill="#45c46a" />
        {/* eyes */}
        <rect x="392" y="275" width="6" height="6" fill="#111827" />
        <rect x="410" y="275" width="6" height="6" fill="#111827" />
        {/* smile */}
        <rect x="398" y="292" width="12" height="4" fill="#111827" />
        {/* hat */}
        <rect x="360" y="248" width="80" height="8" fill="#7c3aed" />
        <rect x="380" y="230" width="40" height="20" fill="#8b5cf6" />
        {/* sword */}
        <rect x="440" y="250" width="10" height="40" fill="#d1d5db" />
        <rect x="438" y="288" width="14" height="6" fill="#9ca3af" />
      </g>
      {/* Ground */}
      <g>
        <rect x="0" y="340" width="800" height="40" fill="#1f2937" />
        {Array.from({ length: 40 }).map((_, i) => (
          <rect key={i} x={i * 20} y="380" width="20" height="40" fill={i % 2 === 0 ? '#0f172a' : '#111827'} />
        ))}
        {/* Grass */}
        {Array.from({ length: 80 }).map((_, i) => (
          <rect key={`g-${i}`} x={i * 10} y="332" width="10" height="8" fill={i % 3 === 0 ? '#34d399' : '#10b981'} />
        ))}
      </g>
    </svg>
  )
}

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
        backgroundImage: `linear-gradient(0deg, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
        backgroundSize: '16px 16px',
      }} />

      <nav className="relative z-10 mx-auto max-w-6xl flex items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#7c3aed] shadow-lg" style={{ imageRendering: 'pixelated' }} />
          <span className="font-extrabold tracking-wide text-xl">PixelPlay Kids</span>
        </div>
        <div className="hidden sm:flex gap-6 text-sm text-white/80">
          <a href="#games" className="hover:text-white">Games</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#join" className="hover:text-white">Join</a>
        </div>
        <a href="#join" className="px-4 py-2 rounded-md bg-[#22c55e] hover:bg-[#16a34a] transition-colors text-sm font-semibold">Play Now</a>
      </nav>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-16 lg:grid lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
          >
            Adventure awaits in a world of pixel magic
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-lg text-white/80 max-w-xl"
          >
            Safe, friendly, and fun games designed for kids. Explore cute quests, collect shiny stars, and learn along the way.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-6 flex items-center gap-4"
          >
            <a href="#games" className="px-5 py-3 rounded-md bg-[#7c3aed] hover:bg-[#6d28d9] transition-colors font-bold shadow-lg">Browse Games</a>
            <a href="#features" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 transition-colors font-bold">Why PixelPlay?</a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-10 lg:mt-0"
        >
          <div className="rounded-xl border border-white/10 bg-black/20 p-2 backdrop-blur-sm">
            <PixelSky />
          </div>
          <p className="mt-3 text-xs text-white/60 text-center">Handcrafted pixel art cover — press play on imagination!</p>
        </motion.div>
      </div>
    </header>
  )
}

export default Hero
