import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-[#7c3aed]" style={{ imageRendering: 'pixelated' }} />
          <span className="text-sm text-white/70">© {new Date().getFullYear()} PixelPlay Kids</span>
        </div>
        <div className="text-xs text-white/60 flex gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Parents</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
