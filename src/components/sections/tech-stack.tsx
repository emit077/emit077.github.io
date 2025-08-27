"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const techCategories = [
    {
        category: "Frontend",
        technologies: [
            { name: "Next.js", icon: "⚛️", color: "bg-black text-white" },
            { name: "React", icon: "⚛️", color: "bg-blue-500 text-white" },
            { name: "Vue.js", icon: "🟢", color: "bg-green-500 text-white" },
            { name: "JavaScript", icon: "🟨", color: "bg-yellow-400 text-black" },
            { name: "HTML5", icon: "🟧", color: "bg-orange-500 text-white" },
            { name: "SASS", icon: "🎨", color: "bg-pink-500 text-white" },
        ]
    },
    {
        category: "Backend",
        technologies: [
            { name: "Python", icon: "🐍", color: "bg-blue-600 text-white" },
            { name: "Django", icon: "🎯", color: "bg-green-600 text-white" },
            { name: "Node.js", icon: "🟢", color: "bg-green-500 text-white" },
            { name: "Express", icon: "⚡", color: "bg-gray-800 text-white" },
        ]
    },
    {
        category: "Database",
        technologies: [
            { name: "PostgreSQL", icon: "🐘", color: "bg-blue-700 text-white" },
            { name: "MySQL", icon: "🐬", color: "bg-orange-600 text-white" },
            { name: "MongoDB", icon: "🍃", color: "bg-green-700 text-white" },
            { name: "Redis", icon: "🔴", color: "bg-red-600 text-white" },
        ]
    },
    {
        category: "Tools & Others",
        technologies: [
            { name: "Git", icon: "🌿", color: "bg-orange-500 text-white" },
            { name: "Docker", icon: "🐳", color: "bg-blue-600 text-white" },
            { name: "AWS", icon: "☁️", color: "bg-orange-400 text-white" },
            { name: "Figma", icon: "🎨", color: "bg-purple-500 text-white" },
        ]
    }
]

const TechCard = ({ tech, index }: { tech: { name: string, icon: string, color: string }, index: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="group"
    >
        <Card className="border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-md">
            <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <Badge className={`${tech.color} text-sm font-medium`}>
                    {tech.name}
                </Badge>
            </CardContent>
        </Card>
    </motion.div>
)

export function TechStack() {
    return (
        <section id="tech-stack" className="py-20 bg-muted/30">
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Tech Stack & Tools
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                            <h3 className="text-2xl font-bold text-center mb-8">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
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
                    <Card className="bg-background border-2">
                        <CardContent className="p-8 md:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                                <div>
                                    <h4 className="text-3xl font-bold text-primary mb-2">5+</h4>
                                    <p className="text-muted-foreground">Years Experience</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-primary mb-2">15+</h4>
                                    <p className="text-muted-foreground">Technologies Mastered</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-primary mb-2">50+</h4>
                                    <p className="text-muted-foreground">Projects Completed</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-primary mb-2">24/7</h4>
                                    <p className="text-muted-foreground">Always Learning</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}

