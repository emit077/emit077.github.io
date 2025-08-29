"use client"

import { useEffect } from "react"
import { usePageLoading } from "@/hooks/use-loading"

export function PageLoadingInitializer() {
    usePageLoading()
    return null
}
