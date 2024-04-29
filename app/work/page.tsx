import WorkPage from "@/components/work/WorkPage"

export const metadata = { title: "Austin Henrie | My Work", description: "Learn about Austin Henrie's projects" }

export default function Page() {
    return <div style = {{ paddingRight: "24px", paddingLeft: "24px", display: "flex", justifyContent: "center" }}>
        <div style = {{ width: "1280px" }}>
            <WorkPage />
        </div>
    </div>
}