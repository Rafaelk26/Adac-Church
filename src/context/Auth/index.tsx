import { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextData {
    authLogged: boolean;
    setAuthLogged: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextData>({
    authLogged: false,
    setAuthLogged: () => {},
});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [authLogged, setAuthLoggedState] = useState<boolean>(() => {
        const storedAuth = sessionStorage.getItem('authLogged');
        if (storedAuth !== null) {
            return JSON.parse(storedAuth);
        }
        return false;
    });

    const setAuthLogged = (value: boolean) => {
        setAuthLoggedState(value);
        sessionStorage.setItem('authLogged', JSON.stringify(value));
    };

    useEffect(() => {
        
    }, [authLogged]);

    return (
        <AuthContext.Provider value={{ authLogged, setAuthLogged }}>
            {children}
        </AuthContext.Provider>
    );
}
