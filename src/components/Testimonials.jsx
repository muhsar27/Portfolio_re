import React from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        'Alex engineered our core analytics platform 3 weeks ahead of schedule. The WebSocket architecture handles 100k events/sec flawlessly with zero UI stutter.',
      name: 'Sarah Chen',
      role: 'VP of Engineering at FinEdge',
      photo: '/assets/ccf41.png',
    },
    {
      id: 2,
      quote:
        'Unmatched work ethic and technical clarity. Alex translated our design system into robust, accessible React components with incredible fidelity and speed.',
      name: 'David Miller',
      role: 'Founder & CEO at ScaleForge',
      photo: '/assets/2c51b.png',
    },
    {
      id: 3,
      quote:
        'Transformed our legacy codebase into a lightning-fast modern application. Our Lighthouse performance scores jumped from 42 to 99 across all screens.',
      name: 'Elena Rostova',
      role: 'Head of Product at LearnMatrix',
      photo: '/assets/c61ff.png',
    },
    {
      id: 4,
      quote:
        'A rare hybrid of deep full-stack backend competence and obsessive frontend craftsmanship. Alex raised our entire team’s development standards.',
      name: 'Marcus Vance',
      role: 'Chief Technology Officer at NovaMed',
      photo: '/assets/fa81b.png',
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-4 bg-[#080808] text-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Testimonials
          </h2>
          <div className="w-12 h-1 bg-[#3f8e00] rounded-full my-4" />
          <p className="font-mono text-[#9c9c9c] text-sm sm:text-base leading-relaxed">
            What engineering leaders, product heads, and startup founders say about shipping production systems with me.
          </p>
        </div>

        {/* 2x2 Grid matching Figma layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative border border-[#484848] bg-[#0d0d0d] rounded-lg p-8 flex flex-col justify-between hover:border-[#3f8e00]/60 transition-colors duration-200 group"
            >
              {/* Giant quote mark watermark from Figma template */}
              <span className="font-heading text-7xl text-gray-800 select-none absolute top-4 right-6 group-hover:text-[#3f8e00]/20 transition-colors">
                “
              </span>

              <p className="font-mono text-[#cccccc] text-sm sm:text-base leading-relaxed relative z-10 mb-8">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-[#1e1e1e]">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#484848] shrink-0 bg-[#1b1b1b]">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-white">
                    {t.name}
                  </h4>
                  <p className="font-mono text-xs text-[#9c9c9c]">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

