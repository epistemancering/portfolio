export default function SvgWrapper(props: {
    style: { [key: string]: any },
    children: React.ReactNode,
    className?: string,
    onClick?: React.MouseEventHandler
}) {
    return <svg className = {props.className} style = {{ display: "block", ...props.style}} viewBox = {"0 0 256 256"} stroke = {"currentColor"} fill = {"currentColor"} onClick = {props.onClick}>
        <g>
            {props.children}
        </g>
    </svg>
}