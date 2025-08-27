"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
    {
        title: "Cashpo",
        description: "Personal loan platform with advanced risk assessment and automated approval system",
        image: "/api/placeholder/400/250",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true
    },
    {
        title: "Tutors Factory",
        description: "Comprehensive tutor-student portal with scheduling, payments, and progress tracking",
        image: "/api/placeholder/400/250",
        tech: ["Vue.js", "Django", "PostgreSQL", "Redis"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true
    },
    {
        title: "Indianmentors",
        description: "Global tutor-student portal connecting educators worldwide with advanced matching algorithms",
        image: "/api/placeholder/400/250",
        tech: ["Next.js", "Python", "MySQL", "AWS"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true
    },
    {
        title: "Medx",
        description: "B2B medicine delivery system with inventory management and order tracking",
        image: "/api/placeholder/400/250",
        tech: ["React", "Django", "PostgreSQL", "Docker"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false
    },
    {
        title: "Wednicely",
        description: "E-invitation card platform with customizable templates and RSVP management",
        image: "/api/placeholder/400/250",
        tech: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false
    },
    {
        title: "BurnBlack",
        description: "Financial services platform with portfolio management and investment tracking",
        image: "/api/placeholder/400/250",
        tech: ["React", "Python", "PostgreSQL", "Celery"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false
    },
    {
        title: "Rawfit",
        description: "Health monitoring subscription system with wearable device integration",
        image: "/api/placeholder/400/250",
        tech: ["Next.js", "Django", "Redis", "IoT"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false
    },
    {
        title: "GimBooks",
        description: "Y Combinator-backed invoicing platform with automated billing and tax compliance",
        image: "/api/placeholder/400/250",
        tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true
    },
    {
        title: "Digital Ayurved",
        description: "Patient management system for doctors with appointment scheduling and medical records",
        image: "/api/placeholder/400/250",
        tech: ["Vue.js", "Django", "MySQL", "WebRTC"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false
    },
    {
        title: "Spider Tech",
        description: "Startup tech support services platform with ticket management and knowledge base",
        image: "/api/placeholder/400/250",
        tech: ["Next.js", "Python", "MongoDB", "Elasticsearch"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false
    }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={project.featured ? "md:col-span-2" : ""}
    >
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
            <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🚀</div>
                </div>
                {project.featured && (
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                        Featured
                    </Badge>
                )}
            </div>

            <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="gap-2 mt-auto">
                <Button size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Project
                    </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                    </a>
                </Button>
            </CardFooter>
        </Card>
    </motion.div>
)

export function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge variant="secondary" className="mb-4">
                        My Work
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Here are some of the projects I've worked on, showcasing my expertise
                        in fullstack development, UI/UX design, and problem-solving.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-muted-foreground mb-6">
                        Want to see more of my work?
                    </p>
                    <Button size="lg" variant="outline" asChild>
                        <a href="https://github.com/emit077" target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5 mr-2" />
                            View All Projects
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

