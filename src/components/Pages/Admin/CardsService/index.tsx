import { ReactNode } from "react"

interface cardServiceProps{
    children: ReactNode;
}

export function cardService({ children }: cardServiceProps){
    return(
        <>
            <div>
                {children}
            </div>
        </>
    )
}