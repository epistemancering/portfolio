import { useContext } from "react"
import darkContext from "@/components/darkContext"
import markdownPages from "@/components/markdown/markdownPages"

export default function MarkdownPublished(props: { page: string }) {
    return <p className = {useContext(darkContext)[0] ? "text-gray8" : "text-gray3"} style = {{ margin: "0 0 13px" }}>
        {markdownPages[props.page].article?.published}
    </p>
}