"use client"

import React from "react"
import { motion } from "framer-motion"
import { useGlobalLoading } from "@/hooks/use-global-loading"

interface LoadingScreenProps {
    isDarkMode?: boolean
    type?: 'theme' | 'page'
    message?: string
}

function LoadingScreen({ isDarkMode = false, type = 'theme', message }: LoadingScreenProps) {
    return (
        <div className="test-loader-screen fixed h-screen inset-0 z-[9999] flex items-center justify-center bg-background/30 dark:bg-background/50 loading-screen-blur" style={{ minHeight: '100vh', width: '100vw' }}>
            <div className="relative w-80">
                {/* Extended dashed borders */}
                <div className="absolute -top-20 left-0 w-0 h-20 border-l border-dashed border-gray-300 dark:border-l-1 dark:border-dashed dark:border-primary/10"></div>
                <div className="absolute top-0 -left-20 w-20 h-0 border-t border-dashed border-gray-300 dark:border-t-1 dark:border-dashed dark:border-primary/10"></div>

                <div className="absolute -top-20 right-0 w-0 h-20 border-l border-dashed border-gray-300 dark:border-l-1 dark:border-dashed dark:border-primary/10"></div>
                <div className="absolute top-0 -right-20 w-20 h-0 border-t border-dashed border-gray-300 dark:border-t-1 dark:border-dashed dark:border-primary/10"></div>

                <div className="absolute -bottom-20 left-0 w-0 h-20 border-l border-dashed border-gray-300 dark:border-l-1 dark:border-dashed dark:border-primary/10"></div>
                <div className="absolute bottom-0 -left-20 w-20 h-0 border-t border-dashed border-gray-300 dark:border-t-1 dark:border-dashed dark:border-primary/10"></div>

                <div className="absolute -bottom-20 right-0 w-0 h-20 border-l border-dashed border-gray-300 dark:border-l-1 dark:border-dashed dark:border-primary/10"></div>
                <div className="absolute bottom-0 -right-20 w-20 h-0 border-t border-dashed border-gray-300 dark:border-t-1 dark:border-dashed dark:border-primary/10"></div>

                {/* Professional Loading Container */}
                <div className="relative border border-border/50 dark:border-border/30 bg-card/80 dark:bg-card/30 backdrop-blur-lg dark:backdrop-blur-md p-12 shadow-xl loading-screen-blur">
                    <div className="flex flex-col items-center justify-center">
                        {/* Professional Logo/Icon - No animation */}
                        <div className="relative mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                                <h3 className="text-xl font-semibold">
                                    <span className="text-white dark:text-black">
                                        AS
                                    </span>
                                </h3>
                            </div>
                        </div>

                        {/* Loading Text - No animation */}
                        <div className="text-center mb-6">
                            <p className="text-sm text-muted-foreground">
                                {message || (type === 'theme'
                                    ? (isDarkMode ? "Unfolding the night sky..." : "Painting everything brighter...")
                                    : "Preparing your experience..."
                                )}
                            </p>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden mb-4">
                            {type === 'theme' ? (
                                // Theme switching: Infinite progress
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            ) : (
                                // Page loading: Finite progress
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeInOut"
                                    }}
                                />
                            )}
                        </div>

                        <span className="text-xs text-muted-foreground">
                            Please wait...
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function PageLoader() {
    const { isLoading, type, message, isDarkMode } = useGlobalLoading()

    if (!isLoading) return null

    return <LoadingScreen type={type || 'page'} message={message} isDarkMode={isDarkMode} />
}
