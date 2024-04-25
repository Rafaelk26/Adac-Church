// Importando ReactNode para acrescentar no children
import { ReactNode } from "react"

interface containerProps{
    children: ReactNode
}

import '../index.css'

export function ContainerMainDetails({ children }: containerProps) {
    return (
        <div id="container_width" className="wrapper mx-4 sm:mx-6 md:mx-8 lg:10">
            {children}
        </div>
    )
}
