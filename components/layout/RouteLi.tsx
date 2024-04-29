import RouteLink from "@/components/layout/RouteLink"

export default function RouteLi(props: { label: string, href: string, setOpen: Function }) {
    return <li style = {{ listStyleType: "none" }}>
        <RouteLink label = {props.label} href = {props.href} setOpen = {props.setOpen} />
    </li>
}