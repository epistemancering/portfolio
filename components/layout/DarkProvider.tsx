import { useState } from "react"
import darkContext from "@/components/darkContext"
import LayoutBody from "@/components/layout/LayoutBody"

export default function DarkProvider(props: { children: React.ReactNode }) {
    return <darkContext.Provider value = {useState(localStorage.colors === "dark")}>
        <LayoutBody>
            {props.children}
        </LayoutBody>
    </darkContext.Provider>
}