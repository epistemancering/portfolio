import WorkLinks from "@/components/work/WorkLinks"

export const metadata = { title: "Austin Henrie | My Work", description: "Learn about Austin Henrie's projects" }

export default function Page() {
    return <div style = {{ paddingRight: "24px", paddingLeft: "24px", display: "flex", justifyContent: "center" }}>
        <div style = {{ width: "1280px" }}>
            <h1 style = {{ margin: "0 0 32px", fontWeight: 600, fontFamily: "Rubik" }} className = {"text-center lg:text-left text-[42px] lg:text-7xl text-gray0 dark:text-gray11"}>
                My Work
            </h1>
            <main className = {"lg:pb-[120px] gap-4 lg:gap-16"} style = {{ display: "flex", flexWrap: "wrap" }}>
                <WorkLinks />
            </main>
        </div>
    </div>
}