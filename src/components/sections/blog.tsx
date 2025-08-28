"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Calendar, Clock } from "lucide-react"

const blogPosts = [
    {
        title: "Building Scalable Fullstack Applications",
        description: "Learn the best practices for creating scalable fullstack applications using modern technologies like Next.js and Django.",
        category: "Development",
        readTime: "5 min read",
        date: "2024",
        url: "#",
        featured: true
    },
    {
        title: "The Future of Web Development",
        description: "Exploring emerging trends in web development and how they're shaping the future of digital experiences.",
        category: "Technology",
        readTime: "7 min read",
        date: "2024",
        url: "#",
        featured: false
    },
    {
        title: "UI/UX Design Principles for Developers",
        description: "Essential design principles that every developer should know to create better user experiences.",
        category: "Design",
        readTime: "6 min read",
        date: "2024",
        url: "#",
        featured: false
    }
]

const BlogCard = ({ post, index }: { post: typeof blogPosts[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={post.featured ? "md:col-span-2" : ""}
    >
        <Card className="group card-hover overflow-hidden h-full flex flex-col dark:bg-card/50 dark:border-border/30 dark:hover:border-primary/30 dark:hover:bg-card/70">
            <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                        {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                    </div>
                </div>
                <CardTitle className="group-hover:text-primary dark:group-hover:text-primary transition-colors dark:text-foreground line-clamp-2">
                    {post.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed dark:text-muted-foreground/80 line-clamp-3">
                    {post.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow flex items-end">
                <div className="w-full">
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                            {post.featured ? "Featured Article" : "Read More"}
                        </span>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                </div>
            </CardContent>
        </Card>
    </motion.div>
)

export function Blog() {
    return (
        <section id="blog" className="py-20 bg-muted/30 dark:bg-muted/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge variant="secondary" className="mb-4">
                        Blog & Insights
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-foreground">
                        Thoughts & Insights
                    </h2>
                    <p className="text-xl text-muted-foreground dark:text-muted-foreground/80 max-w-3xl mx-auto">
                        Sharing knowledge and insights about web development, design, and technology trends.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={post.title} post={post} index={index} />
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
                        More articles coming soon! Follow me for the latest insights.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
