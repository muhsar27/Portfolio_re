import React from 'react'

export const caseStudyData = [
  {
    id: 'centric-logistics-hackathon',
    tag: 'Hackathon Project • Team of 4',
    tagBg: 'bg-[#e0fff8]',
    tagText: 'text-[#2ab090]',
    btnBg: 'bg-[#2ab090] hover:bg-[#23997d] border border-[#48c9ab]',
    title: 'Centric — P2P Urban Logistics Marketplace (Wema Hackaholics 7.0)',
    liveUrl: 'https://orbit-billing-nomba.vercel.app/',
    description:
      'A collaborative peer-to-peer logistics marketplace designed for African cities. Built for the Wema Hackaholics 7.0 Hackathon with a team of 4, Centric coordinates verified commuters, existing journeys, parcel demand, trust, and proof-of-delivery to move goods efficiently with zero dedicated fleet overhead.',
    image: '/assets/32728.png',
    stack: ['Next.js (App Router)', 'TypeScript', 'Redux Toolkit', 'Framer Motion', 'Tailwind CSS'],
    metrics: ['Team of 4 Engineers', 'Wema Hackaholics 7.0', 'Zero Fleet Overhead'],
    detailedOverview:
      'African urban centers face severe logistics friction: high delivery fees, urban congestion, and fragmented dispatch operations. Centric solves this by turning daily commuters into verified couriers. Developed collaboratively in a 4-person team during Wema Hackaholics 7.0 (YabaTech), the frontend incorporates multi-step identity verification, vehicle profiling, dynamic parcel routing, and real-time state management using Redux Toolkit and Next.js.',
    features: [
      'Multi-step verified commuter onboarding with government ID check, phone verification, and vehicle registration',
      'Dynamic journey matching coordinating parcel senders with commuters traveling in the same transit direction',
      'Scalable state management using Redux Toolkit with Framer Motion animated interactive step indicators',
      'Built and integrated under intense hackathon sprint conditions with agile Git team collaboration',
    ],
  },
  {
    id: 'clobgroup-real-estate',
    tag: 'Client Production Platform',
    tagBg: 'bg-[#fff6e9]',
    tagText: 'text-[#ffa217]',
    btnBg: 'bg-[#ffa217] hover:bg-[#e08e12] border border-[#ffb648]',
    title: 'CLOB Group — Curated Luxury Real Estate & Advisory Platform',
    liveUrl: 'https://clobgroup.netlify.app/',
    description:
      'Engineered the digital portfolio and web platform for CLOB Integrated Concepts Alliance Limited. Features luxury property showcases across Ikoyi, Banana Island, and Victoria Island with responsive media tours, interactive catalog filtering, and direct concierge lead workflows.',
    image: '/assets/clobgroup-preview.jpg',
    stack: ['JavaScript (ES6+)', 'HTML5 & CSS3', 'Responsive Design', 'Netlify', 'UI Architecture'],
    metrics: ['Live in Production', '100% Mobile Optimized', 'Lagos Prime Properties'],
    detailedOverview:
      'CLOB Group required a high-end web presence reflecting the prestige of premier Nigerian real estate (Banana Island waterfront villas, Ikoyi sky apartments, and Victoria Island penthouses). Developed custom property listings with dynamic filtering, high-resolution visual presentations, and integrated WhatsApp / email concierge communication channels.',
    features: [
      'Interactive luxury property showcase with categorized neighborhood filtering',
      'High-performance responsive media layouts optimized for mobile and desktop screens',
      'Direct concierge connection flows converting web visitors into advisory leads',
    ],
  },
  {
    id: 'streampay-fintech',
    tag: 'Fintech & Web3',
    tagBg: 'bg-[#d0e6ff]',
    tagText: 'text-[#000aff]',
    btnBg: 'bg-[#000aff] hover:bg-[#1a23ff] border border-[#3d47ff]',
    title: 'StreamPay — Decentralized Payment Gateway & Merchant Portal',
    description:
      'Architected a high-throughput payment engine integrating Stellar network rails with a responsive merchant dashboard. Features sub-second payment verification, automated multi-currency settlement, and live websocket transaction streams.',
    image: '/assets/3f9d7.png',
    stack: ['Go', 'TypeScript', 'React', 'TailwindCSS', 'PostgreSQL', 'Docker'],
    metrics: ['< 3s Settlement Time', '100% Non-Custodial', 'Automated Invoicing'],
    detailedOverview:
      'Traditional cross-border payments suffer from high transaction fees and multi-day settlement delays. StreamPay bridges decentralized ledger technology with modern web application engineering. The backend, built with Go, continuously polls ledger state and emits instant push events to React frontend clients via WebSockets.',
    features: [
      'Low-latency WebSocket transaction stream providing immediate payment confirmation',
      'Non-custodial merchant authentication with granular API key management',
      'Responsive React dashboard with historical volume analytics and exportable CSV ledgers',
    ],
  },
  {
    id: 'trustrove-security',
    tag: 'Web Security',
    tagBg: 'bg-[#e0fff8]',
    tagText: 'text-[#2ab090]',
    btnBg: 'bg-[#2ab090] hover:bg-[#23997d] border border-[#48c9ab]',
    title: 'TrusTrove — Trustless Web Escrow & Milestone Verification Platform',
    description:
      'Engineered an automated digital escrow web application with cryptographic contract validations, multi-sig approval workflows, and client-side key protection designed for remote contractor agreements.',
    image: '/assets/21b38.png',
    stack: ['TypeScript', 'Next.js', 'React', 'TailwindCSS', 'Web3', 'Docker'],
    metrics: ['Zero Counterparty Risk', 'Multi-Sig Approval', 'Instant Dispute Resolution'],
    detailedOverview:
      'Freelancers and clients frequently encounter trust deficits when delivering software contracts. TrusTrove provides a trustless intermediary interface. Funds are held in cryptographically guaranteed escrow until both parties sign off on milestone deliverables, preventing unilateral payment withholding.',
    features: [
      'Milestone tracking interface with encrypted deliverable upload verification',
      'Two-party multisig release mechanism with automated timeout resolution',
      'Client-side key derivation and cryptographic hash verification to ensure zero data leakage',
    ],
  },
]

