"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
    {
        title: "Spider Tech",
        description: "Spidertech is tech startup based out of Raipur Chhattisgarh focusing on providing tech support to new startups.",
        image: "/images/projects/spidertech.png",
        tech: ["HTML5", "Vue.js", "Vuetify", "JavaScript", "SASS"],
        liveUrl: "https://spidertech.in/",
        featured: true,
        fullHeight: true
    },
    {
        title: "Indianmentors",
        description: "Indianmentors is the best home tutor provider have connected the 20,000+ tutors with almost 35,000+ students across the globe. It has Student portal, Tutor portal, Business Developer portal And Admin portal",
        image: "./images/projects/indianmentors.png",
        tech: ["Django", "Python", "Vue.js", "HTML5", "SASS", "PostgreSQL"],
        liveUrl: "https://www.indianmentors.in/",
        featured: false,
        fullHeight: true

    },
    {
        title: "Cashpo",
        description: "A platform which provides you Personal loans upto ₹2 lakhs instantly through a completely paperless process. Key Highlight e-Mandate/NACH, e-KYC, Auto Disbursement etc.",
        image: "./images/projects/cashpo.png",
        tech: ["Django", "Python", "Vue.js", "HTML5", "SASS", "PostgreSQL"],
        liveUrl: "https://cashpo.in",
        featured: false,
        fullHeight: true

    },
    {
        title: "Tutors Factory",
        description: "Tutors Factory the best home tutor provider have connected the 10,000+ tutors with almost 25,000+ students across the nation. It has Student portal, Tutor portal, Business Developer portal And Admin portal",
        image: "./images/projects/tf.png",
        tech: ["Django", "Python", "Vue.js", "HTML5", "SASS", "PostgreSQL"],
        liveUrl: "https://www.tutorsfactory.com",
        featured: false,
    },
    {
        title: "GimBooks",
        description: "GimBooks is Y combinator funded startup who helps small business owners to create and share Invoice, Quotations, E-Waybills, Payment reminders, Payment receipts and much more!",
        image: "./images/projects/gim.png",
        tech: ["Django", "Python", "HTML5", "JavaScript", "MySQL"],
        liveUrl: "https://www.gimbooks.com/",
        featured: false
    },
    {
        title: "Medx",
        description: "A Subscription Based B2B medicine delivery service. Delivering 2500+ order in a Day. This platform have some key feature Like Shipment Lifecycle, Live tracking, Wallet and Payout etc.",
        image: "./images/projects/medx.png",
        tech: ["Django", "Python", "Vue.js", "HTML5", "PostgreSQL"],
        liveUrl: "https://themedx.in",
        featured: true
    },
    {
        title: "Wednicely",
        description: "Wednicely is platform where you can create a e-invitation card within few minutes. It has 1000+ template and 10+ category to choose from",
        image: "./images/projects/ip.png",
        tech: ["Django", "Python", "Vue.js", "HTML5", "PostgreSQL"],
        liveUrl: "https://wednicely.com/",
        featured: false
    },
    {
        title: "BurnBlack",
        description: "BurnBlack is platform who provide the financial service like ITR, GST filling, Company registration, Billing Software and other Financial Services.",
        image: "./images/projects/burnblack.png",
        tech: ["Django", "Python", "Vue.js", "HTML5", "PostgreSQL"],
        liveUrl: "https://burnblack.in/",
        featured: false
    },
    {
        title: "Rawfit",
        description: "Rawfit is subscription Based health monitoring system based on google fit. Which also provide service to book a activity session.",
        image: "./images/projects/rawfit.png",
        tech: ["Django", "Python", "Vue.js", "HTML5", "PostgreSQL"],
        liveUrl: "https://rawfit.in",
        featured: false
    },
    {
        title: "Digital Ayurved",
        description: "Digital ayurveda is patients management platform for doctors where they can manage all the medical records and drugs record.",
        image: "./images/projects/digital-ayurved.png",
        tech: ["Django", "Python", "Vue.js", "Vuetify", "HTML5", "JavaScript", "MySQL"],
        liveUrl: "https://digitalayurved.in/",
        featured: false,
        fullHeight: true
    },

]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "top" }}
        className={project.featured ? "md:col-span-2" : ""}
    >
        <Card className="group card-hover overflow-hidden !p-0 h-full flex flex-col dark:bg-card/50 dark:border-border/30 dark:hover:border-primary/30 dark:hover:bg-card/70">
            <div className="relative image-overlay">
                <div className="aspect-video relative overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes={project.featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    />
                </div>
                <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground z-10">
                    Featured
                </Badge>
            </div>

            <CardHeader>
                <CardTitle className="group-hover:text-primary dark:group-hover:text-primary transition-colors dark:text-foreground">
                    {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed dark:text-muted-foreground/80">
                    {project.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs dashed-outline">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="mt-auto !mb-0 !pb-6">
                <Button size="sm" asChild className="w-full">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Live Project
                    </a>
                </Button>
            </CardFooter>
        </Card>
    </motion.div>
)

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-background via-background to-muted/5 dark:to-muted/10">
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-foreground">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-muted-foreground dark:text-muted-foreground/80 max-w-3xl mx-auto">
                        Here are some of the projects I&apos;ve worked on, showcasing my expertise
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
                    <p className="text-muted-foreground dark:text-muted-foreground/80 mb-6">
                        These are some of my featured projects showcasing my expertise in fullstack development.
                    </p>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">
                        Want to discuss your project? Feel free to reach out!
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
