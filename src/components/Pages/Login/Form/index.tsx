// Import for development
import { useState, useEffect, FormEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

// Connection with database
import { db } from '../../../../services/server';

// Components
import { Input } from '../../../Input';
import { Button } from '../../../Button/Login';

// Context
import { useAuth } from '../../../../context/Auth';


interface UserAdminProps{
    matricula: string;
    password: string;
}

export function Form() {

    // Estado do context
    const { setAuthLogged } = useAuth();

    // Dados do formulário
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [matricula, setMatricula] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // Dados do firebase
    const [user, setUser] = useState<UserAdminProps[]>([]);

    const nav = useNavigate()

    useEffect(() => {
        const fetchAdmin = async () => {
            const adminCollection = collection(db, 'Admin');
            const adminSnapshot = await getDocs(adminCollection);
            const adminData = adminSnapshot.docs.map(doc => doc.data() as UserAdminProps);
            setUser(adminData);
        };

        fetchAdmin();
    }, []);
    

    const signAdmin = (matricula: string, password: string) => {
        if (user.length >= 1) {
            if (user[0]?.matricula === matricula && user[0]?.password === password) {
                toast.success('Usuário Logado!');
                setAuthLogged(true);
                nav('/adac/admin/');
                return;
            } else {
                toast.error('Matricula ou senha incorreta(s).');
                setAuthLogged(false);
            }
        }
    }

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        signAdmin(matricula, password);
    }

    function toggleShowPassword() {
        setShowPassword((prevState) => !prevState);
    }

    return (
        <form
        onSubmit={handleSubmit}
        method='post'
        className='w-full bg-transparent relative z-10 outline outline-2 outline-white 
        flex flex-col items-center pt-4 rounded-xl px-4 gap-6'>
            <h1 className='bg-transparent font-medium quicksand text-white text-5xl mt-4'>Login</h1>

            <Input
            onChange={(e)=> setMatricula(e.target.value)}
            type='text' 
            name='matricula' 
            name_label='Matrícula' />

            <Input
            onChange={(e)=> setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            name='password'
            name_label='Senha'
            />

            <div 
            className='bg-transparent w-full flex items-center gap-2'>
                <input
                type="checkbox"
                className='w-5 h-5'
                name="showPassword"
                checked={showPassword}
                onChange={toggleShowPassword}
                id="showPassword"
                />
                <label htmlFor="showPassword" className='bg-transparent text-white font-medium inter'>
                    Mostrar Senha
                </label>
            </div>

            <Button
            type='submit'
            name='Entrar' />
            
            <a
            className='bg-transparent mb-2 transition-all 
            hover:text-blue-300 hover:underline' 
            href="/adac/checkin/senha"
            >Esqueci minha senha</a>
        </form>
    );
}