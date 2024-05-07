import { useState, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';

// Connection
import { db } from '../../../../services/server';

// Components
import { Input } from '../../../Input';
import { Button } from '../../../Button/Login';

interface UserAdminProps{
    matricula: string;
    password: string;
}


export function Form() {

    const nav = useNavigate()

    // Dados do formulário
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [matricula, setMatricula] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // Dados do firebase
    const [user, setUser] = useState<UserAdminProps[]>([]);


    useEffect(() => {
        const fetchAdmin = async () => {
            const adminCollection = collection(db, 'Admin');
            const adminSnapshot = await getDocs(adminCollection);
            const adminData = adminSnapshot.docs.map(doc => doc.data() as UserAdminProps);
            console.log(adminData);
            setUser(adminData);
            // Test
            console.log(user);
        };

        fetchAdmin();
    }, []);

    // Aqui deverá assim que acessar o site fazer a conexão com o banco para trazer os dados
    // do usuário que inserir o user.
    const signAdmin = (matricula: string, password: string) => {
        console.log(matricula)
        console.log(password)

        setMatricula('')
        setPassword('')
    }


    function handleSubmit(e: FormEvent){
        e.preventDefault()
        // Criptography password
        const criptPass = password
        // Send password criptography for firebase database.
        signAdmin('adac2024', criptPass)
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
            value={matricula}
            onChange={(e)=> setMatricula(e.target.value)}
            type='text' 
            name='matricula' 
            name_label='Matrícula' />

            <Input
            value={password}
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