// Import for development
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

// CSS
import '../index.module.css'

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    type: string;
    name: string;
    name_label: string;
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions;
}

export function Input({type, name, name_label, error, register, rules, ...rest}:inputProps){
    return(
        <>
            <div className="bg-transparent grid w-full max-w-sm items-center gap-1.5">
                <label
                className="bg-transparent w-max text-md font-normal quicksand leading-none 
                peer-disabled:cursor-not-allowed 
                peer-disabled:opacity-70">{name_label}</label>
                
                <input
                {...register(name, rules)}
                {...rest}
                name={name}
                type={type}
                className="flex h-11 w-full rounded-md border border-input 
                bg-transparent px-3 py-2 text-md ring-offset-background transition-all 
                file:border-0 
                file:bg-transparent 
                file:text-sm 
                file:font-medium 
                placeholder:text-muted-foreground 
                focus-visible:outline-none 
                focus-visible:ring-2 
                focus-visible:ring-ring 
                focus-visible:ring-offset-2 
                disabled:cursor-not-allowed 
                disabled:opacity-50"
                />
                {error && <p className='my-1 text-red-500'>{error}</p>}
            </div>
        </>
    )
}