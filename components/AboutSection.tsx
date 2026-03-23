export default function AboutSection(props: { title: string, children: React.ReactNode }) {
    return <div style = {{ paddingTop: "56px", display: "flex", columnGap: "56px", rowGap: "8px" }} className = {"flex-col lg:flex-row"}>
        <h2 style = {{ margin: 0, minWidth: "200px", fontSize: "26px", fontWeight: 600, fontFamily: "Rubik" }} className = {"text-gray0 dark:text-gray11"}>
            {props.title}
        </h2>
        <p style = {{ margin: 0, lineHeight: 1.5 }} className = {"lg:text-xl"}>
            {props.children}
        </p>
    </div>
}