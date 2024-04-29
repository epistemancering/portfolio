import { useContext } from "react"
import darkContext from "@/components/darkContext"
import SvgWrapper from "@/components/SvgWrapper"

export default function ColorsButton() {
    const darkState = useContext(darkContext)

    const onClick = function() {
        if (darkState[0]) {
            localStorage.colors = "light"
        } else {
            localStorage.colors = "dark"
        }
        darkState[1](!darkState[0])
    }

    return <button className = {`border-accentfaint ${darkState[0] ? "bg-gray0" : "bg-gray11"}`} style = {{ borderRadius: "32px", borderStyle: "solid", borderWidth: "1px", padding: 0, display: "flex", gap: "2px", cursor: "pointer" }} onClick = {onClick} aria-label = {"change colors"}>
        <SvgWrapper style = {{ zIndex: 1, padding: "7px", width: "16px", transitionDuration: "200ms" }} className = {darkState[0] ? "text-accentfaint" : "text-gray11"}>
            <circle cx = {128} cy = {128} r = {60} fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} />
            <path fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} d = {"M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"} />
        </SvgWrapper>
        <SvgWrapper style = {{ zIndex: 1, padding: "7px", width: "16px", transitionDuration: "200ms" }} className = {darkState[0] ? "text-gray11" : "text-accentfaint"}>
            <path fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} d = {"M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"} />
        </SvgWrapper>
    </button>
}