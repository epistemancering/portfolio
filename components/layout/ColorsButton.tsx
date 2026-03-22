import SvgWrapper from "@/components/SvgWrapper"

export default function ColorsButton() {
    const onClick = function() {
        let scheme
        if ((document.cookie || window.matchMedia("(prefers-color-scheme: dark)").matches) && document.documentElement.getAttribute("data-scheme") !== "light") {
            scheme = "light"
        } else {
            scheme = "dark"
        }
        document.documentElement.setAttribute("data-scheme", scheme)
        document.cookie = `scheme=${scheme}; path=/; max-age=40000000`
    }

    return <button className = {"border-accentfaint bg-gray11 dark:bg-gray0"} style = {{ borderRadius: "32px", borderStyle: "solid", borderWidth: "1px", padding: 0, display: "flex", gap: "2px", cursor: "pointer" }} onClick = {onClick} aria-label = {"change colors"}>
        <SvgWrapper style = {{ zIndex: 1, padding: "7px", width: "16px", transitionDuration: "200ms" }} className = {"text-gray11 dark:text-accentfaint"}>
            <circle cx = {128} cy = {128} r = {60} fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} />
            <path fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} d = {"M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"} />
        </SvgWrapper>
        <SvgWrapper style = {{ zIndex: 1, padding: "7px", width: "16px", transitionDuration: "200ms" }} className = {"text-accentfaint dark:text-gray11"}>
            <path fill = {"none"} strokeLinecap = {"round"} strokeLinejoin = {"round"} strokeWidth = {16} d = {"M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"} />
        </SvgWrapper>
    </button>
}