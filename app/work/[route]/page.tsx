import { notFound } from "next/navigation"
import projectRoutes from "@/components/work/projectRoutes"
import ProjectPage from "@/components/work/ProjectPage"

export const generateMetadata = function(props: {
    params: { route: string }
}) {
    return projectRoutes[props.params.route]
}

export default function Page(props: {
    params: { route: string }
}) {
    if (projectRoutes[props.params.route]) {
        return <ProjectPage route = {props.params.route} />
    }

    notFound()
}