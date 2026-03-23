"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import NavMenu from "@/components/layout/NavMenu"
import GradientLink from "@/components/GradientLink"
import SvgWrapper from "@/components/SvgWrapper"
import ResumeLink from "@/components/layout/ResumeLink"
import FooterLink from "@/components/layout/FooterLink"

export default function LayoutBody(props: { children: React.ReactNode }) {
    return <>
        <div>
            <nav style = {{ marginBottom: "56px", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 500, fontFamily: "Rubik", position: "relative" }} className = {"py-[23px] lg:py-[39px] pr-[23px] pl-6 lg:px-20"}>
                <div className = {"lg:w-1/2"} style = {{ display: "flex" }}>
                    <Link className = {"lg:text-xl text-gray0 dark:text-gray11"} style = {{ display: "flex", gap: "8px", alignItems: "center", textDecorationLine: "none" }} href = {"/"}>
                        <svg style = {{ width: "1.6em" }} viewBox = {"0 0 256 256"} stroke = {"url(#lineargradient)"} fill = {"url(#lineargradient)"}>
                            <g>
                                <path fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} d = {"m80 96 40 32-40 32m56 0h40"} />
                                <rect width = {192} height = {160} x = {32} y = {48} fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16.97} rx = {8.5} />
                            </g>
                            <linearGradient id = {"lineargradient"} gradientUnits = {"userSpaceOnUse"} x1 = {23} x2 = {235} y1 = {43} y2 = {202}>
                                <stop className = {"[stop-color:theme(colors.accentlight)] dark:[stop-color:rgb(76,17,198)]"} />
                                <stop offset = {.5} className = {"[stop-color:theme(colors.accentregular)]"} />
                                <stop offset = {1} className = {"[stop-color:theme(colors.accentdark)] dark:[stop-color:theme(colors.accentlight)]"} />
                            </linearGradient>
                        </svg>
                        Austin Henrie
                    </Link>
                </div>
                <NavMenu />
            </nav>
            {props.children}
        </div>
        <footer style = {{ paddingTop: "80px" }}>
            <div style = {{ borderStyle: "solid none", borderWidth: "1px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "48px" }} className = {"shadow-darksmall dark:shadow-whitesmall bg-whitefaint4 dark:bg-darkfaint4 py-20 px-0 lg:p-[120px] flex-col lg:flex-row text-gray9 dark:text-gray2"}>
                <h2 style = {{ margin: 0, lineHeight: 1.1, fontWeight: 600, fontFamily: "Rubik" }} className = {"w-60 lg:w-96 text-center lg:text-left text-[26px] lg:text-[42px] text-gray2 dark:text-gray9"}>
                    {usePathname().startsWith("/blog/") ? "Have a comment or correction" : "Interested in working together"}?
                </h2>
                <div style = {{ display: "flex", flexWrap: "wrap", columnGap: "48px", rowGap: "24px", alignItems: "center" }} className = {"justify-center lg:justify-end"}>
                    <ResumeLink />
                    <GradientLink label = {"Send Me a Message"} href = {"mailto:nitsua15@gmail.com"}>
                        <SvgWrapper style = {{ height: "100%" }}>
                            <path fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} d = {"M210.3 35.9 23.9 88.4a8 8 0 0 0-1.2 15l85.6 40.5a7.8 7.8 0 0 1 3.8 3.8l40.5 85.6a8 8 0 0 0 15-1.2l52.5-186.4a7.9 7.9 0 0 0-9.8-9.8Zm-99.4 109.2 45.2-45.2"} />
                        </SvgWrapper>
                    </GradientLink>
                </div>
            </div>
            <div className = {"py-9 lg:py-7 flex-col lg:flex-row"} style = {{ paddingRight: "80px", paddingLeft: "80px", display: "flex", justifyContent: "space-between", gap: "20px", alignItems: "center", fontSize: "14px" }}>
                <p className = {"text-gray5 dark:text-gray6"}>
                    {new Date().getFullYear()} Austin Henrie
                </p>
                <ul style = {{ padding: 0, display: "flex", gap: "16px" }}>
                    <FooterLink label = {"LinkedIn"} href = {"https://www.linkedin.com/in/austin-henrie/"} />
                    <FooterLink label = {"Github"} href = {"https://github.com/epistemancering"} />
                </ul>
            </div>
        </footer>
    </>
}