import { useContext } from "react"
import Image from "next/image"
import darkContext from "@/components/darkContext"
import markdownPages from "@/components/markdown/markdownPages"

export default function WorkLink(props: { page: string }) {
    const getDark = useContext(darkContext)[0]

    return <>
        <p style = {{ position: "absolute", top: "8px", left: "8px", margin: 0, padding: "11px 16px", fontSize: "20px", fontWeight: 500, fontFamily: "Rubik" }} className = {`rounded-md lg:rounded-[15px] ${getDark ? "bg-gray0 text-gray8" : "bg-gray11 text-gray3"}`}>
            {markdownPages[props.page].title}
        </p>
        <Image className = {`${getDark ? "shadow-whitesmall hover:shadow-whitelarge" : "shadow-darksmall hover:shadow-darklarge"} rounded-xl lg:rounded-3xl h-[174px] lg:h-auto`} style = {{ display: "block", width: "100vw", maxWidth: "100%", objectFit: "cover", transitionDuration: "200ms", transitionProperty: "box-shadow" }} height = {568} width = {958} src = {`/work/${props.page}.png`} sizes = {"(min-width: 1024px) 640px, calc(100vw - 48px)"} quality = {53} alt = {`${markdownPages[props.page].title} demonstration`} />
    </>
}