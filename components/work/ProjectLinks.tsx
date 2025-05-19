import GradientLink from "@/components/GradientLink"
import ProjectIcon from "@/components/work/ProjectIcon"

export default function ProjectLinks(props: {
    links?: { label: string, href: string }[]
}) {
    return props.links?.map(function(link) {
        return <li key = {link.label} style = {{ listStyleType: "none" }}>
            <GradientLink label = {link.label} href = {link.href} target = {"_blank"}>
                <ProjectIcon label = {link.label} />
            </GradientLink>
        </li>
    })
}