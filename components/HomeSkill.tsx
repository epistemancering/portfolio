import Image from "next/image"

export default function HomeSkill(props: { src: string, name: string, backgroundColor?: string }) {
    return <li style = {{ height: "77px", display: "flex", flexDirection: "column", alignItems: "center" }} className = {"gap-[7px] lg:gap-[18px] text-gray5 dark:text-gray6"}>
        <div style = {{ height: "40px", width: "40px", position: "relative" }}>
            <Image fill style = {{ backgroundColor: props.backgroundColor, objectFit: "contain" }} src = {`/skills/${props.src}`} sizes = {" "} alt = {`${props.name} icon`} />
        </div>
        {props.name}
    </li>
}