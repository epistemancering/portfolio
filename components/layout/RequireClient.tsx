"use client"
import { useState, useEffect } from "react"
import DarkProvider from "@/components/layout/DarkProvider"

export default function RequireClient(props: { children: React.ReactNode }) {
    const [getClient, setClient] = useState(false)

    useEffect(function() {
        setClient(true)
    }, [])

    if (getClient) {
        if (!localStorage.colors) {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                localStorage.colors = "dark"
            } else {
                localStorage.colors = "light"
            }
        }

        return <DarkProvider>
            {props.children}
        </DarkProvider>
    }

    return <body />
}