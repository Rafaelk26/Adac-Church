// Development
import { useEffect, useState } from 'react';
// Components
import { ContainerHeader } from '../../components/Container/Header';
import { ContainerMain } from '../../components/Container/Main';
import { HeaderPages } from '../../components/Header/Pages';
import { CardMinisterio } from '../../components/Pages/Ministérios/Card';

// Interface
import { CardMinisterioProps } from '../../components/Pages/Ministérios/Card'

// Images
import Rede_Alcance from '../../assets/Ministerios/Rede_Alcance.jpg'
import Rede_Freedom from '../../assets/Ministerios/Rede_Freedom.jpg'
import Rede_Click from '../../assets/Ministerios/Rede_Click.jpg'
import Convergir from '../../assets/Ministerios/Convergir.jpg'
import CFL from '../../assets/Ministerios/CFL.jpg'
import Flow_Fire from '../../assets/Ministerios/Flow_Fire.jpg'
import Grupo_Louvor from '../../assets/Ministerios/Grupo_de_Louvor.jpg'
import Imersao from '../../assets/Ministerios/Imersão.jpg'
import Influence from '../../assets/Ministerios/Influence.jpg'
import Midia from '../../assets/Ministerios/Midia_ADAC.jpg'
import Rede_Plus from '../../assets/Ministerios/Rede_Plus.jpg'
import Aviva from '../../assets/Ministerios/Aviva.jpg'
import Plenitude from '../../assets/Ministerios/Plenitude.jpg'
import Rede_Power_Pink from '../../assets/Ministerios/Rede Power Pink.jpg'
import Rede_Kids from '../../assets/Ministerios/Rede_Kids.jpg'

