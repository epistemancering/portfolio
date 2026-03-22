import { usePathname } from "next/navigation"
import Link from "next/link"

export default function RouteLink(props: { label: string, href: string, setOpen: Function }) {
    const currentRoute = usePathname()

    let bgText: string
    if (props.href === currentRoute || (props.href === "/work" && currentRoute.startsWith("/w"))) {
        bgText = "lg:bg-accentregular text-gray0 dark:text-gray11 lg:text-gray11"
    } else {
        bgText = "text-gray4 dark:text-gray7 hover:text-gray2 dark:hover:text-gray9 lg:hover:bg-accentfaint lg:dark:hover:bg-[rgba(119,17,166,.33)]"
    }

    return <Link style = {{ display: "block", textDecorationLine: "none", transitionProperty: "background-color, color", lineHeight: 1.2 }} className = {`lg:rounded-full ${bgText} lg:py-2 lg:px-4 text-lg lg:text-sm lg:duration-200`} href = {props.href} onClick = {() => props.setOpen()}>
        {props.label}
    </Link>
}