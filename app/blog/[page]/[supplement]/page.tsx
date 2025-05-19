import { notFound } from "next/navigation"
import markdownPages from "@/components/markdown/markdownPages"
import MarkdownPage from "@/components/markdown/MarkdownPage"

export const generateMetadata = async function(props: {
    params: Promise<{ page: string, supplement: string }>
}) {
    const pathnameParams = await props.params
    return markdownPages[pathnameParams.page]?.article?.supplements[pathnameParams.supplement]
}

export default async function Page(props: {
    params: Promise<{ page: string, supplement: string }>
}) {
    const pathnameParams = await props.params

    if (markdownPages[pathnameParams.page]?.article?.supplements[pathnameParams.supplement]) {
        return <MarkdownPage page = {pathnameParams.page} supplement = {pathnameParams.supplement} />
    }

    notFound()
}