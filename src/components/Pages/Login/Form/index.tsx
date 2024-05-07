import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection } from 'firebase/firestore';
import bcrypt from 'bcryptjs';

// Connection
import { db } from '../../../../services/server';

// Components
import { Input } from '../../../Input';
import { Button } from '../../../Button/Login';


export function Form() {

    const nav = useNavigate()

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [matricula, setMatricula] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // Awui deverá assim que acessar o site fazer a conexão com o banco para trazer os dados
    // do usuário que inserir o user.
    


    function handleSubmit(e: FormEvent){
        e.preventDefault()
        cadastrarAdmin(matricula, password);
    }

    function toggleShowPassword() {
        setShowPassword((prevState) => !prevState);
    }

    // Função para cadastrar o usuário administrador com a senha criptografada
async function cadastrarAdmin(matricula: string, senha: string) {
    try {
        // Criptografa a senha usando bcrypt
        const hashedPassword = await bcrypt.hash(senha, 10);

        // Salva o usuário administrador no Firestore
        await db.collection('Admin').doc().set({
            matricula,
            password: hashedPassword,
        });

        console.log('Usuário administrador cadastrado com sucesso!');
    } catch (error) {
        throw new Error('Erro ao cadastrar usuário administrador: ' + error.message);
    }
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