"use client"
import { useContext } from "react"
import Link from "next/link"
import Image from "next/image"
import Markdown from "react-markdown"
import darkContext from "@/components/darkContext"
import projectRoutes from "@/components/work/projectRoutes"
import ProjectSkills from "@/components/work/ProjectSkills"
import ProjectLinks from "@/components/work/ProjectLinks"

export default function ProjectPage(props: { route: string }) {
    const getDark = useContext(darkContext)[0]

    return <>
        <header style = {{ borderBottomStyle: "solid", borderWidth: "1px", padding: "0 24px", display: "flex", justifyContent: "center" }} className = {getDark ? "text-gray2" : "text-gray9"}>
            <div style = {{ width: "1280px" }} className = {"text-center lg:text-left"}>
                <Link className = {"hidden lg:inline decoration-[transparent] hover:decoration-accentlight text-accentlight"} style = {{ textUnderlineOffset: "4px", transitionDuration: "200ms" }} href = {"/work"}>
                    🡠 Work
                </Link>
                <h1 className = {`mt-0 lg:mt-[11px] text-[42px] lg:text-7xl ${getDark ? "text-gray11" : "text-gray0"}`} style = {{ marginBottom: "16px", lineHeight: 1.1, fontWeight: 600, fontFamily: "Rubik" }}>
                    {projectRoutes[props.route].title}
                </h1>
                <div style = {{ padding: "8px", display: "flex", justifyContent: "space-between", rowGap: "24px", alignItems: "center", columnGap: "40px" }} className = {"flex-col lg:flex-row"}>
                    <ul style = {{ margin: 0, padding: 0, display: "flex", gap: "8px", flexWrap: "wrap" }} className = {"justify-center lg:justify-start"}>
                        <ProjectSkills skills = {projectRoutes[props.route].skills} />
                    </ul>
                    <p style = {{ margin: 0, lineHeight: "30px", fontSize: "20px" }} className = {getDark ? "text-gray8" : "text-gray3"}>
                        {projectRoutes[props.route].description}
                    </p>
                </div>
                <ul style = {{ margin: "40px 0 48px", padding: 0, display: "flex", justifyContent: "center", columnGap: "48px", flexWrap: "wrap", rowGap: "24px" }}>
                    <ProjectLinks links = {projectRoutes[props.route].links} />
                </ul>
            </div>
        </header>
        <main style = {{ padding: "60px 24px 0", display: "flex", justifyContent: "center" }}>
            <div style = {{ width: "636px" }}>
                <Image className = {getDark ? "shadow-whitesmall" : "shadow-darksmall"} style = {{ borderRadius: "24px", width: "100%", height: "auto" }} height = {568} width = {958} src = {`/work/${props.route}.png`} sizes = {"min(calc(100vw - 48px), 640px)"} alt = {projectRoutes[props.route].title} />
                <div style = {{ paddingTop: "40px", lineHeight: "24px" }}>
                    <Markdown>
                        {projectRoutes[props.route].markdown}
                    </Markdown>
                </div>
            </div>
        </main>
    </>
}