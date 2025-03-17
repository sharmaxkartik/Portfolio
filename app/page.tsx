import Image from "next/image"
import {
  ArrowRight,
  Github,
  ExternalLink,
  Send,
  Mail,
  Code,
  Award,
  FileText,
  Terminal,
  Cpu,
  Zap,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocialIcons } from "@/components/social-icons"
import { StarField } from "@/components/star-field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollAnimation } from "@/components/scroll-animation"

const projects = [
  {
    id: 1,
    title: "Chess.com Clone",
    description:
      "A fully functional clone of Chess.com with multiplayer capabilities, game analysis, and user profiles.",
    github: "https://github.com/sharmaxkartik/Chess.com-Clone",
    demo: "https://chess-clone.vercel.app",
  },
  {
    id: 2,
    title: "Apple MacBook Pro Landing Page",
    description:
      "A pixel-perfect recreation of Apple's MacBook Pro landing page with smooth animations and responsive design.",
    github: "https://github.com/sharmaxkartik/Apple-Macbook-Pro-Landing-Page",
    demo: "https://apple-macbook-landing.vercel.app",
  },
  {
    id: 3,
    title: "FixUp",
    description:
      "My idea and project for Google Solution Challenge 2025. A platform connecting people with local repair services.",
    github: "https://github.com/sharmaxkartik/Fix-Up",
    demo: "https://fixup-app.vercel.app",
  },
  {
    id: 4,
    title: "WE (Work and Earn)",
    description:
      "Award-winning project from ideathon and hackathon. A platform connecting students with part-time job opportunities.",
    github: "https://github.com/sharmaxkartik/WE-Work-Earn-",
    demo: "https://we-work-earn.vercel.app",
  },
]

