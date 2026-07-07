import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-primary text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-2xl text-secondary">
            K4 & Partners
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-secondary transition">Home</a>
            <a href="#about" className="hover:text-secondary transition">About</a>
            <a href="#practices" className="hover:text-secondary transition">Practices</a>
            <a href="#team" className="hover:text-secondary transition">Team</a>
            <a href="#contact" className="hover:text-secondary transition">Contact</a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
