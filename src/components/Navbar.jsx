import React, { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Recent Work', href: '#recent-work' },
    { name: 'Get In Touch', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-0 sm:pt-2">
      <div className="max-w-6xl mx-auto bg-[#1b1b1b] rounded-b-xl border-b border-x border-[#2d2d2d] px-6 py-4 flex items-center justify-between shadow-lg">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-[#3f8e00] flex items-center justify-center font-bold text-white group-hover:scale-105 transition-transform font-mono text-sm">
            MS
          </div>
          <span className="font-heading font-extrabold text-lg tracking-wider text-white">
            MUHAMMAD<span className="text-[#3f8e00]">.DEV</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#9c9c9c] hover:text-white text-sm font-mono tracking-wider transition-colors hover:scale-105 transform duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Icons & CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/muhsar27"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[#9c9c9c] hover:text-[#3f8e00] transition-colors p-1"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="mailto:muhsar4321@gmail.com"
              aria-label="Email"
              className="text-[#9c9c9c] hover:text-[#3f8e00] transition-colors p-1"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>

          <a
            href="#contact"
            className="text-xs font-mono font-bold bg-[#3f8e00] hover:bg-[#4ea805] text-white px-4 py-2 rounded border border-[#62ba1b] transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#9c9c9c] hover:text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 bg-[#1b1b1b] border border-[#2d2d2d] rounded-xl p-4 shadow-xl flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#9c9c9c] hover:text-white text-sm font-mono py-2 px-3 rounded hover:bg-[#252525]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#2d2d2d] flex justify-between items-center">
            <span className="text-xs text-[#757575] font-mono">muhsar4321@gmail.com</span>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono font-bold bg-[#3f8e00] text-white px-3 py-1.5 rounded"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
