// Aqui é a importação de arquivos que vamos utilizar nas rotas
// Importando páginas

// Página Principal - (Home)
import { Home } from './pages/Home';
// Página de Exibição dos Eventos
import { Eventos } from './pages/Eventos';
// Página de Detalhe dos Eventos
import { DetalhesEvento } from './pages/Eventos/Detail';
// Página de Exibição das Células
import { Celulas } from './pages/Células';
// Página de Detalhe das Células
import { DetalhesCelula } from './pages/Células/Detail';
// Página da História da Igreja
import { Igreja } from './pages/Igreja';
// Página de Login
import { Login } from './pages/Login';
// Administrador - Criar
import { CriarCelulas } from './pages/Administrador/Create/Células/index';
import { CriarEventos } from './pages/Administrador/Create/Eventos/index';
import { CriarMinistracao } from './pages/Administrador/Create/Ministração/index';
// Administrador - Editar
import { EditCelulas } from './pages/Administrador/Edit/Células/index';
import { EditEventos } from './pages/Administrador/Edit/Eventos/index';
// Administrador - Deletar
import { DeleteCelulas } from './pages/Administrador/Delete/Células/index';
import { DeleteEventos } from './pages/Administrador/Delete/Eventos/index';
import { DeleteMinistracao } from './pages/Administrador/Delete/Ministração/index';

// Importando bibliotecas para desenvolvimento do projeto
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        children: [
            {
                element: <Home />,
                path: "/"
            }, 
            {
                element: <Eventos />,
                path: "/adac/eventos"
            },
            {
                element: <DetalhesEvento />,
                path: "/adac/eventos/detalhes/:id"
            },
            {
                element: <Celulas />,
                path: "/adac/celulas"
            },
            {
                element: <DetalhesCelula />,
                path: "/adac/celulas/detalhes/:id"
            },
            {
                element: <Igreja />,
                path: "/adac/igreja"
            },
            {
                element: <Login />,
                path: "/adac/login"
            }, 
            {
                element: <CriarCelulas />,
                path: "/adac/criar/celulas"
            },
            {
                element: <CriarEventos />,
                path: "/adac/criar/eventos"
            }, 
            {
                element: <CriarMinistracao />,
                path: "/adac/criar/ministracao"
            }, 
            {
                element: <DeleteCelulas />,
                path: "/adac/deletar/celulas"
            }, 
            {
                element: <DeleteEventos />,
                path: "/adac/deletar/eventos"
            }, 
            {
                element: <DeleteMinistracao />,
                path: "/adac/deletar/ministracao"
            }, 
            {
                element: <EditCelulas />,
                path: "/adac/editar/celulas"
            }, 
            {
                element: <EditEventos />,
                path: "/adac/editar/eventos"
            },
        ]
    }
])

export { router };