import ImageContent from "@/components/markdown/ImageContent"

export default function MarkdownImage(props: { page: string, supplement?: string }) {
    if (!props.supplement) {
        return <ImageContent page = {props.page} supplement = {props.supplement} />
    }
}