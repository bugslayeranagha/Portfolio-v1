import { Code2, GraduationCap, Briefcase } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "3+ Years",
    description: "Hands-on Development Experience",
  },
  {
    icon: GraduationCap,
    title: "M.E. in CS",
    description: "Computer Science & Engineering",
  },
  {
    icon: Briefcase,
    title: "Full Stack",
    description: "MEARN Stack Certified",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl">01.</span> About Me
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a passionate Software Engineer currently working at{" "}
              <span className="text-primary">Beinex Consulting Pvt. Ltd.</span>{" "}
              in Kochi, India. I specialize in building high-performance,
              responsive web applications using modern frontend technologies.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              What sets me apart is my unique journey into tech. I transitioned
              into IT after{" "}
              <span className="text-primary">six years teaching Computer Science and Mathematics</span> —
              bringing strong analytical thinking, clear communication, and a
              natural instinct for mentoring to my engineering work.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I&apos;m driven by continuous learning and committed to delivering
              scalable, user-centric digital solutions. My expertise spans both
              Monolithic and Micro Frontend architectures, with hands-on
              experience in government-scale enterprise applications.
            </p>

            <div className="pt-4">
              <p className="text-foreground font-medium mb-4">
                Technologies I work with:
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-primary mb-2">Angular (3+ Years Hands-on)</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                    {[
                      "Angular (v17-18)",
                      "TypeScript",
                      "HTML5",
                      "CSS3 / SCSS",
                      "RxJS",
                      "REST API Integration",
                      "Angular Material",
                      "D3.js",
                      "Reactive Forms",
                    ].map((tech) => (
                      <div key={tech} className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-primary">▹</span>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-primary mb-2">Full-Stack (Certified Course)</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                    {[
                      "React.js",
                      "Node.js",
                      "Express.js",
                      "MongoDB",
                    ].map((tech) => (
                      <div key={tech} className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-primary">▹</span>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {highlights.map((item) => (
                <div key={item.title}
                  className="group p-6 border rounded-lg transition-all bg-card border-border hover:border-primary/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg transition-all bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
