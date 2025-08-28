"use client"

import { useState, useEffect } from "react"

// Hook specifically for theme toggle loading
export function useThemeLoading() {
    const [isThemeLoading, setIsThemeLoading] = useState(false)

    const toggleThemeWithLoading = async (toggleFunction: () => void) => {
        setIsThemeLoading(true)
        // 1000ms delay for smooth transition
        setTimeout(() => {
            toggleFunction()
            setIsThemeLoading(false)
        }, 800)
    }

    return {
        isThemeLoading,
        toggleThemeWithLoading
    }
}

// Hook for page loading
export function usePageLoading() {
    const [isPageLoading, setIsPageLoading] = useState(true)

    useEffect(() => {
        // Simulate page loading time
        const timer = setTimeout(() => {
            setIsPageLoading(false)
        }, 1500) // 2 seconds loading time

        return () => clearTimeout(timer)
    }, [])

    return {
        isPageLoading,
        setIsPageLoading
    }
}
