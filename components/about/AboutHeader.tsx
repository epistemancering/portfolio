"use client"
import { useContext } from "react"
import Image from "next/image"
import darkContext from "@/components/darkContext"

export default function AboutHeader() {
    const getDark = useContext(darkContext)[0]

    return <>
        <h1 style = {{ margin: "0 0 40px", lineHeight: 1.1, fontWeight: 600, fontFamily: "Rubik" }} className = {`text-[42px] lg:text-7xl ${getDark ? "text-gray11" : "text-gray0"}`}>
            About
        </h1>
        <Image className = {getDark ? "shadow-whitelarge" : "shadow-darklarge"} style = {{ borderRadius: "24px", width: "768px", maxWidth: "100%", height: "auto" }} height = {432} width = {768} src = {"/at-work.png"} sizes = {" "} alt = {"Austin Henrie at work with a colleague"} />
    </>
}