import React from 'react'
import { motion } from 'framer-motion'

const PixelThumb = ({ variant = 'star' }) => {
  const size = 96
  const cell = 6
  const cols = Math.floor(size / cell)

  const draw = () => {
    const blocks = []
    const add = (x, y, color) => blocks.push(<rect key={`${x}-${y}`} x={x * cell} y={y * cell} width={cell} height={cell} fill={color} />)

    if (variant === 'star') {
      const yellow = '#fde047'
      const orange = '#f59e0b'
      ;[
        [7,3],[8,3],[6,4],[7,4],[8,4],[9,4],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],
        [4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],[11,6],
        [3,7],[4,7],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[11,7],[12,7],
        [4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],
        [5,9],[6,9],[7,9],[8,9],[9,9],[10,9],
        [6,10],[7,10],[8,10],[9,10]
      ].forEach(([x,y]) => add(x,y,y < 7 ? orange : yellow))
    }

    if (variant === 'alien') {
      const g = '#22d3ee'
      const d = '#06b6d4'
      ;[[6,4],[7,4],[8,4],[9,4], [5,5],[10,5], [4,6],[11,6], [4,7],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[11,7], [5,8],[6,8],[7,8],[8,8],[9,8],[10,8], [6,9],[9,9]].forEach(([x,y],i)=>add(x,y,i%2?d:g))
    }

    if (variant === 'heart') {
      const r = '#ef4444'
      const p = '#f87171'
      ;[[6,4],[7,4],[9,4],[10,4],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[11,5],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],[11,6],[12,6],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[11,7],[6,8],[7,8],[8,8],[9,8],[10,8],[7,9],[8,9],[9,9],[8,10]].forEach(([x,y],i)=>add(x,y,i%3?p:r))
    }

    if (variant === 'controller') {
      const b = '#94a3b8'
      const d = '#64748b'
      const a = '#22c55e'
      const x = '#3b82f6'
      const y = '#f59e0b'
      const w = '#ef4444'
      ;[
        [5,6],[6,6],[7,6],[8,6],[9,6],[10,6],
        [4,7],[5,7],[10,7],[11,7],
        [4,8],[5,8],[10,8],[11,8],
        [5,9],[6,9],[10,9],[9,9]
      ].forEach(([cx,cy],i)=>add(cx,cy,i%2?d:b))
      ;[[6,8,a],[7,8,x],[8,8,y],[9,8,w]].forEach(([cx,cy,c])=>add(cx,cy,c))
    }

    return blocks
  }

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} shapeRendering="crispEdges" className="rounded-md border border-white/10 bg-[#0f142e]">
      <rect x="0" y="0" width={size} height={size} fill="#0f142e" />
      {draw()}
    </svg>
  )
}

const GameCard = ({ title, desc, badge, variant }) => {
  return (
    <motion.div whileHover={{ y: -4 }} className="group bg-white/5 border border-white/10 rounded-xl p-4 flex gap-4 items-center hover:bg-white/10 transition-colors">
      <PixelThumb variant={variant} />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-extrabold text-lg">{title}</h3>
          {badge && <span className="text-[10px] px-2 py-0.5 rounded bg-[#22c55e]/20 text-[#22c55e] font-bold uppercase tracking-wide">{badge}</span>}
        </div>
        <p className="text-sm text-white/70 mt-1">{desc}</p>
        <div className="mt-3 flex gap-2">
          <button className="px-3 py-1.5 text-xs rounded bg-[#7c3aed] hover:bg-[#6d28d9] font-bold">Play</button>
          <button className="px-3 py-1.5 text-xs rounded bg-white/10 hover:bg-white/20">Details</button>
        </div>
      </div>
    </motion.div>
  )
}

const GameShowcase = () => {
  const games = [
    { title: 'Star Hopper', desc: 'Bounce across twinkly stars and collect sparkly coins.', badge: 'New', variant: 'star' },
    { title: 'Pixel Pals', desc: 'Care for cute creatures in a cozy pixel village.', badge: 'Safe', variant: 'heart' },
    { title: 'Alien Sprinters', desc: 'Dash past silly aliens in a neon galaxy.', badge: 'Hot', variant: 'alien' },
    { title: 'Button Blaster', desc: 'Tap the right colors to power your rocket!', variant: 'controller' },
    { title: 'Candy Quest', desc: 'Solve sweet puzzles to unlock candy caves.', variant: 'heart' },
    { title: 'Sky Glider', desc: 'Ride the wind and dodge fluffy clouds.', variant: 'star' },
  ]

  return (
    <section id="games" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-3xl sm:text-4xl font-black">Popular games</h2>
        <a href="#join" className="text-sm text-[#22c55e] hover:underline">See all</a>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((g, i) => (
          <GameCard key={i} {...g} />
        ))}
      </div>
    </section>
  )
}

export default GameShowcase
