import { useContext, useState } from "react"
import darkContext from "@/components/darkContext"
import MenuButton from "@/components/layout/MenuButton"
import RouteLi from "@/components/layout/RouteLi"
import SvgLink from "@/components/layout/SvgLink"
import ColorsButton from "@/components/layout/ColorsButton"

export default function NavMenu() {
    const getDark = useContext(darkContext)[0]

    const openState = useState(false)

    return <>
        <div style = {{ borderRadius: "50%", padding: "1px" }} className = {`lg:hidden ${getDark ? "bg-darkborder" : "bg-lightborder"}`}>
            <MenuButton openState = {openState} />
        </div>
        <div className = {`${openState[0] ? "flex" : "hidden"} lg:flex absolute lg:static ${getDark ? "shadow-[0_62px_25px_theme(colors.whitefaint1),0_35px_21px_theme(colors.whitefaint3),0_16px_16px_rgba(255,255,255,.1),0_4px_9px_rgba(255,255,255,.12)] bg-gray0" : "shadow-[0_62px_25px_theme(colors.darkfaint1),0_35px_21px_theme(colors.darkfaint3),0_16px_16px_rgba(9,11,17,.1),0_4px_9px_rgba(9,11,17,.12)] bg-gray11"} lg:shadow-[none] lg:bg-[transparent] rounded-b-xl flex-col lg:flex-row`} style = {{ zIndex: 1, top: "100%", left: 0, width: "100%" }}>
            <div style = {{ width: "100%", display: "flex", justifyContent: "center" }}>
                <div className = {`lg:rounded-full lg:p-px w-full lg:w-auto ${getDark ? "lg:bg-darkborder" : "lg:bg-lightborder"}`}>
                    <ul className = {`${getDark ? "lg:shadow-whitelarge lg:bg-[radial-gradient(theme(colors.gray1),theme(colors.gray2)_150%)]" : "lg:shadow-darklarge lg:bg-[radial-gradient(theme(colors.gray10),theme(colors.gray9)_150%)]"} lg:rounded-full p-8 lg:py-2 lg:px-[9px] flex-col lg:flex-row`} style = {{ margin: 0, display: "flex", gap: "16px" }}>
                        <RouteLi label = {"Home"} href = {"/"} setOpen = {openState[1]} />
                        <RouteLi label = {"Work"} href = {"/work"} setOpen = {openState[1]} />
                        <RouteLi label = {"About"} href = {"/about"} setOpen = {openState[1]} />
                    </ul>
                </div>
            </div>
            <div className = {`border-solid lg:border-none ${getDark ? "text-gray2" : "text-gray9"} lg:w-full lg:bg-[transparent] py-6 pr-8 pl-6 lg:p-0 justify-between lg:justify-end`} style = {{ borderWidth: "1px 0 0", display: "flex", gap: "12px", alignItems: "center" }}>
                <ul className = {"gap-2.5 lg:gap-0"} style = {{ margin: 0, padding: 0, display: "flex" }}>
                    <SvgLink href = {"https://www.linkedin.com/in/austin-henrie/"} label = {"LinkedIn"}>
                        <rect width = {184} height = {184} x = {36} y = {36} fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} rx = {8} />
                        <path fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} d = {"M120 112v64m-32-64v64m32-36a28 28 0 0 1 56 0v36"} />
                        <circle stroke = {"none"} cx = {88} cy = {80} r = {12} />
                    </SvgLink>
                    <SvgLink href = {"https://github.com/epistemancering"} label = {"Github"}>
                        <g strokeLinecap = {"round"} strokeLinejoin = {"round"}>
                            <path fill = {"none"} strokeWidth = {14.7} d = {"M55.7 167.2c13.9 1 21.3 13.1 22.2 14.6 4.2 7.2 10.4 9.6 18.3 7.1l1.1-3.4a60.3 60.3 0 0 1-25.8-11.9c-12-10.1-18-25.6-18-46.3"} />
                            <path fill = {"none"} strokeWidth = {16} d = {"M61.4 205.1a24.5 24.5 0 0 1-3-6.1c-3.2-7.9-7.1-10.6-7.8-11.1l-1-.6c-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.7 46.7 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4 0 42.6-25.8 54.7-43.6 58.7 1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3"} />
                            <path fill = {"none"} strokeWidth = {16} d = {"M160.9 185.7c1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3A98.6 98.6 0 1 0 61.4 205c-1.4-2.1-11.3-17.5-11.8-17.8-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.4 46.4 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4.1 42.6-25.8 54.7-43.6 58.6z"} />
                            <path fill = {"none"} strokeWidth = {18.7} d = {"m170.1 203.3 17.3-12 17.2-18.7 9.5-26.6v-27.9l-9.5-27.5"} />
                            <path fill = {"none"} strokeWidth = {22.7} d = {"m92.1 57.3 23.3-4.6 18.7-1.4 29.3 5.4m-110 32.6-8 16-4 21.4.6 20.3 3.4 13"} />
                            <path fill = {"none"} strokeWidth = {13.3} d = {"M28.8 133a100 100 0 0 0 66.9 94.4v-8.7c-22.4 1.8-33-11.5-35.6-19.8-3.4-8.6-7.8-11.4-8.5-11.8"} />
                        </g>
                    </SvgLink>
                </ul>
                <div style = {{ position: "relative" }}>
                    <ColorsButton />
                    <div className = {"bg-accentregular"} style = {{ position: "absolute", top: 0, left: getDark ? "50%" : 0, borderRadius: "50%", height: "100%", width: "50%", transitionDuration: "200ms" }} />
                </div>
            </div>
        </div>
    </>
}