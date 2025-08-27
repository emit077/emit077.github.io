"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Code, Award } from "lucide-react"

function calculateExperience() {
    const startDate = new Date('2019-07-01')
    const currentDate = new Date()

    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime())
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25)

    return diffYears.toFixed(1)
}

const stats = [
    {
        icon: Calendar,
        label: "Years Experience",
        value: `${calculateExperience()}+`,
        description: "Since July 2019"
    },
    {
        icon: Code,
        label: "Projects Completed",
        value: "15+",
        description: "Across various domains"
    },
    {
        icon: Award,
        label: "Happy Clients",
        value: "10+",
        description: "Satisfied customers"
    }
]

export function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge variant="secondary" className="mb-4">
                        About Me
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Crafting Digital Experiences
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        I love crafting seamless user experiences and developing scalable fullstack applications.
                        With a passion for both design and development, I bridge the gap between beautiful interfaces
                        and robust functionality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-8">
                                    <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                                    <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                                    <p className="text-lg font-semibold mb-2">{stat.label}</p>
                                    <p className="text-muted-foreground text-sm">{stat.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-background rounded-2xl p-8 md:p-12 shadow-lg border"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                My Journey in Web Development
                            </h3>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Started my journey in July 2019, I've been passionate about creating
                                    digital solutions that make a difference. My experience spans across
                                    various industries and technologies.
                                </p>
                                <p>
                                    I specialize in building fullstack applications with modern technologies,
                                    focusing on performance, scalability, and user experience. From concept
                                    to deployment, I handle every aspect of web development.
                                </p>
                                <p>
                                    When I'm not coding, you can find me exploring new technologies,
                                    contributing to open source projects, or mentoring aspiring developers.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold mb-3">What I Do</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span>Frontend Development (React, Next.js, Vue.js)</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span>Backend Development (Python, Django, Node.js)</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span>UI/UX Design & Prototyping</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span>Database Design & Optimization</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span>API Development & Integration</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
