import { cookies } from "next/headers"
import font from "next/font/local"
import "@/css/tailwind.css"
import LayoutBody from "@/components/layout/LayoutBody"
import BgImage from "@/components/BgImage"

export const metadata = { metadataBase: "https://austinhenrie.com" }
const Public = font({ src: "../css/Public.woff2" })
const Rubik = font({ src: "../css/Rubik.woff2" })

export default async function Layout(props: { children: React.ReactNode }) {
    return <html lang = {"en"} data-scheme = {(await cookies()).get("scheme")?.value}>
        <head>
            <meta httpEquiv = {"content-security-policy"} content = {"default-src; form-action; img-src 'self'; style-src 'unsafe-inline'; font-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self'"} />
            <link rel = {"icon"} href = {"/icon.svg"} />
        </head>
        <body style = {{ margin: 0 }} className = {"bg-gray11 dark:bg-gray0 text-gray3 dark:text-gray8"}>
            <div style = {{ minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "Public", position: "relative", overflowX: "hidden" }}>
                <LayoutBody>
                    {props.children}
                </LayoutBody>
                <BgImage style = {{ zIndex: -2, top: 0 }} className = {""} height = {1280} width = {2880} src = {"main-1440w.jpg"} sizes = {"(max-width: 1023px) 168vw"} loading = {"eager"} fetchPriority = {"high"} />
                <BgImage style = {{ zIndex: -2, top: 0 }} className = {"mix-blend-overlay dark:mix-blend-normal"} height = {640} width = {1440} src = {"main.svg"} loading = {"eager"} fetchPriority = {"high"} />
                <BgImage style = {{ zIndex: -1, bottom: 0 }} className = {"mix-blend-darken dark:mix-blend-lighten"} height = {1280} width = {2880} src = {"footer-1440w.jpg"} sizes = {"(max-width: 1023px) 168vw"} />
                <div style = {{ position: "absolute", zIndex: -1, top: 0, height: "100%", width: "100%", mixBlendMode: "overlay", backgroundImage: "url(/noise.webp)" }} />
            </div>
        </body>
    </html>
}