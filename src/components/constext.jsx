import { createContext, useMemo, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState(null)

    const value = useMemo(() => ({
        selectedItem,
        setSelectedItem
    }), [selectedItem])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
export { UserContext }