export default function CaseStudies({ onSelectProject }) {
  return (
    <section id="case-studies" className="py-24 px-4 bg-white text-[#080808] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#080808] tracking-tight">
            Case Studies & Work
          </h2>
          <div className="w-12 h-1 bg-[#3f8e00] rounded-full my-4" />
          <p className="font-mono text-[#757575] text-sm sm:text-base leading-relaxed">
            Real production systems, client platforms, and collaborative hackathon builds engineered by Muhammad Sarumi.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="flex flex-col gap-24">
          {caseStudyData.map((item, index) => {
            const isReversed = index % 2 === 1

            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div
                  className={`lg:col-span-6 flex flex-col items-start gap-5 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <span
                    className={`inline-block px-3 py-1 rounded-full font-mono font-bold text-xs tracking-wider uppercase ${item.tagBg} ${item.tagText}`}
                  >
                    {item.tag}
                  </span>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#080808] leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-mono text-[#666666] text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-gray-100 border border-gray-200 text-gray-700 text-xs font-mono rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 py-3 border-y border-gray-100 w-full">
                    {item.metrics.map((metric, i) => (
                      <div key={i} className="text-center lg:text-left">
                        <div className="font-mono font-bold text-xs text-gray-900">{metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <button
                      onClick={() => onSelectProject(item)}
                      className={`flex items-center gap-3 px-6 py-3 rounded text-white font-mono font-bold text-sm transition-all duration-150 active:scale-95 ${item.btnBg}`}
                    >
                      <span>View details</span>
                      <img src="/assets/4dc39.svg" alt="arrow" className="w-1.5 h-3" />
                    </button>

                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded text-gray-800 hover:text-black font-mono font-bold text-sm bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-all duration-150 active:scale-95"
                      >
                        <span>Visit Live Site</span>
                        <span className="text-xs">↗</span>
                      </a>
                    )}

                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded text-gray-800 hover:text-black font-mono font-bold text-sm bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-all duration-150 active:scale-95"
                      >
                        <span>GitHub Repo</span>
                        <span className="text-xs">↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual / Mockup Side */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative group cursor-pointer" onClick={() => onSelectProject(item)}>
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm aspect-[16/10] flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white/95 text-gray-900 font-mono text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                          Click to inspect project ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
