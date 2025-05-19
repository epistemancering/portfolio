import Link from "next/link"
import markdownPages from "@/components/markdown/markdownPages"
import WorkLink from "@/components/work/WorkLink"

export default function WorkLinks(props: { rows?: number }) {
    let workLink: React.JSX.Element | undefined
    const workLinks = []
    for (const page in markdownPages) {
        if (markdownPages[page].project) {
            if (workLink) {
                workLinks[workLinks.length] = <div key = {page} className = {"flex-col lg:flex-row"} style = {{ display: "flex", columnGap: "64px", rowGap: "16px" }}>
                    {workLink}
                    <Link style = {{ position: "relative" }} href = {`/work/${page}`}>
                        <WorkLink page = {page} />
                    </Link>
                </div>
                if (workLinks.length === props.rows) {
                    break
                }
                workLink = undefined
            } else {
                workLink = <Link style = {{ position: "relative" }} className = {"lg:top-[120px]"} href = {`/work/${page}`}>
                    <WorkLink page = {page} />
                </Link>
            }
        }
    }

    return workLinks
}