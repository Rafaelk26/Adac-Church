// Importar RouterPorvider para administrar as nossas rotas assim que acessarmos.
import { RouterProvider } from 'react-router-dom';

// Importar nossas rotas para serem admonistradas.
import { router } from './routes';

function App() {
  return(
    <>
      <RouterProvider router={router} />
    </>
  )  
}

export default App
