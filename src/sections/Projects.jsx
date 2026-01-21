import {ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";


const projects = [
  {
    title: "SDGP 2nd Year Group Project",
    description:
      "A comprehensive platform for school students to manage and showcase extracurricular activities. Full frontend implementation using Next.js, Tailwind CSS, TypeScript, and Figma.",
    image: "/projects/sdgp.png",
    tags: ["Next.js", "Tailwind", "TypeScript", "Figma"],
    link: "https://www.all-rounder.lk",
    github: "https://www.all-rounder.lk",
  },
  {
    title: "Travel Planner (Figma Prototype)",
    description:
      "A travel planning application prototype designed in Figma, helping users organize trips efficiently. Developed last year as a UX/UI project.",
    image: "/projects/figma.png",
    tags: ["Figma", "UX/UI", "Design"],
    link: "https://github.com/TeneeIshari/Travel",
    github: "https://github.com/TeneeIshari/Travel",
  },
  {
    title: "Food Delivery App",
    description:
      "A React-based food delivery platform with dynamic menu display, cart management, and interactive UI components.",
    image: "/projects/food-delivery.png",
    tags: ["React", "CSS", "JavaScript"],
    link: "https://github.com/TeneeIshari/Food-Delivery",
    github: "https://github.com/TeneeIshari/Food-Delivery",
  },
  {
    title: "Café Website",
    description:
      "A simple static website for a café created using HTML and CSS. Developed around 2 years ago to practice frontend fundamentals.",
    image: "/projects/cafe.png",
    tags: ["HTML", "CSS", "Frontend"],
    link: "https://github.com/TeneeIshari/TechnicalSkills/tree/main/Website/project2",
    github: "https://github.com/TeneeIshari/TechnicalSkills/tree/main/Website/project2",
  },
  {
    title: "Post Office Management System",
    description:
      "A full-stack application for managing post office operations with basic CRUD functionality. Backend built using Spring Boot and MySQL, frontend using Bootstrap.",
    image: "/projects/post-office.png",
    tags: ["Spring Boot", "MySQL", "Bootstrap", "Fullstack"],
    link: "https://github.com/TeneeIshari/Delivery-Management-System",
    github: "https://github.com/TeneeIshari/Delivery-Management-System",
  },
  {
    title: "Traffic Data Analysis System",
    description:
      "A Python-based traffic data analysis application that processes multiple CSV files to extract insights such as total vehicle count and peak hour traffic. The program accepts a user-defined date, outputs results in the console, and visualizes traffic patterns using a graphics-based histogram.",
    image: "/projects/traffic.png",
    tags: ["Python", "CSV", "Data Analysis", "Graphics"],
    link: "https://github.com/TeneeIshari/TechnicalSkills/tree/main/ProgrammingFundamentalsProject",
    github: "https://github.com/TeneeIshari/TechnicalSkills/tree/main/ProgrammingFundamentalsProject",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
        
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects I <span className="font-serif italic font-normal text-white">have built.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of my projects, ranging from full-stack applications to UX/UI prototypes and static websites.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-card via-card/50
                  to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <a
                href="https://github.com/TeneeIshari"
                target="_blank"
                rel="noopener noreferrer"
            >
                <AnimatedBorderButton>
                View All Projects
                <ArrowUpRight className="w-5 h-5" />
                </AnimatedBorderButton>
            </a>
        </div>
       
      </div>
    </section>
  );
};
