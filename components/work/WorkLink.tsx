import Image from "next/image"
import markdownPages from "@/components/markdown/markdownPages"

export default function WorkLink(props: { page: string }) {
    return <>
        <p style = {{ position: "absolute", top: "8px", left: "8px", margin: 0, padding: "11px 16px", fontSize: "20px", fontWeight: 500, fontFamily: "Rubik" }} className = {"rounded-md lg:rounded-[15px] bg-gray11 dark:bg-gray0 text-gray3 dark:text-gray8"}>
            {markdownPages[props.page].title}
        </p>
        <Image className = {"shadow-darksmall dark:shadow-whitesmall rounded-xl lg:rounded-3xl h-[174px] lg:h-auto hover:shadow-darklarge dark:hover:shadow-whitelarge"} style = {{ display: "block", width: "100vw", maxWidth: "100%", objectFit: "cover", transitionDuration: "200ms", transitionProperty: "box-shadow" }} height = {568} width = {958} src = {`/work/${props.page}.png`} sizes = {"(min-width: 1024px) 640px, calc(100vw - 48px)"} alt = {`${markdownPages[props.page].title} demonstration`} />
    </>
}