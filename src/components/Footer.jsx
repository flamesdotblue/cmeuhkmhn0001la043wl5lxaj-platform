import React, { useState } from 'react'
import PixelLogo from './PixelLogo'

const Footer = () => {
  const [seed] = useState(() => Math.floor(Math.random() * 1_000_000))
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <PixelLogo seed={seed} size={24} />
          <span className="text-sm text-white/70 pixel-font">© {new Date().getFullYear()} PixelPlay Kids</span>
        </div>
        <div className="text-xs text-white/60 flex gap-4">
          <a href="#" className="hover:text-white pixel-font">Privacy</a>
          <a href="#" className="hover:text-white pixel-font">Parents</a>
          <a href="#" className="hover:text-white pixel-font">Support</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
