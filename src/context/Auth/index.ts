import { createContext, useContext, useState } from 'react';

interface AuthLoggedContextType {
    authLogged: boolean | undefined;
    setAuthLogged: (value: boolean | undefined) => void;
}

const AuthLoggedContext = createContext<AuthLoggedContextType>({
    authLogged: undefined,
    setAuthLogged: () => {}
});

export const useAuthLogged = () => useContext(AuthLoggedContext);

export function AuthLoggedProvider({ children }){
    const [authLogged, setAuthLogged] = useState<boolean>();
    return(
        <AuthLoggedContext.Provider value={{ authLogged, setAuthLogged }}>
            {children}
        </AuthLoggedContext.Provider>
    )
};
