"use client"

import { useState, useEffect } from "react"
import { loadingStateManager } from "@/lib/loading-state"

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
    useEffect(() => {
        // Show page loading on mount
        loadingStateManager.showLoading('page', 'Loading your experience...')

        // Hide after delay
        const timer = setTimeout(() => {
            loadingStateManager.hideLoading()
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    return {
        isPageLoading: false, // This is now handled by global state
        setIsPageLoading: () => { } // No longer needed
    }
}
