import React, { useState } from 'react'

export const recentWorkData = [
  {
    id: 'ascii-art-web',
    title: 'AsciiArt Web — Visual Text Manipulation & Rendering Suite',
    category: 'Go & Web Service',
    liveUrl: 'https://ascii-art-web-mqal.onrender.com/',
    description:
      'A responsive web application and backend server built in Go that translates alphanumeric text into dynamic ASCII art banners with real-time font banner switching and error boundary safeguards.',
    image: '/assets/22c4f.png',
    stack: ['Go', 'HTML5', 'TailwindCSS', 'HTTP Handlers', 'Docker'],
    metrics: ['Sub-1ms render', 'Zero external dependencies', '100% test coverage'],
    detailedOverview:
      'Developed as an exploration into standard Go HTTP servers and dynamic templating. The system processes text streams against multiple banner specification files, enforcing strict character validation and robust status code reporting (400, 404, 500).',
    features: [
      'Multi-banner font selection (Standard, Shadow, Thinkertoy)',
      'Clean modern web interface with instant copy-to-clipboard functionality',
      'Containerized for instant Docker deployment on Linux/cloud hosts',
    ],
  },
  {
    id: 'pointbox-ui',
    title: 'PointBox UI — Dynamic Web Analytics & Data Management',
    category: 'Frontend Engineering',
    description:
      'A modular React & TypeScript web application engineered with accessible UI primitives, reactive data tables, and client-side filtering for complex operational metrics.',
    image: '/assets/7fa82.png',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'REST API'],
    metrics: ['60fps rendering', 'WCAG AA Compliant', 'Mobile-first design'],
    detailedOverview:
      'PointBox UI provides an intuitive dashboard for managing distributed project assets. Built with a component-driven approach, it features optimistic UI updates, responsive grid layouts, and custom interactive data cards.',
    features: [
      'Interactive filtering and fuzzy search across high-cardinality data sets',
      'High-contrast accessible theme built to match modern engineering toolsets',
      'Zero-layout-shift responsive components tailored for mobile and wide monitors',
    ],
  },
]

export default function RecentWork({ onSelectProject }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? recentWorkData.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === recentWorkData.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="recent-work" className="py-24 px-4 bg-white text-[#080808] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#080808] tracking-tight">
            Recent Work
          </h2>
          <div className="w-12 h-1 bg-[#3f8e00] rounded-full my-4" />
          <p className="font-mono text-[#757575] text-sm sm:text-base leading-relaxed">
            Hands-on projects and practical engineering builds created by Muhammad Sarumi.
          </p>
        </div>

        {/* Carousel / Navigation header */}
        <div className="flex justify-between items-center mb-8">
          <span className="font-mono text-xs uppercase tracking-wider text-gray-500">
            Selected Builds ({recentWorkData.length})
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous work"
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#3f8e00] hover:text-[#3f8e00] flex items-center justify-center transition-colors bg-white shadow-sm"
            >
              <img src="/assets/19af9.svg" alt="prev" className="w-2 h-3" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next work"
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#3f8e00] hover:text-[#3f8e00] flex items-center justify-center transition-colors bg-white shadow-sm"
            >
              <img src="/assets/3f4d1.svg" alt="next" className="w-2 h-3" />
            </button>
          </div>
        </div>

        {/* 2-column Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {recentWorkData.map((work) => (
            <div
              key={work.id}
              className="flex flex-col border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white group"
            >
              {/* Project Image */}
              <div
                className="relative overflow-hidden aspect-[16/10] bg-gray-100 cursor-pointer"
                onClick={() => onSelectProject(work)}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/95 text-gray-900 font-mono text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    Preview Project ↗
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono font-semibold text-[#3f8e00] uppercase tracking-wider">
                    {work.category}
                  </span>
                  <h3 className="font-heading font-extrabold text-xl text-[#080808]">
                    {work.title}
                  </h3>
                  <p className="font-mono text-sm text-[#757575] leading-relaxed">
                    {work.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {work.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-gray-100 border border-gray-200 text-gray-600 text-xs font-mono rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onSelectProject(work)}
                    className="inline-flex items-center gap-2 bg-[#3f8e00] hover:bg-[#4ea805] text-white px-5 py-2.5 rounded font-mono font-bold text-xs uppercase tracking-wider border border-[#62ba1b] transition-all"
                  >
                    <span>Know more</span>
                    <img src="/assets/4dc39.svg" alt="arrow" className="w-1.5 h-3" />
                  </button>
                  {work.liveUrl && (
                    <a
                      href={work.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded text-gray-800 hover:text-black font-mono font-bold text-xs uppercase tracking-wider bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-all"
                    >
                      <span>Visit Live Site</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
