import React from 'react'

export default function Hero() {
  const techLogos = [
    { name: 'Go', label: 'Golang' },
    { name: 'React', label: 'React.js' },
    { name: 'TypeScript', label: 'TypeScript' },
    { name: 'Docker', label: 'Docker' },
    { name: 'AWS', label: 'AWS Cloud' },
    { name: 'PostgreSQL', label: 'PostgreSQL' },
  ]

  return (
    <section id="hero" className="relative min-h-[700px] flex flex-col justify-between pt-12 pb-16 px-4 max-w-6xl mx-auto">
      {/* Hero Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 my-auto">
        {/* Left Column: Bio & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1b1b] border border-[#2d2d2d] text-xs font-mono text-[#3f8e00]">
            <span className="w-2 h-2 rounded-full bg-[#3f8e00] animate-pulse" />
            Available for Full-Stack & Backend Engineering Roles
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Muhammad Sarumi
            </h1>
            <p className="font-mono text-lg text-[#3f8e00] font-semibold">
              Full-Stack Web Developer & Systems Engineer
            </p>
            <p className="font-mono text-[#9c9c9c] text-sm sm:text-base leading-relaxed max-w-xl">
              Electrical Engineer with a strong foundation in backend development, secure cloud architecture, and modern web applications. Specialized in crafting reliable systems with <strong>Go</strong>, <strong>TypeScript</strong>, <strong>React</strong>, and <strong>Docker</strong>.
            </p>
          </div>

          {/* Call to action buttons matching Figma template */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group bg-[#3f8e00] hover:bg-[#47a100] active:scale-[0.98] border border-[#62ba1b] flex items-center gap-3 px-8 py-4 rounded text-white font-mono font-bold text-base transition-all duration-200"
            >
              <span>Get in touch</span>
              <img
                src="/assets/4dc39.svg"
                alt="arrow"
                className="w-2 h-3.5 transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://github.com/muhsar27"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1b1b1b] hover:bg-[#252525] border border-[#333333] hover:border-[#484848] flex items-center gap-2 px-6 py-4 rounded text-white font-mono font-medium text-sm transition-all"
            >
              <span>GitHub Profile</span>
              <span className="text-gray-400">↗</span>
            </a>
          </div>

          {/* Engineering Strengths */}
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#1b1b1b] w-full max-w-lg">
            <div>
              <div className="font-heading font-extrabold text-2xl text-white">B.Sc. EE</div>
              <div className="text-xs text-[#757575] font-mono">Electrical Eng.</div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-2xl text-[#3f8e00]">Go & TS</div>
              <div className="text-xs text-[#757575] font-mono">Core Languages</div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-2xl text-white">Cloud/Sec</div>
              <div className="text-xs text-[#757575] font-mono">AWS & Security</div>
            </div>
          </div>
        </div>

        {/* Right Column: Muhammad's Headshot in Figma Circular Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-[#1b1b1b] bg-[#121212] p-1.5 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="/assets/muhammad-headshot.jpeg"
                  alt="Muhammad Sarumi"
                  className="w-full h-full object-cover object-center contrast-105 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Strip matching "Worked with" layout in template */}
      <div className="mt-16 pt-8 border-t border-[#1b1b1b] relative z-10">
        <p className="font-mono text-sm text-[#757575] uppercase tracking-widest mb-4">
          Core Engineering Tech Stack
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 items-center">
          {techLogos.map((tech) => (
            <div
              key={tech.name}
              className="group border border-[#1b1b1b] hover:border-[#3f8e00]/60 bg-[#0d0d0d] rounded-lg h-14 flex items-center justify-center p-3 transition-all hover:bg-[#151515]"
            >
              <span className="font-mono text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
