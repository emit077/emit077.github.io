"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { loadingStateManager } from "@/lib/loading-state"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()

    const handleThemeToggle = () => {
        const isDarkMode = theme === "light" // Will be switching TO dark mode
        const message = isDarkMode ? "Unfolding the night sky..." : "Painting everything brighter..."

        // Show loading screen
        loadingStateManager.showLoading('theme', message, isDarkMode)
        setTheme(theme === "light" ? "dark" : "light")


        // Change theme after delay
        setTimeout(() => {
            loadingStateManager.hideLoading()
        }, 1000)
    }

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={handleThemeToggle}
            className="relative focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
