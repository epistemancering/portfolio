"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
    const nextRouter = useRouter()

    useEffect(function() {
        nextRouter.push("/")
    })
}