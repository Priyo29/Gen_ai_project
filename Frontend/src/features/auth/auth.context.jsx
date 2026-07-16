import { createContext } from "react";


export const AuthContext = createContext()

export const AuthProvide = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)


    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }} >
            {children}
        </AuthContext.Provider>
    )
}