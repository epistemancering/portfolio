"use client"
import { useContext } from "react"
import Image from "next/image"
import darkContext from "@/components/darkContext"
import GradientLink from "@/components/GradientLink"
import HomeSkill from "@/components/home/HomeSkill"
import WorkLinks from "@/components/work/WorkLinks"

export default function HomePage() {
    const getDark = useContext(darkContext)[0]

    return <>
        <header className = {"px-6 lg:px-16 flex-col lg:flex-row text-center lg:text-left"} style = {{ maxWidth: "1200px", display: "flex", justifyContent: "space-between", columnGap: "60px", alignItems: "center", rowGap: "32px" }}>
            <div className = {"lg:w-3/5"}>
                <h1 style = {{ margin: 0, lineHeight: 1.1, fontWeight: 600, fontFamily: "Rubik" }} className = {`text-[42px] lg:text-7xl ${getDark ? "text-gray11" : "text-gray0"}`}>
                    Hello, my name is Austin Henrie
                </h1>
                <p style = {{ margin: "8px 0 0", lineHeight: 1.5 }} className = {"text-xl lg:text-[26px]"}>
                    Full Stack Web Developer
                </p>
            </div>
            <Image className = {`${getDark ? "shadow-whitelarge" : "shadow-darklarge"} rounded-3xl lg:rounded-[72px] w-full lg:w-2/5 max-w-[480px] lg:max-w-[456px] aspect-[1.25] lg:aspect-auto object-top lg:object-center`} style = {{ height: "auto", objectFit: "cover" }} height = {640} width = {480} src = {"/portrait.png"} priority alt = {"Austin Henrie"} />
        </header>
        <ul className = {`mt-8 lg:mt-20 mb-20 lg:mb-48 rounded-xl lg:rounded-3xl ${getDark ? "shadow-whitesmall bg-darkfaint4 text-gray2" : "shadow-darksmall bg-whitefaint4 text-gray9"} p-6 lg:p-10 gap-2.5 lg:gap-y-[51px] lg:gap-x-24`} style = {{ marginRight: "24px", marginLeft: "24px", borderStyle: "solid", borderWidth: "1px", maxWidth: "1198px", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            <HomeSkill src = {"javascript.svg"} name = {"JavaScript"} />
            <HomeSkill src = {"python.svg"} name = {"Python"} />
            <HomeSkill src = {"typescript.svg"} name = {"TypeScript"} />
            <HomeSkill src = {"react.svg"} name = {"React"} />
            <HomeSkill src = {"react native.svg"} name = {"React Native"} />
            <HomeSkill src = {"redux.svg"} name = {"Redux"} />
            <HomeSkill src = {"next.js.svg"} name = {"Next.js"} />
            <HomeSkill src = {"remix.svg"} name = {"Remix"} />
            <HomeSkill src = {"streamlit.svg"} name = {"Streamlit"} />
            <HomeSkill src = {"expo.svg"} name = {"Expo"} />
            <HomeSkill src = {"nodejs.svg"} name = {"NodeJS"} />
            <HomeSkill src = {"electron.svg"} name = {"Electron"} />
            <HomeSkill src = {"express.svg"} name = {"Express"} backgroundColor = {"white"} />
            <HomeSkill src = {"nestjs.svg"} name = {"NestJS"} />
            <HomeSkill src = {"postgresql.svg"} name = {"PostgreSQL"} />
            <HomeSkill src = {"prisma.svg"} name = {"Prisma"} />
            <HomeSkill src = {"argon2.svg"} name = {"Argon2"} />
            <HomeSkill src = {"aws.png"} name = {"AWS"} />
            <HomeSkill src = {"google cloud.png"} name = {"Google Cloud"} />
            <HomeSkill src = {"docker.svg"} name = {"Docker"} />
            <HomeSkill src = {"raspberry pi.svg"} name = {"Raspberry Pi"} />
            <HomeSkill src = {"colaboratory.svg"} name = {"Colaboratory"} />
            <HomeSkill src = {"css.svg"} name = {"CSS"} />
            <HomeSkill src = {"tailwind.svg"} name = {"Tailwind"} />
            <HomeSkill src = {"git.svg"} name = {"Git"} />
            <HomeSkill src = {"github.svg"} name = {"Github"} />
            <HomeSkill src = {"postman.svg"} name = {"Postman"} />
            <HomeSkill src = {"html5.svg"} name = {"HTML5"} />
            <HomeSkill src = {"axios.png"} name = {"axios"} />
            <HomeSkill src = {"chakra.svg"} name = {"Chakra"} />
            <HomeSkill src = {"numpy.svg"} name = {"NumPy"} />
            <HomeSkill src = {"pandas.svg"} name = {"pandas"} />
            <HomeSkill src = {"pytorch.svg"} name = {"PyTorch"} />
            <HomeSkill src = {"transformers.svg"} name = {"Transformers"} />
            <HomeSkill src = {"pillow.png"} name = {"Pillow"} />
        </ul>
        <header className = {"pb-8 lg:pb-20"} style = {{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
            <Image className = {"left-[-34%] lg:left-0 w-[168%] lg:w-full"} style = {{ position: "absolute", zIndex: -1, height: "auto", transform: "translateY(-75%)", mixBlendMode: `${getDark ? "light" : "dark"}en` }} height = {1280} width = {2880} src = {`/bg-subtle-2-${localStorage.colors}-1440w.jpg`} sizes = {"(max-width: 1023px) 168vw"} alt = {""} />
            <div style = {{ paddingRight: "24px", paddingLeft: "24px", width: "1280px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style = {{ margin: 0, fontWeight: 600, fontFamily: "Rubik" }} className = {`text-[32px] lg:text-[56px] ${getDark ? "text-gray9" : "text-gray2"}`}>
                    Selected Work
                </h2>
                <GradientLink label = {"View More"} href = {"/work"}>
                    🡢
                </GradientLink>
            </div>
        </header>
        <main className = {"lg:pb-[120px] gap-4 lg:gap-16"} style = {{ paddingRight: "24px", paddingLeft: "24px", maxWidth: "1280px", display: "flex", flexWrap: "wrap" }}>
            <WorkLinks rows = {2} />
        </main>
    </>
}