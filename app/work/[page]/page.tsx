import { notFound } from "next/navigation"
import markdownPages from "@/components/markdown/markdownPages"
import MarkdownPage from "@/components/markdown/MarkdownPage"

export const generateMetadata = async function(props: {
    params: Promise<{ page: string }>
}) {
    return markdownPages[(await props.params).page]
}

export default async function Page(props: {
    params: Promise<{ page: string }>
}) {
    const paramsRoute = (await props.params).page

    if (markdownPages[paramsRoute]) {
        return <MarkdownPage page = {paramsRoute} />
    }

    notFound()
}