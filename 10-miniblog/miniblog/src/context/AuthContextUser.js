
import { createContext, useState } from 'react'

export const AuthContextUser = createContext()

export const AuthContextUserProvider = ({children}) => {
    const [userAuth, setUserAuth] = useState(null)

    return (
        <AuthContextUser.Provider value={{userAuth, setUserAuth}}>
            {children}
        </AuthContextUser.Provider>
    )
}