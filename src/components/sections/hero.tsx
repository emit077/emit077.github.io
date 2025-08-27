"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const roles = [
    "Web Designer 👨🏻‍💻",
    "Fullstack Developer 👨🏻‍💻",
    "UI/UX Designer 👨🏻‍💻",
]

export function Hero() {
    const [currentRole, setCurrentRole] = useState(0)
    const [displayText, setDisplayText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentRoleText = roles[currentRole]
        const speed = isDeleting ? 50 : 100

        const timer = setTimeout(() => {
            if (!isDeleting && displayText === currentRoleText) {
                setTimeout(() => setIsDeleting(true), 2000)
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false)
                setCurrentRole((prev) => (prev + 1) % roles.length)
            } else {
                setDisplayText(
                    isDeleting
                        ? currentRoleText.substring(0, displayText.length - 1)
                        : currentRoleText.substring(0, displayText.length + 1)
                )
            }
        }, speed)

        return () => clearTimeout(timer)
    }, [displayText, isDeleting, currentRole])

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Name */}
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Amit Sahu
                        </span>
                    </motion.h1>

                    {/* Role with typing effect */}
                    <motion.div
                        className="h-20 md:h-24 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
                            {displayText}
                            <span className="animate-pulse">|</span>
                        </h2>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Passionate about visual design and technology. I specialize in fullstack development and UI/UX design,
                        building elegant and professional user interfaces and websites.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <Button size="lg" className="text-lg px-8 py-3" asChild>
                            <a href="#projects">
                                View Projects
                                <ArrowDown className="ml-2 h-5 w-5" />
                            </a>
                        </Button>

                        <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                            <a href="#contact">
                                Contact Me
                                <Mail className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="flex justify-center space-x-6 mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        <Button variant="ghost" size="icon" asChild>
                            <a
                                href="https://github.com/emit077"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="hover:scale-110 transition-transform"
                            >
                                <Github className="h-6 w-6" />
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                >
                    <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
                </motion.div>
            </div>
        </section>
    )
}

