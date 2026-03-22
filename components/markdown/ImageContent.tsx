import Image from "next/image"
import markdownPages from "@/components/markdown/markdownPages"

export default function ImageContent(props: { page: string }) {
    return <Image className = {"shadow-darksmall dark:shadow-whitesmall"} style = {{ borderRadius: "24px", width: "100%", height: "auto" }} height = {568} width = {958} src = {`/${markdownPages[props.page].openGraph ? markdownPages[props.page].openGraph?.images : `work/${props.page}.png`}`} sizes = {"min(calc(100vw - 48px), 640px)"} alt = {markdownPages[props.page].title} />
}