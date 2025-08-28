"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { LoadingScreen } from "@/components/ui/loading-screen"
import { useThemeLoading } from "@/hooks/use-loading"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const { isThemeLoading, toggleThemeWithLoading } = useThemeLoading()

    const handleThemeToggle = () => {
        const isDarkMode = theme === "light" // Will be switching TO dark mode
        toggleThemeWithLoading(() => {
            setTheme(theme === "light" ? "dark" : "light")
        })
    }

    return (
        <>
            <Button
                variant="outline"
                size="icon"
                onClick={handleThemeToggle}
                className="relative"
                disabled={isThemeLoading}
            >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>

            {isThemeLoading && <LoadingScreen isDarkMode={theme === "light"} type="theme" />}
        </>
    )
}
