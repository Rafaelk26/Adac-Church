// Import for development
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    type: string;
    name: string;
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions;
}

export function InputEvent({type, name, error, register, rules, ...rest}:inputProps){
    return(
        <>  
            <div className='w-full max-w-72 h-full rounded-lg 
            outline outline-2 outline-white 
            md:max-w-full md:w-full'>
                <input
                {...register(name, rules)}
                {...rest}
                name={name}
                type={type}
                className='opacity-0 w-full h-full cursor-pointer' 
                />
                {error && <p className='my-1 text-red-500'>{error}</p>}
            </div>
            
        </>
    )
}

export function TextareaEvent({name, register, rules, error }:inputProps){
    return(
        <>
            <textarea
            {...register(name, rules)}
            className='w-full max-w-72 md:max-w-full p-2
            rounded-lg border border-input transition-all
            file:border-0 
            file:bg-transparent 
            file:text-sm 
            file:font-normal 
            placeholder:text-muted-foreground 
            focus-visible:outline-none 
            focus-visible:ring-2 
            focus-visible:ring-ring 
            focus-visible:ring-offset-2 
            disabled:cursor-not-allowed 
            disabled:opacity-50' 
            name={name} 
            cols={30} 
            rows={10}></textarea>
            {error && <p className='my-1 text-red-500'>{error}</p>}
        </>
    )
}