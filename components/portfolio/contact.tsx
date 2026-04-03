"use client"

import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl">05.</span> Get In Touch
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <p className="text-muted-foreground max-w-xl mb-12">
          I&apos;m currently open to new opportunities and always happy to connect.
          Feel free to reach out using any of the contact methods below!
        </p>

        {/* Contact Info */}
        <div className="space-y-8 max-w-2xl">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Email</h3>
                <a
                  href="mailto:bugslayer.anagha@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  bugslayer.anagha@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Phone</h3>
                <a
                  href="tel:+919188721473"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 9188 721 473
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Location</h3>
                <p className="text-muted-foreground">Vennala, Kochi, India</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <h3 className="font-bold text-foreground mb-4">Connect with me</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/anagha-cherumadathil/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/anaghacm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:bugslayer.anagha@gmail.com"
                className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all"
                aria-label="Send Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
