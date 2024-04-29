import { useContext } from "react"
import darkContext from "@/components/darkContext"

export default function FooterLink(props: { label: string, href: string }) {
    return <li style = {{ listStyleType: "none" }}>
        <a className = {`${useContext(darkContext)[0] ? "text-gray6 hover:decoration-gray6" : "text-gray5 hover:decoration-gray5"} decoration-[transparent]`} href = {props.href} style = {{ transitionDuration: "200ms", textUnderlineOffset: "4px" }} target = {"_blank"}>
            {props.label}
        </a>
    </li>
}