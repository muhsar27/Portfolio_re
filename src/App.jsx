import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import RecentWork from './components/RecentWork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col font-mono selection:bg-[#3f8e00] selection:text-white">
      {/* Floating Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Cover / Hero Header */}
        <Hero />

        {/* Case Studies Section (White background high contrast from template) */}
        <CaseStudies onSelectProject={(p) => setSelectedProject(p)} />

        {/* Recent Work Section (Light background with carousel controls from template) */}
        <RecentWork onSelectProject={(p) => setSelectedProject(p)} />

        {/* Get In Touch Contact Section (Dark background with form from template) */}
        <Contact />
      </main>

      {/* Footer Bar */}
      <Footer />

      {/* Project Inspection Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

