import { useContext } from "react"
import darkContext from "@/components/darkContext"
import SvgWrapper from "@/components/SvgWrapper"

export default function MenuButton(props: { openState: [boolean, Function] }) {
    const getDark = useContext(darkContext)[0]

    let bgText: string
    if (getDark) {
        if (props.openState[0]) {
            bgText = "bg-[linear-gradient(theme(colors.gray4),transparent),radial-gradient(theme(colors.gray1),theme(colors.gray2)_150%)] text-gray11"
        } else {
            bgText = "bg-[radial-gradient(theme(colors.gray1),theme(colors.gray2)_150%)] text-gray7"
        }
    } else if (props.openState[0]) {
        bgText = "bg-[linear-gradient(theme(colors.gray7),transparent),radial-gradient(theme(colors.gray10),theme(colors.gray9)_150%)] text-gray0"
    } else {
        bgText = "bg-[radial-gradient(theme(colors.gray10),theme(colors.gray9)_150%)] text-gray4"
    }

    return <SvgWrapper style = {{ borderRadius: "50%", padding: "8px", width: "24px" }} className = {`${getDark ? "shadow-whitelarge" : "shadow-darklarge"} ${bgText}`} onClick = {() => props.openState[1](!props.openState[0])}>
        <path strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} d = {"M40 128h176M40 64h176M40 192h176"} />
    </SvgWrapper>
}