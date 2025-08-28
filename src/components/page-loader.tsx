"use client"

import { usePageLoading } from "@/hooks/use-loading"
import { LoadingScreen } from "@/components/ui/loading-screen"

export function PageLoader() {
    const { isPageLoading } = usePageLoading()

    if (!isPageLoading) return null

    return <LoadingScreen type="page" message="Loading your experience..." />
}
