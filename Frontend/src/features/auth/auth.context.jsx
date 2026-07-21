import React, { createContext, useState, useEffect } from "react";
import { login, register, logout } from "./services/auth.api"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const getAndSetUser = async()=>{
            const data = await getMe()
            setUser(data.user)
            setLoading(false)
        }

        getAndSetUser()
        
    },[])

    // const handleLogin = async (credentials) => { }

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }} >
            {children}
        </AuthContext.Provider>
    )
}