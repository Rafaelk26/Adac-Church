// Importando ReactNode para acrescentar no children
import { ReactNode } from "react"

interface containerProps{
    children: ReactNode
}

import '../index.css'

export function ContainerHeader({ children }: containerProps) {
    return (
        <div id="container_width" className="wrapper mx-4 sm:mx-6 md:mx-8 lg:10 absolute z-30 inset-x-0 top-0">
            {children}
        </div>
    )
}
