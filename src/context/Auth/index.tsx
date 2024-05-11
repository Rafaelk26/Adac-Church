import { createContext, useContext, useState } from 'react';

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
    const [authLogged, setAuthLogged] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ authLogged, setAuthLogged }}>
            {children}
        </AuthContext.Provider>
    );
}
