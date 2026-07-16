import React, { createContext, useState } from "react";
import { login, register, logout } from "./services/auth.api"

export const AuthContext = createContext()

export const AuthProvide = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    // const handleLogin = async (credentials) => { }

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, handleLogin }} >
            {children}
        </AuthContext.Provider>
    )
}