"use client"

import { Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative py-20">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main container with proper centering */}
                <div className="flex items-center justify-center min-h-[80vh]">
                    <div className="relative w-full max-w-5xl">

                        {/* Corner markers with extending lines */}
                        <div className="absolute -top-8 -left-8 w-16 h-16 bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center ">
                        </div>
                        <div className="absolute -top-8 -right-8 w-16 h-16 bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center ">
                        </div>
                        <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center ">
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center ">
                        </div>
                        {/* Extending lines from corners */}
                        <div className="absolute -top-20 left-0 w-0 h-20 border-l border-dashed border-gray-300 dark:border-gray-600"></div>
                        <div className="absolute top-0 -left-20 w-20 h-0 border-t border-dashed border-gray-300 dark:border-gray-600"></div>
                        <div className="absolute -top-20 left-1/3 w-0 h-20 border-l border-dashed border-gray-300 dark:border-gray-600"></div>
                        <div className="absolute -top-20 left-2/3 w-0 h-20 border-l border-dashed border-gray-300 dark:border-gray-600"></div>

                        <div className="absolute -top-20 right-0 w-0 h-20 border-l border-dashed border-gray-300 dark:border-gray-600"></div>
                        <div className="absolute top-0 -right-20 w-20 h-0 border-t border-dashed border-gray-300 dark:border-gray-600"></div>

                        <div className="absolute -bottom-20 left-0 w-0 h-20 border-l border-dashed border-gray-300 dark:border-gray-600"></div>
                        <div className="absolute bottom-0 -left-20 w-20 h-0 border-t border-dashed border-gray-300 dark:border-gray-600"></div>
                        <div className="absolute -bottom-20 left-1/3 w-0 h-20 border-l border-dashed border-gray-300 dark:border-gray-600"></div>
                        <div className="absolute -bottom-20 left-2/3 w-0 h-20 border-l border-dashed border-gray-300 dark:border-gray-600"></div>

                        <div className="absolute -bottom-20 right-0 w-0 h-20 border-l border-dashed border-gray-300 dark:border-gray-600"></div>
                        <div className="absolute bottom-0 -right-20 w-20 h-0 border-t border-dashed border-gray-300 dark:border-gray-600"></div>

                        {/* Main content container */}
                        <div className="relative border border-dashed border-gray-300 dark:border-gray-600 bg-gradient-to-br from-gray-50/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-sm">

                            {/* Content sections */}
                            <div className="flex flex-col">

                                {/* Main headline */}
                                <div className="relative border-b border-dashed border-gray-300 dark:border-gray-600 p-8 md:p-12 bg-white/50 dark:bg-gray-900/50 text-center">
                                    {/* Extending lines from headline */}
                                    <div className="absolute bottom-0 -left-16 w-16 h-0 border-t border-dashed border-gray-300 dark:border-gray-600"></div>
                                    <div className="absolute bottom-0 -right-16 w-16 h-0 border-t border-dashed border-gray-300 dark:border-gray-600"></div>

                                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                                        <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                            Amit Sahu
                                        </span>
                                    </h1>
                                </div>

                                {/* Role */}
                                <div className="relative p-6 md:p-8 bg-white/30 dark:bg-gray-900/30 text-center">
                                    <h2 className="text-3xl md:text-5xl lg:text-4xl font-bold leading-tight">
                                        a web Designer and Fullstack developer
                                    </h2>
                                </div>

                                {/* Subtitle */}
                                <div className="relative border-t border-b border-dashed border-gray-300 dark:border-gray-600 p-6 md:p-8 bg-white/20 dark:bg-gray-900/20 text-center">
                                    {/* Extending lines from subtitle */}
                                    <div className="absolute top-0 -left-20 w-20 h-0 border-t border-dashed border-gray-300 dark:border-gray-600 z-10"></div>
                                    <div className="absolute top-0 -right-20 w-20 h-0 border-t border-dashed border-gray-300 dark:border-gray-600 z-10"></div>
                                    <div className="absolute bottom-0 -left-20 w-20 h-0 border-t border-dashed border-gray-300 dark:border-gray-600 z-10"></div>
                                    <div className="absolute bottom-0 -right-20 w-20 h-0 border-t border-dashed border-gray-300 dark:border-gray-600 z-10"></div>

                                    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                                        Passionate about blending design and technology,{" "}
                                        specialize in  <strong className="font-medium text-foreground">full-stack development </strong>and  <strong className="font-medium text-foreground">UI/UX design. </strong>
                                        My focus is on crafting elegant, user-friendly, and professional interfaces that deliver seamless digital experiences.
                                    </p>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex justify-center items-center">
                                    <div className="relative flex flex-col sm:flex-row gap-6 justify-center items-center p-8 md:p-12  w-1/3 border-r border-l border-dashed border-gray-300 dark:border-gray-600">
                                        <Button size="lg" className="text-base px-4 py-3 h-12" asChild>
                                            <a href="#projects">
                                                See My Work
                                            </a>
                                        </Button>

                                        <Button variant="outline" size="lg" className="text-base px-4 py-3 h-12" asChild>
                                            <a href="#contact">
                                                Contact Me
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                {/* Social buttons below CTA */}
                                {/* <div className="flex justify-center items-center">
                                    <div className="relative flex flex-col sm:flex-row gap-6 justify-center items-center py-4 md:py-6 w-1/3 border-r border-l border-dashed border-gray-300 dark:border-gray-600">

                                        <Button variant="ghost" size="icon" asChild>
                                            <a
                                                href="https://github.com/emit077"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="GitHub"
                                                className="hover:bg-muted transition-colors"
                                            >
                                                <Github className="h-5 w-5" />
                                            </a>
                                        </Button>
                                        <Button variant="ghost" size="icon" asChild>
                                            <a
                                                href="#contact"
                                                aria-label="Contact"
                                                className="hover:bg-muted transition-colors"
                                            >
                                                <Mail className="h-5 w-5" />
                                            </a>
                                        </Button>
                                    </div> 
                            </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
