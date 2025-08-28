"use client"

import React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useTheme } from "next-themes"

const getTechCategories = (isDark: boolean) => [
    {
        category: "Frontend",
        technologies: [
            { name: "Next.js", image: isDark ? "./images/tech-stack/nextjs.png" : "./images/tech-stack/nextjs-black.png" },
            { name: "React", image: "./images/tech-stack/react.png" },
            { name: "Vue.js", image: "./images/tech-stack/vue.png" },
            { name: "JavaScript", image: "./images/tech-stack/js.png" },
            { name: "HTML5", image: "./images/tech-stack/html.png" },
            { name: "SASS", image: "./images/tech-stack/sass.png" },
            { name: "Nuxt.js", image: "./images/tech-stack/nuxt.png" },
            { name: "Vuetify", image: "./images/tech-stack/vuetify.png" },
            { name: "jQuery", image: "./images/tech-stack/jquery.png" },
        ]
    },
    {
        category: "Backend & Database",
        technologies: [
            { name: "Python", image: "./images/tech-stack/python.png" },
            { name: "Django", image: "./images/tech-stack/django.png" },
            { name: "PostgreSQL", image: "./images/tech-stack/postgres.png" },
            { name: "MySQL", image: "./images/tech-stack/mysql.png" },
            { name: "Firebase", image: "./images/tech-stack/firebase.png" },
        ]
    },
    {
        category: "DevOps & Tools",
        technologies: [
            { name: "Git", image: "./images/tech-stack/git.png" },
            { name: "AWS", image: isDark ? "./images/tech-stack/aws.png" : "./images/tech-stack/aws-black.png" },
            { name: "Ubuntu", image: "./images/tech-stack/ubuntu.png" },
            { name: "Nginx", image: "./images/tech-stack/nginx.png" },
            { name: "Figma", image: "./images/tech-stack/figma.png" },
        ]
    },
    {
        category: "AI & Design",
        technologies: [
            { name: "Claude", image: "./images/tech-stack/claude.png" },
            { name: "GPT", image: "./images/tech-stack/gpt.png" },
            { name: "Gemini", image: "./images/tech-stack/gemini.png" },
            { name: "GitHub Copilot", image: isDark ? "./images/tech-stack/github-copilot.png" : "./images/tech-stack/github-copilate-black.png" },
            { name: "Midjourney", image: isDark ? "./images/tech-stack/mid-journey.png" : "./images/tech-stack/mid-journey-black.png" },
        ]
    }
]

const TechCard = ({ tech, index }: { tech: { name: string, image: string }, index: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="group"
    >
        <Card className="card-hover dark:bg-card/50 dark:border-border/30 dark:hover:border-primary/30 dark:hover:bg-card/70">
            <CardContent className="p-6 text-center">
                <div className="relative w-16 h-16 mx-auto mb-4 image-overlay">
                    <Image
                        src={tech.image}
                        alt={tech.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                        sizes="64px"
                    />
                </div>
                <Badge variant="secondary" className="text-sm font-medium dashed-outline">
                    {tech.name}
                </Badge>
            </CardContent>
        </Card>
    </motion.div>
)

export function TechStack() {
    const { theme, resolvedTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Use system theme as fallback during SSR
    const isDark = mounted ? resolvedTheme === 'dark' : systemTheme === 'dark'
    const techCategories = getTechCategories(isDark)

    return (
        <section id="tech-stack" className="py-20 bg-muted/30 dark:bg-muted/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge variant="secondary" className="mb-4">
                        Technologies
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-foreground">
                        Tech Stack & Tools
                    </h2>
                    <p className="text-xl text-muted-foreground dark:text-muted-foreground/80 max-w-3xl mx-auto">
                        I work with a diverse set of technologies and tools to build
                        scalable, efficient, and user-friendly applications.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {techCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-center mb-8 dark:text-foreground">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {category.technologies.map((tech, techIndex) => (
                                    <TechCard
                                        key={tech.name}
                                        tech={tech}
                                        index={categoryIndex * 10 + techIndex}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Skills overview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <Card className="bg-background dark:bg-card/50 card-hover dark:border-border/30">
                        <CardContent className="p-8 md:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                                <div className="group">
                                    <h4 className="text-4xl font-bold text-primary dark:text-primary mb-2 group-hover:scale-110 transition-transform">6+</h4>
                                    <p className="text-muted-foreground dark:text-muted-foreground/80 font-medium">Years Experience</p>
                                </div>
                                <div className="group">
                                    <h4 className="text-4xl font-bold text-primary dark:text-primary mb-2 group-hover:scale-110 transition-transform">20+</h4>
                                    <p className="text-muted-foreground dark:text-muted-foreground/80 font-medium">Technologies Mastered</p>
                                </div>
                                <div className="group">
                                    <h4 className="text-4xl font-bold text-primary dark:text-primary mb-2 group-hover:scale-110 transition-transform">15+</h4>
                                    <p className="text-muted-foreground dark:text-muted-foreground/80 font-medium">Projects Completed</p>
                                </div>
                                <div className="group">
                                    <h4 className="text-4xl font-bold text-primary dark:text-primary mb-2 group-hover:scale-110 transition-transform">24/7</h4>
                                    <p className="text-muted-foreground dark:text-muted-foreground/80 font-medium">Always Learning</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
