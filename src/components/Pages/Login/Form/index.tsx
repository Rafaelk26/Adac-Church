import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { Input } from '../../../Input';
import { Button } from '../../../Button/Login';

interface userProps{
    user: string;
    password: string;
}



export function Form() {

    const nav = useNavigate()

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [user, setUser] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // Awui deverá assim que acessar o site fazer a conexão com o banco para trazer os dados
    // do usuário que inserir o user.
    
    const obj:userProps = {
        user: 'adac2024',
        password: '123456789'
    }

    function handleSubmit(e: FormEvent){
        e.preventDefault()
        if(user !== obj.user){
            alert('Nome ou Senha incorreta!')
            setUser("")
            setPassword("")
            return;
        }
        if(password !== obj.password){
            alert('Nome ou Senha incorreta!')
            setUser("")
            setPassword("")
            return;
        }
        nav('/adac/admin/')
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
            value={user}
            onChange={(e)=> setUser(e.target.value)}
            type='text' 
            name='user' 
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