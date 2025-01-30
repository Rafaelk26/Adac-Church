// Development
import { Link } from 'react-router-dom';
import { Card } from '../CardSlider';

// Images
import Rede_Alcance from '../../../../assets/Ministerios/Rede_Alcance.jpg';
import Rede_Freedom from '../../../../assets/Ministerios/Rede_Freedom.jpg';
import Rede_Click from '../../../../assets/Ministerios/Rede_Click.jpg';
import Convergir from '../../../../assets/Ministerios/Convergir.jpg';
import CFL from '../../../../assets/Ministerios/CFL.jpg';
import Flow_Fire from '../../../../assets/Ministerios/Flow_Fire.jpg';
import Grupo_Louvor from '../../../../assets/Ministerios/Grupo_de_Louvor.jpg';
import Imersao from '../../../../assets/Ministerios/Imersão.jpg';
import Influence from '../../../../assets/Ministerios/Influence.jpg';
import Midia from '../../../../assets/Ministerios/Midia_ADAC.jpg';
import Rede_Plus from '../../../../assets/Ministerios/Rede_Plus.jpg';
import Aviva from '../../../../assets/Ministerios/Aviva.jpg';
import Plenitude from '../../../../assets/Ministerios/Plenitude.jpg';
import Rede_Power_Pink from '../../../../assets/Ministerios/Rede Power Pink.jpg';
import Rede_Kids from '../../../../assets/Ministerios/Rede_Kids.jpg';
import Forja_de_Teleios from '../../../../assets/Ministerios/Forja_de_Teleios.jpg';

// CSS
import './index.css';

export function CardSlide() {
    const cards = [
        { foto: Rede_Alcance, nameAlt: 'Rede Alcance' },
        { foto: Rede_Freedom, nameAlt: 'Rede Freedom' },
        { foto: Rede_Click, nameAlt: 'Rede Click' },
        { foto: Convergir, nameAlt: 'Convergir' },
        { foto: CFL, nameAlt: 'CFL' },
        { foto: Flow_Fire, nameAlt: 'Flow Fire' },
        { foto: Grupo_Louvor, nameAlt: 'Grupo de Louvor' },
        { foto: Imersao, nameAlt: 'Imersão' },
        { foto: Influence, nameAlt: 'Rede Influence' },
        { foto: Midia, nameAlt: 'Mídia ADAC' },
        { foto: Rede_Plus, nameAlt: 'Rede Plus' },
        { foto: Aviva, nameAlt: 'Aviva' },
        { foto: Plenitude, nameAlt: 'Plenitude' },
        { foto: Rede_Power_Pink, nameAlt: 'Rede Power Pink' },
        { foto: Rede_Kids, nameAlt: 'Rede Kids' },
        { foto: Forja_de_Teleios, nameAlt: 'Forja de Teleios' },
    ];

    return (
        <>
            <main className="w-full mt-14 mb-56 
      sm:mb-56
      md:max-w-6xl md:mx-auto md:mt-20 md:mb-0">
                <div className="w-full flex flex-col">
                    <h1 className='text-5xl quicksand text-center md:text-start'>Ministérios</h1>
                    <h2 className='text-md inter font-medium mt-3 text-center md:max-w-64 md:text-start'>
                        Fique ligado em todos os ministérios de nossa igreja!
                    </h2>
                </div>

                <Link
                    className='cursor-pointer'
                    to={'/adac/ministerios/'}>
                    <div className='w-full overflow-hidden'>
                        <div id="card-slider" className='flex animate-slide gap-5'>
                            {cards.concat(cards).map((card, index) => (
                                <Card key={index} foto={card.foto} nameAlt={card.nameAlt} />
                            ))}
                        </div>
                    </div>
                </Link>
            </main>
        </>
    );
}
