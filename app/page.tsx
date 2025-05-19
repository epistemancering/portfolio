import HomePage from "@/components/home/HomePage"

export const metadata = {
  title: "Austin Henrie",
  description: "The personal site of Austin Henrie",
  openGraph: { images: "portrait.png" }
}

export default function Page() {
  return <div style = {{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <HomePage />
  </div>
}