export default function Home() {
  return (
    <>
      <StarField />

      {/* Hero Section - Keeping this as is */}
      <section id="home" className="min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <ScrollAnimation type="slide" direction="left">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  MERN Stack Developer & Java Programmer
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="slide" direction="left" delay={0.1}>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Kartik Sharma</h1>
              </ScrollAnimation>
              <ScrollAnimation type="slide" direction="left" delay={0.2}>
                <p className="text-xl text-muted-foreground">
                  Building innovative digital solutions with modern technologies. Specializing in full-stack development
                  and creating seamless user experiences.
                </p>
              </ScrollAnimation>
              <ScrollAnimation type="slide" direction="left" delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <a href="#projects">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#contact">Contact Me</a>
                  </Button>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="slide" direction="left" delay={0.4}>
                <SocialIcons className="pt-4" />
              </ScrollAnimation>
            </div>
            <ScrollAnimation type="scale">
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-full border-2 border-primary/20 bg-background/50 p-2 backdrop-blur-sm">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-14%20at%2011.26.25_42aaba9c.jpg-UEPyt5CrGFbyaOlrVKMq8BWIkD6Tb0.jpeg"
                    alt="Kartik Sharma"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-primary animate-pulse" />
                <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-primary animate-pulse" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* About Section - Completely Redesigned */}
      <section id="about" className="py-16 md:py-24 relative overflow-hidden">
        {/* Tech-inspired background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-primary/20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 300}px`,
                  height: "1px",
                  transform: `rotate(${Math.random() * 360}deg)`,
                  opacity: Math.random() * 0.5 + 0.5,
                }}
              />
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/10 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation type="fade">
            <div className="flex items-center mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
              <h1 className="text-center text-4xl font-bold tracking-tight px-6">
                <span className="text-primary">&lt;</span> About <span className="text-primary">/&gt;</span>
              </h1>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
          </ScrollAnimation>

          {/* Terminal-inspired Bio Section */}
          <ScrollAnimation type="slide" direction="up">
            <div className="mx-auto max-w-4xl">
              <div className="bg-black border border-primary/30 rounded-lg overflow-hidden">
                <div className="flex items-center bg-black/80 px-4 py-2 border-b border-primary/30">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-sm text-primary/70">kartik@portfolio ~ about.sh</div>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <div className="flex items-start mb-4">
                    <span className="text-primary mr-2">$</span>
                    <span className="typing-animation">whoami</span>
                  </div>
                  <p className="mb-4 pl-4 text-primary/90">
                    I'm Kartik Sharma, a passionate full-stack developer with expertise in MERN stack and Java
                    programming. With a strong foundation in both front-end and back-end technologies, I create
                    efficient, scalable, and user-friendly applications.
                  </p>

                  <div className="flex items-start mb-4">
                    <span className="text-primary mr-2">$</span>
                    <span className="typing-animation">cat journey.txt</span>
                  </div>
                  <p className="mb-4 pl-4 text-primary/90">
                    My journey in software development began during my college years, where I quickly distinguished
                    myself by winning multiple hackathons and ideathons in my first year. These experiences taught me
                    how to work effectively under pressure, collaborate with diverse teams, and deliver innovative
                    solutions to complex problems.
                  </p>

                  <div className="flex items-start mb-4">
                    <span className="text-primary mr-2">$</span>
                    <span className="typing-animation">cat approach.txt</span>
                  </div>
                  <p className="mb-4 pl-4 text-primary/90">
                    I approach each project with a focus on clean code, performance optimization, and intuitive user
                    experience. My goal is to build applications that not only meet technical requirements but also
                    exceed user expectations.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Skills Section - Grid Layout */}
          <div className="mt-24 mx-auto max-w-5xl">
            <ScrollAnimation type="fade">
              <h2 className="text-2xl font-bold mb-12 flex items-center">
                <Code className="mr-2 text-primary" />
                <span>Technical Skills</span>
                <span className="ml-2 text-primary animate-blink">_</span>
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollAnimation type="slide" direction="left">
                <div className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Cpu className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium text-primary">Frontend</h3>
                  </div>
                  <ul className="space-y-4">
                    {["React.js", "Next.js", "HTML5 & CSS3", "JavaScript/TypeScript", "Tailwind CSS"].map(
                      (skill, index) => (
                        <li key={skill} className="flex items-center group">
                          <div className="w-1 h-1 bg-primary rounded-full mr-3 group-hover:w-2 transition-all duration-300"></div>
                          <div className="flex-1 py-2 px-3 bg-primary/5 rounded-md group-hover:bg-primary/10 transition-colors">
                            {skill}
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="right">
                <div className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Terminal className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium text-primary">Backend</h3>
                  </div>
                  <ul className="space-y-4">
                    {["Node.js", "Express.js", "MongoDB", "Java", "RESTful APIs", "Firebase"].map((skill, index) => (
                      <li key={skill} className="flex items-center group">
                        <div className="w-1 h-1 bg-primary rounded-full mr-3 group-hover:w-2 transition-all duration-300"></div>
                        <div className="flex-1 py-2 px-3 bg-primary/5 rounded-md group-hover:bg-primary/10 transition-colors">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-24 mx-auto max-w-5xl">
            <ScrollAnimation type="fade">
              <h2 className="text-2xl font-bold mb-12 flex items-center">
                <Award className="mr-2 text-primary" />
                <span>Achievements</span>
                <span className="ml-2 text-primary animate-blink">_</span>
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ScrollAnimation type="slide" direction="up" delay={0.1}>
                <div className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6 h-full relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Inter-College Hackathon Winner</h3>
                    <p className="text-muted-foreground">
                      First place in the annual tech hackathon, developing an innovative solution for sustainable energy
                      tracking.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="up" delay={0.2}>
                <div className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6 h-full relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Ideathon Champion</h3>
                    <p className="text-muted-foreground">
                      Recognized for the most creative and feasible business idea at the college ideathon competition.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="slide" direction="up" delay={0.3}>
                <div className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6 h-full relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Open Source Contributor</h3>
                    <p className="text-muted-foreground">
                      Active contributor to several open-source projects, helping improve documentation and adding new
                      features.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-24 mx-auto max-w-5xl">
            <ScrollAnimation type="fade">
              <h2 className="text-2xl font-bold mb-12 flex items-center">
                <FileText className="mr-2 text-primary" />
                <span>Certifications</span>
                <span className="ml-2 text-primary animate-blink">_</span>
              </h2>
            </ScrollAnimation>

            <div className="space-y-6">
              {[
                { title: "Career Essentials in Generative AI", issuer: "Microsoft and LinkedIn", year: "2024" },
                {
                  title: "TechTrek24 Hackathon",
                  issuer: "Institute of Technology and Management, Gwalior",
                  year: "2024",
                },
                {
                  title: "TechTrek24 Ideathon",
                  issuer: "Institute of Technology and Management, Gwalior",
                  year: "2024",
                },
                { title: "Introduction to Generative AI", issuer: "Google Cloud Skill Boost", year: "2024" },
                { title: "Generative AI Certificates", issuer: "LinkedIn", year: "2024" },
              ].map((cert, index) => (
                <ScrollAnimation
                  key={index}
                  type="slide"
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 0.1}
                >
                  <div className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden group">
                    <div className="absolute h-full w-1 bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                    <div className="p-6 relative">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                              {cert.title}
                            </h3>
                            <p className="text-muted-foreground mt-1">{cert.issuer}</p>
                          </div>
                        </div>
                        <div className="md:text-right">
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                            Issued: {cert.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Completely Redesigned */}
      <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
        {/* Tech-inspired background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-primary/20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: "1px",
                  height: `${Math.random() * 300}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  opacity: Math.random() * 0.5 + 0.5,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation type="fade">
            <div className="flex items-center mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
              <h1 className="text-center text-4xl font-bold tracking-tight px-6">
                <span className="text-primary">&lt;</span> Projects <span className="text-primary">/&gt;</span>
              </h1>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
          </ScrollAnimation>

          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-12">
              {projects.map((project, index) => (
                <ScrollAnimation key={project.id} type="slide" direction={index % 2 === 0 ? "left" : "right"}>
                  <div className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>

                    <div className="p-8 relative z-10">
                      <div className="flex items-center mb-4">
                        <h2 className="text-3xl font-bold text-primary mr-4">{project.title}</h2>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                          <span className="sr-only">Live Demo</span>
                        </a>
                      </div>

                      <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center justify-center rounded-full bg-black border border-primary/30 px-6 py-3 text-base font-medium text-primary hover:bg-primary/10 transition-all duration-300 relative overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-shimmer"></span>
                        <Github className="mr-2 h-5 w-5" />
                        <span>GitHub Repository</span>
                        <span className="ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300">
                          <ChevronRight className="h-5 w-5" />
                        </span>
                      </a>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Completely Redesigned */}
      <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/10 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation type="fade">
            <div className="flex items-center mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
              <h1 className="text-center text-4xl font-bold tracking-tight px-6">
                <span className="text-primary">&lt;</span> Contact <span className="text-primary">/&gt;</span>
              </h1>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
          </ScrollAnimation>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <ScrollAnimation type="slide" direction="left">
                <div className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-8 h-full">
                  <h2 className="text-3xl font-bold mb-8 flex items-center">
                    <span>Get in Touch</span>
                    <span className="ml-2 text-primary animate-blink">_</span>
                  </h2>

                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="mr-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">Email</h3>
                        <p className="text-lg text-primary">kartikgwl13@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-xl font-medium mb-6">Connect with me</h3>
                    <SocialIcons iconSize={24} />
                  </div>
                </div>
              </ScrollAnimation>

              {/* Contact Form */}
              <ScrollAnimation type="slide" direction="right">
                <div className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>

                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-8 flex items-center">
                      <span>Send a Message</span>
                      <span className="ml-2 text-primary animate-blink">_</span>
                    </h2>

                    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                      <input type="hidden" name="access_key" value="18e46bdc-e2c4-4fd8-8f50-873b3be507dc" />
                      <input type="hidden" name="subject" value="New message from portfolio website" />
                      <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                      <div className="space-y-6">
                        <div className="group">
                          <label className="text-sm font-medium text-primary/70 mb-2 block">Your Name</label>
                          <Input
                            name="name"
                            required
                            className="border-primary/20 bg-black/50 backdrop-blur-sm focus:border-primary rounded-lg h-12 text-base"
                          />
                        </div>
                        <div className="group">
                          <label className="text-sm font-medium text-primary/70 mb-2 block">Your Email</label>
                          <Input
                            name="email"
                            type="email"
                            required
                            className="border-primary/20 bg-black/50 backdrop-blur-sm focus:border-primary rounded-lg h-12 text-base"
                          />
                        </div>
                        <div className="group">
                          <label className="text-sm font-medium text-primary/70 mb-2 block">Subject</label>
                          <Input
                            name="subject"
                            required
                            className="border-primary/20 bg-black/50 backdrop-blur-sm focus:border-primary rounded-lg h-12 text-base"
                          />
                        </div>
                        <div className="group">
                          <label className="text-sm font-medium text-primary/70 mb-2 block">Your Message</label>
                          <Textarea
                            name="message"
                            required
                            className="min-h-[180px] border-primary/20 bg-black/50 backdrop-blur-sm focus:border-primary rounded-lg text-base"
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full rounded-lg h-12 text-base mt-4 bg-gradient-to-r from-primary/80 to-primary hover:from-primary hover:to-primary/80"
                      >
                        <span className="flex items-center">
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </span>
                      </Button>
                    </form>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

