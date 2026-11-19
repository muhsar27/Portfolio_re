import React, { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#121212] border border-[#2d2d2d] rounded-2xl shadow-2xl text-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#1b1b1b] border-b border-[#2d2d2d]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3f8e00]" />
            <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
              {project.tag || project.category || 'Project Detail'}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-[#252525] hover:bg-[#333333] text-gray-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* Main Image Banner */}
          <div className="rounded-xl overflow-hidden border border-[#2a2a2a] bg-black aspect-[16/9]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Tagline */}
          <div className="flex flex-col gap-2">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              {project.title}
            </h3>
            <p className="font-mono text-[#9c9c9c] text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#1b1b1b] border border-[#333333] text-xs font-mono rounded text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#181818] rounded-xl border border-[#282828]">
              {project.metrics.map((metric, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-xs text-[#757575] font-mono">Metric #{i + 1}</div>
                  <div className="font-mono font-bold text-sm text-[#3f8e00] mt-0.5">{metric}</div>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Overview */}
          {project.detailedOverview && (
            <div className="flex flex-col gap-2">
              <h4 className="font-heading font-bold text-lg text-white">System Architecture & Engineering</h4>
              <p className="font-mono text-sm text-[#cccccc] leading-relaxed">
                {project.detailedOverview}
              </p>
            </div>
          )}

          {/* Features */}
          {project.features && (
            <div className="flex flex-col gap-2">
              <h4 className="font-heading font-bold text-lg text-white">Key Features Delivered</h4>
              <ul className="list-disc list-inside space-y-1 font-mono text-sm text-[#a0a0a0]">
                {project.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 border-t border-[#252525] flex flex-wrap justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#252525] hover:bg-[#333333] rounded font-mono text-xs uppercase tracking-wider text-gray-300 transition-colors"
            >
              Close
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-white hover:bg-gray-200 text-black rounded font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
              >
                <span>Visit Live Site</span>
                <span>↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-[#1b1b1b] hover:bg-[#252525] border border-[#383838] text-white rounded font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
              >
                <span>GitHub Repo</span>
                <span>↗</span>
              </a>
            )}
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2.5 bg-[#3f8e00] hover:bg-[#4ea805] text-white rounded font-mono font-bold text-xs uppercase tracking-wider border border-[#62ba1b] transition-all"
            >
              Discuss Similar Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

