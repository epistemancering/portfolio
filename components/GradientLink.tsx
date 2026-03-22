import Link from "next/link"

export default function GradientLink(props: { label: string, href: string, children: React.ReactNode, target?: string }) {
    return <div style = {{ borderRadius: "32px" }} className = {"bg-[linear-gradient(150deg,rgb(202,120,121),theme(colors.accentregular),theme(colors.accentdark))]"}>
        <Link className = {"shadow-darklarge dark:shadow-whitelarge py-[9px] lg:py-[18px] gap-4 lg:gap-[21px] text-xl lg:text-[26px] text-gray11 hover:bg-[rgba(255,255,255,.3)] dark:hover:bg-[rgba(9,11,17,.3)]"} style = {{ borderRadius: "32px", paddingRight: "40px", paddingLeft: "40px", display: "flex", alignItems: "center", textAlign: "center", textDecorationLine: "none", transitionDuration: "200ms", transitionProperty: "background-color" }} href = {props.href} target = {props.target}>
            <p style = {{ margin: 0 }}>
                {props.label}
            </p>
            <div className = {"h-6 lg:h-[31px]"} style = {{ display: "flex", alignItems: "center" }}>
                {props.children}
            </div>
        </Link>
    </div>
}