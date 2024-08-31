import { createContext, useState } from "react"

export const ShowSidebarContext = createContext()

const ShowContextProvider = ({ children }) => {
    const [ShowContext, setShowContext] = useState(false)

    return <ShowSidebarContext.Provider value={{ ShowContext, setShowContext }}>
        {children}
    </ShowSidebarContext.Provider>
}

export default ShowContextProvider