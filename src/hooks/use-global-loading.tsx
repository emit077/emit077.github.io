"use client"

import { useState, useEffect } from "react"
import { loadingStateManager } from "@/lib/loading-state"

export function useGlobalLoading() {
    const [loadingState, setLoadingState] = useState(loadingStateManager.getState())

    useEffect(() => {
        const unsubscribe = loadingStateManager.subscribe(setLoadingState)
        return unsubscribe
    }, [])

    return loadingState
}
