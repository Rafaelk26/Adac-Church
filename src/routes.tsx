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
// Página de Ministrações do YouTube
import { Ministration } from './pages/Ministration';
// Página de Ministérios da Igreja
import { Ministerios } from './pages/Ministérios';
// Página de Login
import { Login } from './pages/Login';
// Página principal de Admin
import { Administration } from './pages/Admin/Home/index';
// Administrador - Criar
import { CriarCelulas } from './pages/Admin/Create/Células/index';
import { CriarEventos } from './pages/Admin/Create/Eventos/index';
// Administrador - Editar
import { EditCelulas } from './pages/Admin/Edit/Células/index';
import { EditCelulasId } from './pages/Admin/Edit/Células/Célula/index';
import { EditEventos } from './pages/Admin/Edit/Eventos/index';
import { EditarEventosId } from './pages/Admin/Edit/Eventos/Evento/index';
import { EditLideres } from './pages/Admin/Edit/Lideres/index';
import { EditLideresId } from './pages/Admin/Edit/Lideres/Lider/index';
// Administrador - Deletar
import { DeleteCelulas } from './pages/Admin/Delete/Células/index';
import { DeleteEventos } from './pages/Admin/Delete/Eventos/index';
// Administrador - Visualizar
import { ViewCelulas } from './pages/Admin/View/Células/index';
import { ViewEventos } from './pages/Admin/View/Eventos/index';
import { ViewLideres } from './pages/Admin/View/Lideres/index';
// Página de Erro
import { Error } from './pages/Error/index';


// Private
import { Private } from './middleware/Private';

// Importando bibliotecas para desenvolvimento do projeto
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
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
                element: <Ministration />,
                path: "/adac/ministracao"
            },
            {
                element: <Ministerios />,
                path: "/adac/ministerios"
            },
            {
                element: <Login />,
                path: "/adac/login"
            },
            {
                element: <Private>
                            <Administration />
                        </Private>,
                path: '/adac/admin/'
            }, 
            {
                element: <Private>
                            <CriarCelulas />
                        </Private>,
                path: "/adac/admin/criar/celulas"
            },
            {
                element: <Private>
                            <CriarEventos />
                        </Private>,
                path: "/adac/admin/criar/eventos"
            }, 
            {
                element: <Private>
                            <DeleteCelulas />
                        </Private>,
                path: "/adac/admin/deletar/celulas"
            }, 
            {
                element: <Private>
                            <DeleteEventos />
                        </Private>,
                path: "/adac/admin/deletar/eventos"
            },
            {
                element: <Private>
                            <EditCelulas />
                        </Private>,
                path: "/adac/admin/editar/celulas"
            },
            {
                element: <Private>
                            <EditCelulasId />
                        </Private>,
                path: "/adac/admin/editar/celulas/:id"

            }, 
            {
                element: <Private>
                            <EditEventos />
                        </Private>,
                path: "/adac/admin/editar/eventos"
            },
            {
                element: <Private>
                            <EditarEventosId />
                        </Private>,
                path: "/adac/admin/editar/eventos/:id"

            },
            {
                element: <Private>
                            <EditLideres />
                        </Private>,
                path: "/adac/admin/editar/lideres"
            },
            {
                element: <Private>
                            <EditLideresId />
                        </Private>,
                path: "/adac/admin/editar/lideres/:id"
            },
            {
                element: <Private>
                            <ViewCelulas />
                        </Private>,
                path: "/adac/admin/visualizar/celulas"
            },
            {
                element: <Private>
                            <ViewEventos />
                        </Private>,
                path: "/adac/admin/visualizar/eventos"
            },
            {
                element: <Private>
                            <ViewLideres />
                        </Private>,
                path: "/adac/admin/visualizar/lideres"
            },
            {
                element: <Error />,
                path: '*' 
            },
        ]
    },
])