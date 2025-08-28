"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Github, Phone, Linkedin, ExternalLink, MessageCircle, Calendar, Clock } from "lucide-react"

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        value: "emitsahu077@gmail.com",
        href: "mailto:emitsahu077@gmail.com",
        description: "Send me an email anytime"
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+91 8305050674",
        href: "tel:+918305050674",
        description: "Call me directly"
    },
    {
        icon: Github,
        title: "GitHub",
        value: "github.com/emit077",
        href: "https://github.com/emit077",
        description: "Check out my code"
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Raipur, Chhattisgarh, India",
        href: "#",
        description: "Based in India"
    }
]

const socialLinks = [
    {
        icon: Linkedin,
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/amit-kumar-sahu-705a06137",
        description: "Professional network"
    },
    {
        icon: Github,
        title: "GitHub",
        href: "https://github.com/emit077",
        description: "Open source projects"
    }
]

const availabilityInfo = [
    {
        icon: Calendar,
        title: "Available for",
        value: "Freelance & Full-time",
        description: "Open to new opportunities"
    },
    {
        icon: Clock,
        title: "Response time",
        value: "Within 24 hours",
        description: "Quick and reliable communication"
    },
    {
        icon: MessageCircle,
        title: "Preferred contact",
        value: "Email or Phone",
        description: "Choose what works best for you"
    }
]

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge variant="secondary" className="mb-4">
                        Get In Touch
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Ready to bring your ideas to life? I&apos;m here to help you create something amazing.
                        Let&apos;s start a conversation and make it happen.
                    </p>
                </motion.div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={info.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="group card-hover h-full dark:bg-card/50 dark:border-border/30 dark:hover:border-primary/30 dark:hover:bg-card/70">
                                <CardContent className="p-6 text-center">
                                    <div className="relative w-16 h-16 mx-auto mb-4 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                                        <info.icon className="h-8 w-8 text-primary dark:text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">{info.title}</h3>
                                    <a
                                        href={info.href}
                                        target={info.href.startsWith('http') ? '_blank' : undefined}
                                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="text-primary hover:text-primary/80 dark:hover:text-primary/90 transition-colors font-medium"
                                    >
                                        {info.value}
                                    </a>
                                    <p className="text-sm text-muted-foreground dark:text-muted-foreground/80 mt-2">{info.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Why Work With Me */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <Card className="h-full dark:bg-card/50 dark:border-border/30">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-6 dark:text-foreground">Why Work With Me?</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary dark:bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <p className="font-medium dark:text-foreground">6+ Years Experience</p>
                                            <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">Professional development expertise</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary dark:bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <p className="font-medium dark:text-foreground">Modern Tech Stack</p>
                                            <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">Cutting-edge technologies & best practices</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary dark:bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <p className="font-medium dark:text-foreground">User-Focused Design</p>
                                            <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">Exceptional UX & performance optimization</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primary dark:bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <p className="font-medium dark:text-foreground">Clear Communication</p>
                                            <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">Collaborative approach & transparent process</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Availability & Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Availability Info */}
                        <Card className="dark:bg-card/50 dark:border-border/30">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-6 dark:text-foreground">Availability & Communication</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {availabilityInfo.map((info, index) => (
                                        <motion.div
                                            key={info.title}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="text-center"
                                        >
                                            <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                                                <info.icon className="h-6 w-6 text-primary dark:text-primary" />
                                            </div>
                                            <h4 className="font-semibold mb-1 dark:text-foreground">{info.title}</h4>
                                            <p className="text-primary font-medium mb-1 dark:text-primary">{info.value}</p>
                                            <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">{info.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Social Links */}
                        <Card className="dark:bg-card/50 dark:border-border/30">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-6 dark:text-foreground">Connect With Me</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.title}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="group flex items-center space-x-4 p-4 rounded-lg border border-border/50 dark:border-border/30 hover:border-primary/50 dark:hover:border-primary/40 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all"
                                        >
                                            <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                                                <social.icon className="h-5 w-5 text-primary dark:text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-semibold group-hover:text-primary dark:group-hover:text-primary transition-colors dark:text-foreground">{social.title}</p>
                                                <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">{social.description}</p>
                                            </div>
                                            <ExternalLink className="h-4 w-4 text-muted-foreground dark:text-muted-foreground/60 group-hover:text-primary dark:group-hover:text-primary transition-colors ml-auto" />
                                        </motion.a>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Card className="bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 border-primary/20 dark:border-primary/30">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-4 dark:text-foreground">Ready to Start Your Project?</h3>
                            <p className="text-muted-foreground dark:text-muted-foreground/80 mb-6 max-w-2xl mx-auto">
                                Whether you have a specific project in mind or just want to explore possibilities,
                                I&apos;m here to help. Let&apos;s discuss your ideas and turn them into reality.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="group">
                                    <a href="mailto:emitsahu077@gmail.com">
                                        <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                                        Send Email
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="group">
                                    <a href="tel:+918305050674">
                                        <Phone className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                                        Call Now
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
