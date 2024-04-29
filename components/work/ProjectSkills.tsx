export default function ProjectSkills(props: { skills: string[] }) {
    return props.skills.map(function(skill) {
        return <li key = {skill} style = {{ listStyleType: "none", borderRadius: "21px", padding: "10px 17px", fontSize: "18px", whiteSpace: "nowrap" }} className = {"bg-accentregular text-gray11"}>
            {skill}
        </li>
    })
}