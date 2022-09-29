
import { createContext, useState } from 'react'

export const AuthContextUser = createContext()

export const AuthContextUserProvider = ({children}) => {
    const [auth, setAuth] = useState(null)

    return (
        <AuthContextUserProvider value={{auth, setAuth}}>
            {children}
        </AuthContextUserProvider>
    )
}