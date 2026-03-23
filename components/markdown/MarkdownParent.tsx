import Link from "next/link"
import markdownPages from "@/components/markdown/markdownPages"

export default function MarkdownParent(props: { page: string, supplement?: string }) {
    if (props.supplement || markdownPages[props.page].project) {
        return <Link className = {"hidden lg:inline decoration-[transparent] hover:decoration-accentlight text-accentlight"} style = {{ textUnderlineOffset: "4px", transitionDuration: "200ms" }} href = {`/${props.supplement ? `blog/${props.page}` : "work"}`}>
            🡠 {props.supplement ? markdownPages[props.page].title : "Work"}
        </Link>
    }

    return <p className = {"text-gray3 dark:text-gray8"} style = {{ margin: "0 0 13px" }}>
        {markdownPages[props.page].article?.published}
    </p>
}