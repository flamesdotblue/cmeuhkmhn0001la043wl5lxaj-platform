import React from 'react'
import { Shield, Star, Gamepad2, Sparkles } from 'lucide-react'

const FeatureItem = ({ icon: Icon, title, desc, color }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
    <div className={`w-9 h-9 rounded-md flex items-center justify-center mb-3`} style={{ backgroundColor: color }}>
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="font-extrabold text-lg">{title}</h3>
    <p className="text-sm text-white/70 mt-1">{desc}</p>
  </div>
)

const Features = () => {
  const features = [
    { icon: Shield, title: 'Kid-safe', desc: 'No chats, no ads, just friendly fun with gentle difficulty.', color: '#16a34a' },
    { icon: Star, title: 'Learn & Play', desc: 'Mini-challenges that build memory, logic, and creativity.', color: '#f59e0b' },
    { icon: Gamepad2, title: 'Easy Controls', desc: 'Tap or arrow keys—simple controls for small hands.', color: '#3b82f6' },
    { icon: Sparkles, title: 'Pixel Perfect', desc: 'Bright pixel art and cheerful sounds bring smiles.', color: '#a855f7' },
  ]

  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black">Made for kids, loved by families</h2>
        <p className="mt-3 text-white/70">Our games are crafted with care to be age-appropriate, educational, and delightful.</p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <FeatureItem key={i} {...f} />
        ))}
      </div>

      <div id="join" className="mt-14 bg-gradient-to-r from-[#7c3aed] to-[#22c55e] p-1 rounded-2xl">
        <div className="bg-[#0b0e1a] rounded-2xl p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-black">Ready to press start?</h3>
          <p className="mt-2 text-white/80">Create a free account and unlock daily rewards, parental controls, and more.</p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a className="px-6 py-3 rounded-md bg-[#22c55e] hover:bg-[#16a34a] font-bold" href="#">Get Started</a>
            <a className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20" href="#">Play as Guest</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
