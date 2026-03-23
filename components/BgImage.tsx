import Image from "next/image"

export default function BgImage(props: { style: React.CSSProperties, className: string, height: number, width: number, src: string, sizes?: string, loading?: "eager", fetchPriority?: "high" }) {
    return <>
        <Image style = {{ position: "absolute", height: "auto", ...props.style }} className = {`dark:hidden left-[-34%] lg:left-0 w-[168%] lg:w-full ${props.className}`} height = {props.height} width = {props.width} src = {`/bg-light-${props.src}`} sizes = {props.sizes} loading = {props.loading} fetchPriority = {props.fetchPriority} alt = {""} />
        <Image style = {{ position: "absolute", height: "auto", ...props.style }} className = {`hidden dark:block left-[-34%] lg:left-0 w-[168%] lg:w-full ${props.className}`} height = {props.height} width = {props.width} src = {`/bg-dark-${props.src}`} sizes = {props.sizes} loading = {props.loading} fetchPriority = {props.fetchPriority} alt = {""} />
    </>
}