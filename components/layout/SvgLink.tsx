import SvgWrapper from "@/components/SvgWrapper"

export default function SvgLink(props: { href: string, label: string, children: React.ReactNode }) {
    return <li style = {{ listStyleType: "none" }}>
        <a className = {"text-accentdark dark:text-accentlight hover:text-gray0 dark:hover:text-gray11 lg:hover:text-gray11"} href = {props.href} style = {{ transitionDuration: "200ms" }} target = {"_blank"} aria-label = {props.label}>
            <SvgWrapper style = {{ width: "26px" }} className = {"p-2 lg:p-1.5"}>
                {props.children}
            </SvgWrapper>
        </a>
    </li>
}