import React from 'react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1b1b1b] border-t border-[#252525] py-8 px-4 text-[#9c9c9c] font-mono text-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright info from template */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span>© {new Date().getFullYear()} Muhammad Sarumi.</span>
          <span className="hidden sm:inline">•</span>
          <span>Full-Stack Web Dev & Systems Engineering</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-white flex items-center gap-2 hover:underline transition-colors"
        >
          <span>Back to Top</span>
          <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  )
}
