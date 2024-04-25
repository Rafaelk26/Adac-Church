// Aqui é a importação de arquivos que vamos utilizar nas rotas
// Importando páginas

// Página Principal - (Home)
import { Home } from './pages/Home';
// Página de Exibição dos Eventos
import { Eventos } from './pages/Eventos';
import { ViewsEventos } from './pages/Eventos/Events';
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
// Página principal de Admin
import { Administration } from './pages/Administrador/Home/index';
// Administrador - Criar
import { CriarCelulas } from './pages/Administrador/Create/Células/index';
import { CriarEventos } from './pages/Administrador/Create/Eventos/index';
// Administrador - Editar
import { EditCelulas } from './pages/Administrador/Edit/Células/index';
import { EditEventos } from './pages/Administrador/Edit/Eventos/index';
import { EditLideres } from './pages/Administrador/Edit/Lideres/index';
// Administrador - Deletar
import { DeleteCelulas } from './pages/Administrador/Delete/Células/index';
import { DeleteEventos } from './pages/Administrador/Delete/Eventos/index';

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
                element: <ViewsEventos />,
                path: "/adac/eventos/show"
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
                element: <Administration />,
                path: '/adac/admin/'
            }, 
            {
                element: <CriarCelulas />,
                path: "/adac/admin/criar/celulas"
            },
            {
                element: <CriarEventos />,
                path: "/adac/admin/criar/eventos"
            }, 
            {
                element: <DeleteCelulas />,
                path: "/adac/admin/deletar/celulas"
            }, 
            {
                element: <DeleteEventos />,
                path: "/adac/admin/deletar/eventos"
            },
            {
                element: <EditCelulas />,
                path: "/adac/admin/editar/celulas"
            }, 
            {
                element: <EditEventos />,
                path: "/adac/admin/editar/eventos"
            },
            {
                element: <EditLideres />,
                path: "/adac/admin/editar/lideres"
            }
        ]
    }
])

export { router };