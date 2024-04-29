import "@/css/layout.css"
import RequireClient from "@/components/layout/RequireClient"

export default function Layout(props: { children: React.ReactNode }) {
  return <html lang = {"en"}>
    <head>
      <link rel = {"icon"} href = {"/icon.svg"} />
    </head>
    <RequireClient>
      {props.children}
    </RequireClient>
  </html>
}