import SvgWrapper from "@/components/SvgWrapper"

export default function ProjectIcon(props: { label: string }) {
    return {
        "Github Repo": "</>",
        "Demo": <SvgWrapper style = {{ height: "100%" }}>
            <circle cx = {68} cy = {188} r = {28} fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} />
            <path fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} d = {"m40 72 40 40m0-40-40 40m136 56 40 40m0-40-40 40M136 80V40h40"} />
            <path fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} d = {"m136 40 16 16c40 40 8 88-24 96"} />
        </SvgWrapper>,
        "Hosted Site": <SvgWrapper style = {{ height: "100%" }}>
            <path fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} d = {"M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6m124.5-56.5L128 173.3 82.7 128l67.9-67.9C176.3 34.4 202 34.7 213 36.3a7.8 7.8 0 0 1 6.7 6.7c1.6 11 1.9 36.7-23.8 62.4Z"} />
            <path fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} d = {"M184.6 116.7v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9m11.3-101.9H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4"} />
        </SvgWrapper>
    }[props.label]
}