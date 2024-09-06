import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react";



export const AuthContext = createContext({});

interface props extends PropsWithChildren {

}

interface AuthProps {
    isAuthenticated: boolean
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>
}

export function AuthContextProvider({ children }: props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>)
}


export default function useAuthContext()  {
    return useContext(AuthContext) as AuthProps;
}