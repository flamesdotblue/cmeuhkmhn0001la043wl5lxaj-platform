import React, { useMemo } from 'react'

// Simple symmetric pixel identicon logo
// Click target provided by parent; this component is pure (deterministic by seed)
const PixelLogo = ({ seed = 0, size = 48 }) => {
  const cell = 6
  const cols = Math.floor(size / cell)
  const rows = cols

  const { blocks, palette, bg } = useMemo(() => {
    const rng = mulberry32(seed || 1 + Math.floor(Math.random() * 999999))
    const paletteChoices = [
      ['#7c3aed', '#a78bfa', '#22c55e'],
      ['#f59e0b', '#fde047', '#ef4444'],
      ['#06b6d4', '#22d3ee', '#3b82f6'],
      ['#10b981', '#34d399', '#84cc16'],
    ]
    const palette = paletteChoices[Math.floor(rng() * paletteChoices.length)]
    const bg = '#0f142e'

    const blocks = []
    const half = Math.floor(cols / 2)
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < half; x++) {
        if (rng() > 0.5) {
          const color = palette[Math.floor(rng() * palette.length)]
          blocks.push({ x, y, color })
          // mirror
          blocks.push({ x: cols - 1 - x, y, color })
        }
      }
    }

    // Add a centered emblem cross
    const cx = Math.floor(cols / 2)
    const cy = Math.floor(rows / 2)
    const emblem = palette[0]
    ;[
      [cx, cy], [cx, cy - 1], [cx, cy + 1], [cx - 1, cy], [cx + 1, cy]
    ].forEach(([ex, ey]) => blocks.push({ x: ex, y: ey, color: emblem }))

    return { blocks, palette, bg }
  }, [seed, cols, rows])

  return (
    <svg viewBox={`0 0 ${cols * cell} ${rows * cell}`} width={size} height={size} shapeRendering="crispEdges" className="rounded shadow" aria-label="Pixel identicon logo">
      <rect x="0" y="0" width={cols * cell} height={rows * cell} fill={bg} />
      {blocks.map((b, i) => (
        <rect key={i} x={b.x * cell} y={b.y * cell} width={cell} height={cell} fill={b.color} />
      ))}
      {/* Top stripe accent */}
      <rect x="0" y="0" width={cols * cell} height={cell} fill={palette[1]} opacity="0.6" />
    </svg>
  )
}

// Lightweight seeded RNG for repeatable patterns when seed supplied
function mulberry32(a) {
  return function() {
    var t = (a += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export default PixelLogo
