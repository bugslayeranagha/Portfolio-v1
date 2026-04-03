"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, MapPin, ArrowDown, Download } from "lucide-react"

const roles = [
  "Software Engineer",
  "Frontend Developer",
  "Angular Expert",
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="opacity-0 animate-fade-in-up">
          <p className="text-primary text-sm font-mono mb-4">Hi, my name is</p>
        </div>

        <div className="opacity-0 animate-fade-in-up animation-delay-200">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance">
            Anagha C M
          </h1>
        </div>

        <div className="opacity-0 animate-fade-in-up animation-delay-400">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-muted-foreground mb-6 h-16 flex items-center">
            <span>{displayText}</span>
            <span className="w-1 h-8 md:h-12 bg-primary ml-1 animate-pulse" />
          </h2>
        </div>

        <div className="opacity-0 animate-fade-in-up animation-delay-600">
          <p className="text-muted-foreground max-w-xl text-base sm:text-lg leading-relaxed mb-8">
            Passionate and detail-oriented Software Engineer with 3+ years of
            hands-on experience in{" "}
            <span className="text-primary">Angular and TypeScript</span>.
            Proven expertise in Micro Frontend architectures, D3.js data
            visualization, and REST API integration.
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm">Kochi, India</span>
          </div>
        </div>

        <div className="opacity-0 animate-fade-in-up animation-delay-600 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Mail size={18} />
            Get In Touch
          </a>

          <a
            href="/Anagha-CM-Resume.pdf"
            download="Anagha-CM-Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
          >
            <Download size={18} />
            Download Resume
          </a>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/anaghacm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all"
              aria-label="GitHub Profile"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/anagha-cherumadathil/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:bugslayer.anagha@gmail.com"
              className="p-3 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all"
              aria-label="Send Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
