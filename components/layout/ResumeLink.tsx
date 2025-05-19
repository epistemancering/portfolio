import { usePathname } from "next/navigation"
import GradientLink from "@/components/GradientLink"

export default function ResumeLink() {
    if (!usePathname().startsWith("/blog/")) {
        return <GradientLink label = {"View My Resume"} href = {"/resume.pdf"} target = {"_blank"}>
            🗏
        </GradientLink>
    }
}