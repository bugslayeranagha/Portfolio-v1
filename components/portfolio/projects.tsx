import { ExternalLink, Github, Folder, Star } from "lucide-react"

const featuredProjects = [
  {
    title: "Aurex – Augmented Risk and Audit Analytics",
    description:
      "A cloud-based risk and audit management platform integrating risk management, audit analytics, and continuous audit modules into a unified Angular dashboard. Contributed to Micro Frontend architecture enabling independent team releases and developed user-friendly data visualization modules.",
    tech: ["Angular", "TypeScript", "REST APIs", "Micro Frontend", "D3.js"],
    role: "Software Engineer",
    company: "Beinex Consulting",
    isInternshipRelated: false,
    link: "https://www.aurex.ai/",
  },
  {
    title: "DMI – Department of Government Enablement, Abu Dhabi",
    description:
      "Developed a customized Angular enterprise web application for Abu Dhabi's Department of Government Enablement, serving multiple government entities. Created interactive dashboards, multi-level assessment systems, and D3.js data visualizations with automated digitized approval workflows.",
    tech: ["Angular", "TypeScript", "D3.js", "REST APIs", "Government Scale"],
    role: "Software Engineer",
    company: "Beinex Consulting",
    isInternshipRelated: false,
    link: null,
  },
]

const otherProjects = [
  {
    title: "Bank Application",
    description:
      "Full-stack banking application with user authentication, account management, and transaction handling built during MEARN Stack training.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/anaghacm/BankApp-Frontend",
    isInternshipRelated: true,
  },
  {
    title: "Aroma Application",
    description:
      "E-commerce style application for a perfume/aroma business with product catalog, cart functionality, and server-side API integration.",
    tech: ["Angular", "TypeScript", "Node.js", "REST API"],
    github: "https://github.com/anaghacm/Aroma-Application",
    isInternshipRelated: true,
  },
  {
    title: "Angular Pipes Example",
    description:
      "Demonstration project showcasing Angular pipe implementations for data transformation and formatting in templates.",
    tech: ["Angular", "TypeScript", "Custom Pipes"],
    github: "https://github.com/anaghacm/Angular-Pipes-Example",
    isInternshipRelated: true,
  },
  {
    title: "Avatar Movie Showcase",
    description:
      "Responsive movie showcase website demonstrating HTML5, CSS3 layouts, and modern web design principles.",
    tech: ["HTML5", "CSS3", "Responsive Design"],
    github: "https://github.com/anaghacm/AvatarMovie",
    isInternshipRelated: true,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl">03.</span> Projects
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:col-start-6" : ""
                }`}
              >
                <div className="relative bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-all group">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
                  <div className="relative">
                    <p className="text-primary font-mono text-sm mb-2">
                      Featured Project
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                      <p className="text-sm text-primary">
                        {project.role} @ {project.company}
                      </p>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`Visit ${project.title} website`}
                        >
                          <ExternalLink size={16} />
                          <span>Visit Site</span>
                        </a>
                      )}
                    </div>
                    <div
                      className={`flex flex-wrap gap-2 text-sm font-mono ${
                        index % 2 === 1 ? "md:justify-end" : ""
                      }`}
                    >
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-muted-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Internship Projects Header */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
            <Star className="text-primary" size={20} />
            Internship & Learning Projects
          </h3>
          <p className="text-muted-foreground">
            Full-stack projects built during MEARN Stack training, focusing on API integration
          </p>
        </div>

        {/* Other Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:-translate-y-2 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={40} />
                <div className="flex items-center gap-3">
                  {project.isInternshipRelated && (
                    <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                      Internship
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/anaghacm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-mono text-sm rounded-lg hover:bg-primary/10 transition-colors"
          >
            <Github size={18} />
            View More on GitHub
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
