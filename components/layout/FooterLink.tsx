export default function FooterLink(props: { label: string, href: string }) {
    return <li style = {{ listStyleType: "none" }}>
        <a className = {"text-gray5 dark:text-gray6 decoration-[transparent] hover:decoration-gray5 dark:hover:decoration-gray6"} href = {props.href} style = {{ transitionDuration: "200ms", textUnderlineOffset: "4px" }} target = {"_blank"}>
            {props.label}
        </a>
    </li>
}