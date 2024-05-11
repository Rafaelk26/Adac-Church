// Import from development;
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useAuth }  from '../../context/Auth';

interface PrivateProps{
    children: ReactNode;
}

export function Private({ children }: PrivateProps){
    const { authLogged } = useAuth();

    if(authLogged === false){
        return <Navigate to="/adac/login" />
    }

    return children;
}