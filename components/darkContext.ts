import { createContext } from "react"

const darkState: [boolean, Function] = [true, function() {}]

export default createContext(darkState)