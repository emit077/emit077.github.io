import Link from "next/link"
import { Github, Mail, LinkedinIcon, CodepenIcon } from "lucide-react"
import { Button } from "./ui/button"

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <p className="text-muted-foreground text-sm">
                            © 2025 Amit Sahu | Built with Next.js
                        </p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon" asChild>
                            <Link
                                href="https://github.com/emit077"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </Link>
                        </Button>

                        <Button variant="ghost" size="icon" asChild>
                            <Link
                                href="https://www.linkedin.com/in/amit-kumar-sahu-705a06137"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <LinkedinIcon className="h-5 w-5" />
                            </Link>
                        </Button>
                        {/* 
                        <Button variant="ghost" size="icon" asChild>
                            <Link
                                href="https://stackoverflow.com/users/10175889/amit"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Stack Overflow"
                            >
                                <Code className="h-5 w-5" />
                            </Link>
                        </Button> */}

                        <Button variant="ghost" size="icon" asChild>
                            <Link
                                href="https://codepen.io/emitsahu077"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="CodePen"
                            >
                                <CodepenIcon className="h-5 w-5" />
                            </Link>
                        </Button>

                        <Button variant="ghost" size="icon" asChild>
                            <Link href="#contact" aria-label="Contact">
                                <Mail className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
