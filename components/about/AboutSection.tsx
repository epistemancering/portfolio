"use client"
import { useContext } from "react"
import darkContext from "@/components/darkContext"

export default function AboutSection(props: { title: string, children: React.ReactNode }) {
    return <div style = {{ paddingTop: "56px", display: "flex", columnGap: "56px", rowGap: "8px" }} className = {"flex-col lg:flex-row"}>
        <h2 style = {{ margin: 0, minWidth: "200px", fontSize: "26px", fontWeight: 600, fontFamily: "Rubik" }} className = {useContext(darkContext)[0] ? "text-gray11" : "text-gray0"}>
            {props.title}
        </h2>
        <p style = {{ margin: 0, lineHeight: 1.5 }} className = {"lg:text-xl"}>
            {props.children}
        </p>
    </div>
}