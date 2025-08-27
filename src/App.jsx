import React from 'react'
import Hero from './components/Hero'
import GameShowcase from './components/GameShowcase'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0e1a] text-white">
      <Hero />
      <GameShowcase />
      <Features />
      <Footer />
    </div>
  )
}

export default App
