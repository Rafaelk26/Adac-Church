import { useState } from 'react';

// Components
import { Input } from '../../../Input';
import { Button } from '../../../Button/Login';

export function Form() {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    function toggleShowPassword() {
        setShowPassword((prevState) => !prevState);
    }

    return (
        <form 
        method='post'
        className='w-full bg-transparent relative z-10 outline outline-2 outline-white 
        flex flex-col items-center pt-4 rounded-xl px-4 gap-6'>
            <h1 className='bg-transparent font-medium quicksand text-white text-5xl mt-4'>Login</h1>

            <Input 
            type='text' 
            name='user' 
            name_label='Matrícula' />

            <Input
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