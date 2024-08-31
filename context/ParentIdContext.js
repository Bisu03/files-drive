import { createContext, useState } from "react";

export const ParentIdContext = createContext()

const ParentIdProvider = ({ children }) => {
    const [ParentId, setParentId] = useState("")
    return (
        <ParentIdContext.Provider value={{ ParentId, setParentId }} >
            {children}
        </ParentIdContext.Provider>
    )
}


export default ParentIdProvider