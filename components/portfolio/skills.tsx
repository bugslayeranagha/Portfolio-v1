"use client"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    description: "3+ Years Hands-on Experience",
    skills: [
      { name: "Angular (v17-18)", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3 / SCSS", level: 90 },
      { name: "RxJS", level: 85 },
      { name: "D3.js", level: 80 },
    ],
  },
  {
    title: "Full-Stack (Certified)",
    description: "MEARN Stack Development",
    skills: [
      { name: "React.js", level: 75 },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 85 },
      { name: "JWT Auth", level: 80 },
    ],
  },
  {
    title: "Architecture & Tools",
    description: "Development Practices",
    skills: [
      { name: "Micro Frontend (MFE)", level: 90 },
      { name: "Monolithic Architecture", level: 85 },
      { name: "Lazy Loading / AOT", level: 88 },
      { name: "Component-Driven Dev", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Cursor IDE", level: 88 },
      { name: "Angular CLI", level: 92 },
      { name: "npm", level: 90 },
      { name: "GitHub / GitLab", level: 90 },
      { name: "Google Antigravity", level: 75 },
    ],
  },
]

const softSkills = [
  "Team Collaboration",
  "Mentoring",
  "Communication",
  "Quick Learner",
  "Problem Solving",
  "Time Management",
  "Agile / Scrum",
  "Code Reviews",
  "Vibe Coding",
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl">04.</span> Skills
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
            >
              <h3 className="text-lg font-bold text-foreground mb-1">
                {category.title}
              </h3>
              <p className="text-sm text-primary mb-6">{category.description}</p>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Cloud */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-foreground mb-6">
            Soft Skills & Attributes
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-card border border-border rounded-full text-muted-foreground hover:border-primary hover:text-primary transition-all cursor-default"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Responsive Design", icon: "📱" },
            { label: "UI/UX Principles", icon: "🎨" },
            { label: "Cross-Browser Compat.", icon: "🌐" },
            { label: "Performance Tuning", icon: "⚡" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-foreground text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
