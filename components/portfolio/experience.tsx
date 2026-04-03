"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink, Star } from "lucide-react"

const experiences = [
  {
    company: "Beinex Consulting",
    role: "Software Engineer",
    period: "April 2024 – Present",
    location: "Kochi, India",
    isHighlighted: true,
    responsibilities: [
      "Designing and implementing high-performance, responsive web applications using Angular (v17-18) with TypeScript and SCSS in both Monolithic and Micro Frontend architectures",
      "Building interactive data visualization dashboards using D3.js for real-time analytics and government reporting modules",
      "Integrating RESTful APIs with RxJS-driven reactive data streams, Angular Interceptors, and JWT authentication",
      "Collaborating with cross-functional teams using Agile/Scrum; conducting code reviews and mentoring junior developers",
      "Optimizing application performance through lazy loading, OnPush change detection, and bundle size reduction strategies",
    ],
  },
  {
    company: "Beinex Consulting",
    role: "Associate Software Engineer",
    period: "April 2023 – April 2024",
    location: "Kochi, India",
    responsibilities: [
      "Developed dynamic, reusable Angular components adhering to WCAG accessibility standards and responsive design best practices",
      "Built multi-level form-based workflows with Angular Reactive Forms, Pipes, Directives, and Lifecycle Hooks",
      "Contributed to full application development lifecycle from planning to production deployment via GitLab CI/CD pipelines",
    ],
  },
  {
    company: "Beinex Consulting",
    role: "Frontend Developer Intern",
    period: "January 2023 – April 2023",
    location: "Kochi, India",
    isInternship: true,
    responsibilities: [
      "Assisted in building UI screens and reusable Angular components under senior developer guidance",
      "Recognized as Star Performer for exceptional contributions during internship",
      "Practiced component-based architecture, API integration, version control (Git), and responsive layouts with Figma-to-code workflows",
    ],
  },
  {
    company: "Luminar Technolab",
    role: "MEARN Stack Intern",
    period: "July 2022 – January 2023",
    location: "Kochi, India",
    isInternship: true,
    responsibilities: [
      "Completed intensive full-stack development training in MongoDB, Express.js, Angular, React.js, and Node.js",
      "Built multiple full-stack projects including banking applications and e-commerce platforms",
      "Gained hands-on experience with REST API development, database design, and frontend frameworks",
    ],
  },
  {
    company: "Teaching Experience",
    role: "Assistant Professor (CS) / Mathematics Faculty",
    period: "2015 – 2022",
    location: "Kerala, India / UAE",
    responsibilities: [
      "Mathematics Faculty – Taught IGCSE & A-Level Mathematics; served as Academic Coordinator",
      "Assistant Professor (CS) – Delivered undergraduate/PG courses on OOP, OS, Compilers, Distributed Computing; lab sessions in C, C++, Java.",
      "Lecturer (CS) – Taught Network Programming and Microprocessors (8086).",
    ],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl">02.</span> Experience
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Tab List */}
          <div className="md:col-span-1">
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-1 border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "px-4 py-3 text-left text-sm font-mono whitespace-nowrap transition-all relative",
                    "hover:bg-primary/10 hover:text-primary",
                    activeTab === index
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  )}
                >
                  {activeTab === index && (
                    <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary hidden md:block" />
                  )}
                  {activeTab === index && (
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary md:hidden" />
                  )}
                  <span className="flex items-center gap-2">
                    {exp.company.split(" ")[0]}
                    {exp.isInternship && (
                      <Star size={12} className="text-primary" />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="md:col-span-3">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={cn(
                  "transition-opacity duration-300",
                  activeTab === index ? "block" : "hidden"
                )}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2 flex-wrap">
                    {exp.role}
                    <span className="text-primary">@ {exp.company}</span>
                    {exp.isInternship && (
                      <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                        Internship
                      </span>
                    )}
                    {exp.isHighlighted && (
                      <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                        Current
                      </span>
                    )}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm mt-1">
                    {exp.period} • {exp.location}
                  </p>
                </div>

                <ul className="space-y-4">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.isInternship && (
                  <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-sm text-primary flex items-center gap-2">
                      <ExternalLink size={14} />
                      Full Stack Project Focus: API Integration & Component Architecture
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
