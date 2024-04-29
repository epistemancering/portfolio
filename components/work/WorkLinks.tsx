import Link from "next/link"
import projectRoutes from "@/components/work/projectRoutes"
import WorkLink from "@/components/work/WorkLink"

export default function WorkLinks(props: { rows?: number }) {
    let workLink: JSX.Element | undefined
    const workLinks = []
    for (const route in projectRoutes) {
        if (workLink) {
            workLinks[workLinks.length] = <div key = {route} className = {"flex-col lg:flex-row"} style = {{ display: "flex", columnGap: "64px", rowGap: "16px" }}>
                {workLink}
                <Link style = {{ position: "relative" }} href = {`/work/${route}`}>
                    <WorkLink route = {route} />
                </Link>
            </div>
            if (workLinks.length === props.rows) {
                break
            }
            workLink = undefined
        } else {
            workLink = <Link style = {{ position: "relative" }} className = {"lg:top-[120px]"} href = {`/work/${route}`}>
                <WorkLink route = {route} />
            </Link>
        }
    }

    return workLinks
}