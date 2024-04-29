// Import for development
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    type?: string;
    name: string;
    name_label: string;
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions;
}

export function Input({type, name, name_label, error, register, rules, ...rest}:inputProps){
    return(
        <>
            <div className="bg-transparent grid w-full px-1 items-center gap-1.5">
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

export function Textarea({name, name_label, error, register, rules}:inputProps){
    return(
        <>
            <div className="bg-transparent grid w-full px-1 items-center gap-1.5">
                <label
                className="bg-transparent w-max text-md font-normal quicksand leading-none 
                peer-disabled:cursor-not-allowed 
                peer-disabled:opacity-70">{name_label}</label>
                
                <textarea
                {...register(name, rules)}
                name={name}
                cols={30}
                rows={30}
                className="flex w-full h-40 rounded-md border border-input 
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
                ></textarea>
                {error && <p className='my-1 text-red-500'>{error}</p>}
            </div>
        </>
    )
}

export function InputFile({type, name, error, register, rules, ...rest}:inputProps){
    return(
        <>
            <div className="bg-transparent grid w-full px-1 items-center gap-1.5">
                <input
                {...register(name, rules)}
                {...rest}
                name={name}
                type={type}
                className="opacity-0 flex h-36 w-full rounded-md border border-input cursor-pointer 
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