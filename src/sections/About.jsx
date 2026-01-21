import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clear, well-structured code with a focus on readability and good practices learned through academic projects and personal work.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description:
      "Enjoying challenges and breaking problems down into logical, effective solutions in both coursework and coding exercises.",
  },
  {
    icon: Users,
    title: "Teamwork & Leadership",
    description:
      "Serving as Secretarial Coordinator of the Computer Society (IEEE) at IIT, organizing events, and coordinating with members to achieve common goals.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Always eager to explore new technologies, improve technical skills, and apply them in projects and experiments.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Science undergraduate passionate about software
                development and web technologies. My curiosity about how
                applications work has driven me to explore both frontend and
                backend development through academic projects and personal work.
              </p>
              <p>
                I have experience with technologies such as React, JavaScript,
                TypeScript, Java, Spring Boot, Python, and SQL. I enjoy building
                functional, user-friendly applications while learning best
                practices in coding and system design.
              </p>
              <p>
                Beyond academics, I serve as the <strong>Secretarial Coordinator</strong>{" "}
                of the Computer Society (IEEE) at IIT, where I organize events,
                coordinate members, and contribute to technology-focused
                initiatives. This role has strengthened my leadership, teamwork,
                and organizational skills.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to keep learning and building meaningful software
                solutions that are reliable, user-focused, and thoughtfully
                designed."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
