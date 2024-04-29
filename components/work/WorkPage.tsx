"use client"
import { useContext } from "react"
import darkContext from "@/components/darkContext"
import WorkLinks from "@/components/work/WorkLinks"

export default function WorkPage() {
    return <>
        <h1 style = {{ margin: "0 0 32px", fontWeight: 600, fontFamily: "Rubik" }} className = {`text-center lg:text-left text-[42px] lg:text-7xl ${useContext(darkContext)[0] ? "text-gray11" : "text-gray0"}`}>
            My Work
        </h1>
        <main className = {"lg:pb-[120px] gap-4 lg:gap-16"} style = {{ display: "flex", flexWrap: "wrap" }}>
            <WorkLinks />
        </main>
    </>
}