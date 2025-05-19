"use client"
import { useContext } from "react"
import Markdown from "react-markdown"
import darkContext from "@/components/darkContext"
import markdownPages from "@/components/markdown/markdownPages"
import MarkdownParent from "@/components/markdown/MarkdownParent"
import ProjectSkills from "@/components/work/ProjectSkills"
import ProjectLinks from "@/components/work/ProjectLinks"
import MarkdownImage from "@/components/markdown/MarkdownImage"

export default function MarkdownPage(props: { page: string, supplement?: string }) {
    const getDark = useContext(darkContext)[0]

    return <>
        <header style = {{ borderBottomStyle: "solid", borderWidth: "1px", padding: "0 24px", display: "flex", justifyContent: "center" }} className = {getDark ? "text-gray2" : "text-gray9"}>
            <div style = {{ width: "1280px" }} className = {"text-center lg:text-left"}>
                <MarkdownParent page = {props.page} supplement = {props.supplement} />
                <h1 className = {`mt-0 lg:mt-[11px] text-[42px] lg:text-7xl ${getDark ? "text-gray11" : "text-gray0"}`} style = {{ marginBottom: "16px", lineHeight: 1.1, fontWeight: 600, fontFamily: "Rubik" }}>
                    {props.supplement ? markdownPages[props.page].article?.supplements[props.supplement].title : markdownPages[props.page].title}
                </h1>
                <div style = {{ padding: "8px", display: "flex", justifyContent: "space-between", rowGap: "24px", alignItems: "center", columnGap: "40px" }} className = {"flex-col lg:flex-row"}>
                    <ul style = {{ margin: 0, padding: 0, display: "flex", gap: "8px", flexWrap: "wrap" }} className = {"justify-center lg:justify-start"}>
                        <ProjectSkills skills = {markdownPages[props.page].project?.skills} />
                    </ul>
                    <p style = {{ margin: 0, lineHeight: "30px", fontSize: "20px" }} className = {getDark ? "text-gray8" : "text-gray3"}>
                        {props.supplement ? markdownPages[props.page].article?.supplements[props.supplement].description : markdownPages[props.page].description}
                    </p>
                </div>
                <ul style = {{ margin: "40px 0 48px", padding: 0, display: "flex", justifyContent: "center", columnGap: "48px", flexWrap: "wrap", rowGap: "24px" }}>
                    <ProjectLinks links = {markdownPages[props.page].project?.links} />
                </ul>
            </div>
        </header>
        <main style = {{ padding: "60px 24px 0", display: "flex", justifyContent: "center" }}>
            <div style = {{ width: "636px" }}>
                <MarkdownImage page = {props.page} supplement = {props.supplement} />
                <div style = {{ paddingTop: "40px", lineHeight: "24px" }}>
                    <Markdown>
                        {props.supplement ? markdownPages[props.page].article?.supplements[props.supplement].markdown : markdownPages[props.page].markdown}
                    </Markdown>
                </div>
            </div>
        </main>
    </>
}