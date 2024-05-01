import AboutHeader from "@/components/about/AboutHeader"
import AboutSection from "@/components/about/AboutSection"

export const metadata = { title: "Austin Henrie | About", description: "About Austin Henrie" }

export default function Page() {
    return <div style = {{ padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <AboutHeader />
        <main style = {{ maxWidth: "1280px" }}>
            <AboutSection title = {"Background"}>
                {"I'm a full stack web developer here to change the world. Most of my experience is in the JavaScript ecosystem, particularly React, but I'm handy with Python as well, among other technologies. I'm always hungry for more tech to learn and more opportunities to build amazing things that improve people's lives. I'm passionate about simplicity, performance, and accessibility, and sometimes about science fiction, altruism, and puzzle games. If you're grappling with a complex problem, I'd welcome the opportunity for an engaging conversation."}
            </AboutSection>
            <AboutSection title = {"Education"}>
                {"Though most of my skills were picked up on the job or were self-taught, I graduated from Devmountain's excellent web development program in July 2023."}
            </AboutSection>
        </main>
    </div>
}