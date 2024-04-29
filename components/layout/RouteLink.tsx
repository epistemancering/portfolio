import { useContext } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import darkContext from "@/components/darkContext"

export default function RouteLink(props: { label: string, href: string, setOpen: Function }) {
    const currentRoute = usePathname()
    const getDark = useContext(darkContext)[0]

    let bgText: string
    if (props.href === currentRoute || (props.href === "/work" && currentRoute.startsWith("/w"))) {
        bgText = "lg:bg-accentregular "
        if (getDark) {
            bgText += "text-gray11"
        } else {
            bgText += "text-gray0 lg:text-gray11"
        }
    } else if (getDark) {
        bgText = "lg:hover:bg-[rgba(119,17,166,.33)] text-gray7 hover:text-gray9"
    } else {
        bgText = "lg:hover:bg-accentfaint text-gray4 hover:text-gray2"
    }

    return <Link style = {{ display: "block", textDecorationLine: "none", transitionProperty: "background-color, color", lineHeight: 1.2 }} className = {`lg:rounded-full ${bgText} lg:py-2 lg:px-4 text-lg lg:text-sm lg:duration-200`} href = {props.href} onClick = {() => props.setOpen()}>
        {props.label}
    </Link>
}