export function Ministerios() {

    useEffect(() => {
        setDataMinisterios(data);
    }, [])

    // Json Ministérios
    const data = [
        {
            name: "Rede Alcance",
            nameDetail: "Rede Alcance",
            image: `${Rede_Alcance}`,
            description: "O propósito da rede alcance é alcançar pessoas através do amor, cuidando de cada detalhe para que o culto aconteça com excelência, desde a entrada da igreja até o momento do apelo.",
            responsavelName: "Cleber Rodrigues",
            palavra: "",
            versiculo: ""
        },
        {
            name: "Convergir",
            nameDetail: "Ministério Teatral Convergir",
            image: `${Convergir}`,
            description: "O propósito do ministério é levar o evangelho através da arte, fazendo discípulos e ganhando almas de uma forma leve, porém intencional.",
            responsavelName: "Stefani Weingartner",
            palavra: "",
            versiculo: ""
        },
        {
            name: "Rede Influence",
            nameDetail: "Rede Influence",
            image: `${Influence}`,
            description: "O propósito da rede influence é levar o amor de Deus para fora da igreja, apresentando ele a todos que estão perdidos e sem esperança, cumprindo aquilo que Cristo colocou em nossos corações, realizando a grande comissão com muita alegria e amor.",
            responsavelName: "David de Souza",
            palavra: "",
            versiculo: ""
        },
        {
            name: "CFL",
            nameDetail: "Curso de Formação de Líderes (CFL)",
            image: `${CFL}`,
            description: "O propósito do CFL é formar líderes, instruindo e ativando pessoas a entenderem seu real propósito aqui na terra, que é cumprir a ordem de Jesus: a grande comissão.",
            responsavelName: "Larissa Fortunato",
            palavra: "Então Jesus aproximou-se dos seus discípulos e disse: “Toda a autoridade no céu e na terra foi entregue a mim. Portanto, vão e façam discípulos de todas as nações, batizando-os no nome do Pai, do Filho e do Espírito Santo, e ensinando esses novos discípulos a obedecerem a todas as ordens que eu lhes dei. E tenham certeza disto: Eu estarei sempre com vocês, até o fim dos tempos”.",
            versiculo: "Mateus 28:18-20 NBV-P"
        },
        {
            name: "Rede Click",
            nameDetail: "Rede Click (Fotografia)",
            image: `${Rede_Click}`,
            description: "O propósito da Rede Click é captar a emoção, a devoção e glorificar o nome de Deus através das imagens, onde vemos momentos muito especiais, através do que Deus está fazendo na vida de pessoas, e mostrando a evolução em nossa igreja. Com as imagens trazemos a recordação de momentos felizes na presença de Deus.",
            responsavelName: "Nayara Pires",
            palavra: "Eu quero lembrar aquilo que pode me dar esperança na vida.",
            versiculo: "Lamentações 3:21"
        },
        {
            name: "Rede Freedom",
            nameDetail: "Rede Freedom (Áudiovisual /Cinema)",
            image: `${Rede_Freedom}`,
            description: "Ministério sobre a sétima arte: audiovisual. Com o propósito de pregar o evangelho através de filmes, séries e documentários, dando um propósito maior a arte do cinema e trazer a bíblia para as telinhas. Aqui Jesus é a luz que comanda por traz e na frente das telas, usando toda a equipe para que o evangelho seja propagado com excelência!",
            responsavelName: "Victor Davis",
            palavra: "E disse-lhes: Ide por todo o mundo, pregai o evangelho à toda criatura.",
            versiculo: "Marcos 16:15"
        },
        {
            name: "FlowFire",
            nameDetail: "FlowFire",
            image: `${Flow_Fire}`,
            description: "O Flowfire tem como propósito o aprofundamento espiritual coletivo. Cada vez que nos reunimos, nos rasgamos por 6 horas com um único objetivo: buscar o fluir do Espírito e experimentar o derramar do novo de Deus a cada temporada, para que nós, como igreja, sejamos edificados, consolados e ativados para o Reino.",
            responsavelName: "",
            palavra: "",
            versiculo: ""
        },
        {
            name: "Imersão",
            nameDetail: "Imersão: Batismo nas águas",
            image: `${Imersao}`,
            description: "O propósito do ministério é batizar pessoas que reconheceram a Cristo como único e suficiente Salvador, selando a fé com um ato público imergindo nas águas e assim cumprindo o que Jesus nos deixou.",
            responsavelName: "Vinícius Nascimento",
            palavra: "Então Jesus chegou perto deles e disse: — Deus me deu todo o poder no céu e na terra. Portanto, vão a todos os povos do mundo e façam com que sejam meus seguidores, batizando esses seguidores em nome do Pai, do Filho e do Espírito Santo e ensinando-os a obedecer a tudo o que tenho ordenado a vocês. E lembrem disto: eu estou com vocês todos os dias, até o fim dos tempos.",
            versiculo: "Mateus 28:18-20 NTLH"
        },
        {
            name: "Grupo de Louvor",
            nameDetail: "Grupo de Louvor ADAC",
            image: `${Grupo_Louvor}`,
            description: "Nosso grupo tem o propósito de servir a Deus de glorificar e de louvar o seu nome e Conduzir a Igreja nos momentos de louvor e adoração durante os cultos e eventos, com o melhor desempenho, qualidade e espiritualidade possível. E através dos louvores alcançar as pessoas de fora apresentando Deus a elas.",
            responsavelName: "Beto Gibelli",
            palavra: "Venham todos, e louvemos a Deus, o Senhor! Cantemos com alegria à rocha que nos salva. Vamos comparecer diante dele com ações de graças, cantando alegres hinos de louvor. Pois o Senhor é Deus poderoso; é Rei poderoso acima de todos os deuses.",
            versiculo: "Salmos 95:1-3"
        },
        {
            name: "Mídia",
            nameDetail: "Mídia - Mix House",
            image: `${Midia}`,
            description: "A mídia é uma parte atuante do corpo de Jesus em uma era de tecnologia e internet, a mídia é necessária para o avanço do Reino nesse tempo como nunca foi necessária até agora.",
            responsavelName: "Letícia Silveira",
            palavra: "Deus deu a cada um de vocês algumas capacidades especiais; estejam certos de que as estão utilizando para se ajudarem mutuamente, transmitindo aos outros as muitas formas da graça de Deus.",
            versiculo: "1 Pedro 4:10"
        },
        {
            name: "Rede Plus",
            nameDetail: "Manutenção  - Rede Plus",
            image: `${Rede_Plus}`,
            description: "Nosso propósito é servir ao reino de Deus através do cuidado e zeladoria com a estrutura da igreja,  contribuindo para o pleno funcionamento das atividades a serem desenvolvidas no templo.  Temos como objetivo utilizar as demandas da rede como um meio para inserir e ensinar os novos discípulos, em relação a importância do servir.",
            responsavelName: "Felipe Rodrigues",
            palavra: "O maior entre vocês deverá ser servo.",
            versiculo: "Mateus 23:11"
        },
        {
            name: "Aviva Jovem",
            nameDetail: "Ministério Aviva Jovem",
            image: `${Aviva}`,
            description: "O propósito do ministério é alcançar os adolescentes/jovens, fazer com que eles se sintam parte da grande comissão e assim eles vivam o avivamento não só em um evento mas em todos os seus dias. O Aviva quer ver os adolescentes/jovens se dedicando, se entregando por inteiro e sendo renovados pelo Pai.",
            responsavelName: "Yasmin Vicente",
            palavra: "Deus derramará do seu espírito sobre todos os povos!! Os jovens, eles terão visões!!",
            versiculo: "Joel 2:28-29"
        },
        {
            name: "Plenitude",
            nameDetail: "Ministério Plenitude",
            image: `${Plenitude}`,
            description: "O propósito desse ministério é poder adorar a Deus através da dança enquanto pessoas sejam tocadas e impactadas sentindo a presença sua presença em cada movimento.",
            responsavelName: "Jessica da Paixão",
            palavra: "",
            versiculo: ""
        },
        {
            name: "Power Pink",
            nameDetail: "Ministério Power Pink",
            image: `${Rede_Power_Pink}`,
            description: "O propósito da rede é que todas as mulheres sejam alcançadas. Curadas, para curar. Transformadas, para transformar. Influenciadas, para influenciar. E se lembre em todo tempo que, por mais influente que você possa ser e por mais que o Senhor te leve a lugares de honra, o lugar mais alto que uma você pode chegar, é aos pés do Salvador. Deus está levando uma geração de mulheres munidas com o seu poder, seremos reconhecidas como valentes, mas saberemos, no íntimo que não alcançamos nada sozinhas.",
            responsavelName: "Ana Paula Duarte",
            palavra: "",
            versiculo: ""
        },
        {
            name: "Rede Kids e Teens",
            nameDetail: "Ministério Rede Kids e Teens",
            image: `${Rede_Kids}`,
            description: "O ministério ADAC KIDS TEENS tem o objetivo de evangelizar, discipular e pastorear os pequeninos de 3 a 10 anos e 12 a 15 anos de idade da nossa igreja. Ensinamos os princípios de Deus de maneira contextualizada, criativa e prática para fazer as crianças crescerem amando e obedecendo ao Senhor e contribuindo para ser uma geração que dará continuidade ao propósito da igreja, que é contar as boas novas e conectar as pessoas a Jesus .",
            responsavelName: "Roberta Dantas",
            palavra: "",
            versiculo: ""
        },
    ]


    const [dataMinisterios, setDataMinisterios] = useState<CardMinisterioProps[]>();

    return (
        <>
            <ContainerHeader>
                <HeaderPages
                    name='Ministérios'
                    path='/'
                />
                <div className='w-full mt-2 max-w-96 mx-auto
                md:w-96 md:mt-2 md:mx-0'>
                    <p className='inter font-light text-center
                    md:text-start'>Veja todos os nossos ministérios e entre dessa maravilhosa jornada para a
                        obra de Deus!
                    </p>
                </div>
            </ContainerHeader>
            {/* Main */}
            <ContainerMain>
                <main className='mt-60 w-full max-w-64 mx-auto grid grid-cols-1 justify-items-center gap-y-5
                sm:grid-cols-2 sm:justify-items-center sm:max-w-lg sm:mt-56
                md:mt-44 md:grid md:grid-cols-3 md:justify-items-center md:max-w-4xl md:mx-auto'>
                    {dataMinisterios?.map(ministerio => (
                        <CardMinisterio
                            name={ministerio.name}
                            nameDetail={ministerio.nameDetail}
                            image={ministerio.image}
                            description={ministerio.description}
                            responsavelName={ministerio?.responsavelName}
                            responsavelFoto={ministerio?.responsavelFoto}
                            palavra={ministerio?.palavra}
                            versiculo={ministerio?.versiculo}
                        />
                    ))}


                </main>
            </ContainerMain>
        </>
    )
}