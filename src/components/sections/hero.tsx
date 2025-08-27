"use client"

import { Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative py-20">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Next.js style dashed border container */}
                <div className="relative ">
                    {/* Corner markers - Next.js style */}
                    <div className="absolute -top-11 -left-11 w-22 h-22 bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600 rounded-full"></div>
                    <div className="absolute -top-11 -right-11 w-22 h-22 bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600 rounded-full"></div>
                    <div className="absolute -bottom-11 -left-11 w-22 h-22 bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600 rounded-full"></div>
                    <div className="absolute -bottom-11 -right-11 w-22 h-22 bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600 rounded-full"></div>

                    <div style={{ borderWidth: "0px 1px 0px 0px" }} className="absolute -top-30 -left-0 w-0 h-40 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>
                    <div style={{ borderWidth: "0px 1px 0px 0px" }} className="absolute -top-30 left-1/3 w-0 h-40 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>
                    <div style={{ borderWidth: "0px 1px 0px 0px" }} className="absolute -top-30 left-2/3 w-0 h-40 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>
                    <div style={{ borderWidth: "1px 0px 0px 0px" }} className="absolute -top-0 -left-30 w-40 h-0 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>

                    <div style={{ borderWidth: "0px 1px 0px 0px" }} className="absolute -top-30 -right-0 w-0 h-40 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>
                    <div style={{ borderWidth: "1px 0px 0px 0px" }} className="absolute -top-0 -right-30 w-40 h-0 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>

                    <div style={{ borderWidth: "0px 1px 0px 0px" }} className="absolute -bottom-30 -right-0 w-0 h-40 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>
                    <div style={{ borderWidth: "1px 0px 0px 0px" }} className="absolute -bottom-0 -right-30 w-40 h-0 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>

                    <div style={{ borderWidth: "0px 1px 0px 0px" }} className="absolute -bottom-30 left-1/3 w-0 h-40 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>
                    <div style={{ borderWidth: "0px 1px 0px 0px" }} className="absolute -bottom-30 left-2/3 w-0 h-40 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>
                    <div style={{ borderWidth: "0px 1px 0px 0px" }} className="absolute -bottom-30 -left-0 w-0 h-40 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>
                    <div style={{ borderWidth: "1px 0px 0px 0px" }} className="absolute -bottom-0 -left-30 w-40 h-0 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>




                    <div className="relative border border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 p-16 md:p-20 lg:p-24">

                        {/* Content sections with individual borders */}
                        <div className="space-y-4">
                            <div className="relative">
                                {/* Main headline */}
                                <div style={{ borderWidth: "1px 0px 0px 0px" }} className="absolute -bottom-0 -left-40 w-40 h-0 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>
                                <div style={{ borderWidth: "1px 0px 0px 0px" }} className="absolute -bottom-0 -right-40 w-40 h-0 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>

                                <div style={{ borderWidth: "0px 0px 1px 0px" }} className="relative border  border-dashed border-gray-300 dark:border-gray-600 p-6 md:p-8 bg-white/50 dark:bg-gray-900/50">
                                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                                        <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                            Amit Sahu
                                        </span>
                                    </h1>
                                </div>
                            </div>

                            {/* Role */}
                            <div className="relative  p-4 md:p-6 bg-white/30 dark:bg-gray-900/30">
                                <h2 className="text-3xl md:text-5xl lg:text-4xl font-bold leading-tight">
                                    a web Designer and Fullstack developer
                                </h2>
                            </div>
                            <div className="relative">
                                <div style={{ borderWidth: "1px 0px 0px 0px" }} className="absolute -top-0 -left-40 w-40 h-0 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>
                                <div style={{ borderWidth: "1px 0px 0px 0px" }} className="absolute -top-0 -right-40 w-40 h-0 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>

                                <div style={{ borderWidth: "1px 0px 0px 0px" }} className="absolute -bottom-0 -left-40 w-40 h-0 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>
                                <div style={{ borderWidth: "1px 0px 0px 0px" }} className="absolute -bottom-0 -right-40 w-40 h-0 bg-transparent dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-600"></div>

                                {/* Subtitle */}
                                <div style={{ borderWidth: "1px 0px 1px 0px" }} className="relative border border-dashed border-gray-300 dark:border-gray-600  p-4 md:p-6 bg-white/20 dark:bg-gray-900/20">
                                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                        Passionate about blending design and technology,{" "}
                                        specialize in  <strong className="font-medium text-foreground">full-stack development </strong>and  <strong className="font-medium text-foreground">UI/UX design. </strong>
                                        My focus is on crafting elegant, user-friendly, and professional interfaces that deliver seamless digital experiences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 mb-8">
                            <Button size="lg" className="text-base px-8 py-3 h-12" asChild>
                                <a href="#projects">
                                    See My Work
                                </a>
                            </Button>

                            <Button variant="outline" size="lg" className="text-base px-8 py-3 h-12" asChild>
                                <a href="#contact">
                                    Contact Me
                                </a>
                            </Button>
                        </div>


                        {/* Social Links */}
                        <div className="flex justify-center space-x-6 mt-8">
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
                    </div>
                </div>
            </div>



        </section>
    )
}
