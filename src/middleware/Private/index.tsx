import { Navigate } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';
import { useAuth } from '../../context/Auth';

interface PrivateProps {
    children: ReactNode;
}

export function Private({ children }: PrivateProps) {
    const { authLogged } = useAuth();

    useEffect(() => {
        
    }, [authLogged]);

    if (!authLogged) {
        return <Navigate to="/adac/login" />;
    }

    return children;
}
