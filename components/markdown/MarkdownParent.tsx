import Link from "next/link"
import markdownPages from "@/components/markdown/markdownPages"
import MarkdownPublished from "@/components/markdown/MarkdownPublished"

export default function MarkdownParent(props: { page: string, supplement?: string }) {
    if (props.supplement || markdownPages[props.page].project) {
        return <Link className = {"hidden lg:inline decoration-[transparent] hover:decoration-accentlight text-accentlight"} style = {{ textUnderlineOffset: "4px", transitionDuration: "200ms" }} href = {`/${props.supplement ? `blog/${props.page}` : "work"}`}>
            🡠 {props.supplement ? markdownPages[props.page].title : "Work"}
        </Link>
    }

    return <MarkdownPublished page = {props.page} />
}