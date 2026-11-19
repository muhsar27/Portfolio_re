import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate sending message
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ email: '', mobile: '', message: '' })
    }, 800)
  }

  return (
    <section id="contact" className="py-24 px-4 bg-[#080808] text-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading & Subtitle */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-[#3f8e00] rounded-full my-4" />
          <p className="font-mono text-[#9c9c9c] text-sm sm:text-base leading-relaxed">
            Interested in collaborating on a web project, discussing backend architecture, or hiring me for a development role? Drop me a line below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-4xl mx-auto">
          {/* Quick Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-6 p-6 bg-[#121212] border border-[#252525] rounded-xl">
            <h3 className="font-heading font-bold text-xl text-white">Direct Connect</h3>
            <p className="font-mono text-sm text-[#9c9c9c] leading-relaxed">
              I’m always open to discussing new opportunities, open-source projects, or engineering ideas.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              <a
                href="mailto:muhsar4321@gmail.com"
                className="flex items-center gap-3 text-sm font-mono text-gray-300 hover:text-[#3f8e00] transition-colors p-2 rounded bg-[#1a1a1a] border border-[#2a2a2a]"
              >
                <svg className="w-4 h-4 fill-current text-[#3f8e00]" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="truncate">muhsar4321@gmail.com</span>
              </a>

              <a
                href="https://github.com/muhsar27"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-mono text-gray-300 hover:text-[#3f8e00] transition-colors p-2 rounded bg-[#1a1a1a] border border-[#2a2a2a]"
              >
                <svg className="w-4 h-4 fill-current text-[#3f8e00]" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>github.com/muhsar27</span>
              </a>
            </div>

            <div className="pt-2 border-t border-[#252525]">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-[#3f8e00]">
                <span className="w-2 h-2 rounded-full bg-[#3f8e00] animate-pulse" />
                Response time: &lt; 24 hours
              </span>
            </div>
          </div>

          {/* Contact Form Card matching Figma layout */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#252525] rounded-xl p-8 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#3f8e00]/20 border border-[#3f8e00] flex items-center justify-center text-[#3f8e00]">
                  <svg className="w-7 h-7 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white">Message Sent!</h3>
                <p className="font-mono text-sm text-[#9c9c9c] max-w-xs">
                  Thank you for reaching out! Muhammad will respond to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-mono text-[#3f8e00] underline hover:text-[#4ea805]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs font-semibold text-gray-200">
                    Email <span className="text-[#3f8e00]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-[#f8f8f8] text-[#080808] text-sm font-mono px-3.5 py-2.5 rounded border border-[#d8d8d8] focus:border-[#3f8e00] focus:ring-1 focus:ring-[#3f8e00] outline-none placeholder:text-[#757575]"
                  />
                </div>

                {/* Mobile */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs font-semibold text-gray-200">
                    Mobile / Phone
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile (e.g. +1 555 0192)"
                    className="bg-[#f8f8f8] text-[#080808] text-sm font-mono px-3.5 py-2.5 rounded border border-[#d8d8d8] focus:border-[#3f8e00] focus:ring-1 focus:ring-[#3f8e00] outline-none placeholder:text-[#757575]"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs font-semibold text-gray-200">
                    Message <span className="text-[#3f8e00]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, role, or questions..."
                    className="bg-[#f8f8f8] text-[#080808] text-sm font-mono px-3.5 py-2.5 rounded border border-[#d8d8d8] focus:border-[#3f8e00] focus:ring-1 focus:ring-[#3f8e00] outline-none placeholder:text-[#757575] resize-none"
                  />
                </div>

                {/* Submit CTA matching template */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 bg-[#3f8e00] hover:bg-[#47a100] active:scale-[0.99] disabled:opacity-50 border border-[#62ba1b] flex items-center justify-center gap-3 py-3.5 px-6 rounded font-mono font-bold text-sm text-white uppercase tracking-wider transition-all"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Submit</span>
                      <img src="/assets/4dc39.svg" alt="arrow" className="w-1.5 h-3" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
