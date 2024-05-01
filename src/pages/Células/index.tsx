// Import development
import { useState } from 'react';

// Components
import { ContainerHeader } from '../../components/Container/Header';
import { ContainerMainCard } from '../../components/Container/MainCard';
import { HeaderPages } from '../../components/Header/Pages/index';
// Cards 
import { Cell }  from '../../components/Pages/Cell/CardsCell';
// Interfaces
import { cellProps } from '../../components/Pages/Cell/CardsCell';

export function Celulas(){

    // Test Object
    const obj:cellProps[] = [
        {
            id_cell: 'fasdasd',
            name_cell: 'Anjos do Rei',
            name_leader: 'Robson Soares',
            neighborhood: 'Caputera',
            photo_cell: 'data:image/png;base64,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',
            photo_leader: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg',
        },
        {
            id_cell: 'gasd',
            name_cell: 'Féminina',
            name_leader: 'Joana Santos',
            neighborhood: 'Indaiá',
            photo_cell: 'data:image/png;base64,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',
            photo_leader: 'https://img.freepik.com/fotos-gratis/mulher-de-tiro-medio-com-papelada_23-2150379181.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713312000&semt=ais',
        },
        {
            id_cell: 'gdgdsf',
            name_cell: 'Teste Célula',
            name_leader: 'Carlos Pedro',
            neighborhood: "Estrela D' Alva",
            photo_cell: 'data:image/png;base64,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',
            photo_leader: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg',
        }
]
    
    const [cells, setCells] = useState<cellProps[]>(obj);
    const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('All');
    
    function handleNeighborhood(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedNeighborhood(event.target.value);
    }

    // Filtrar as células com base no bairro selecionado
    const filteredCells = selectedNeighborhood !== 'All' 
    ? cells.filter(cell => cell.neighborhood === selectedNeighborhood) 
    : cells;

    return(
        <>
            <ContainerHeader>
                <HeaderPages 
                path='/'
                name='Células' />
            </ContainerHeader>
            <ContainerMainCard>
            <div className='w-full h-24 flex items-center flex-col mt-40
                sm:mt-36
                md:justify-between md:flex-row md:mt-28'>
                    {/* Subtitle */}
                    <p className='w-72 h-full font-normal text-xl inter text-center mb-5
                    sm:w-80 sm:text-center
                    md:w-2/6 md:text-start
                    lg:max-w-96'>
                        Localize a célula mais perto de sua residência e sinta o agir de Deus bem pertinho de sua casa!
                    </p>
                    {/* Select bairro */}
                    <div className='h-max flex justify-end mt-3
                    md:md:w-2/3'>
                        <select
                        className='border border-1 border-white w-max p-1 rounded-md text-lg cursor-pointer' 
                        name="Bairro" 
                        id="bairro_escolha"
                        onChange={handleNeighborhood}
                        value={selectedNeighborhood}>
                            <option value="All">Filtre por bairro</option>
                            <option value="All" selected>Todos os Bairros</option>
                            <option value="Barranco Alto">Barranco Alto</option>
                            <option value="Benfica">Benfica</option>
                            <option value="Cantagalo">Cantagalo</option>
                            <option value="Capricórnio I">Capricórnio I</option>
                            <option value="Capricórnio II">Capricórnio II</option>
                            <option value="Capricórnio III">Capricórnio III</option>
                            <option value="Caputera">Caputera</option>
                            <option value="Centro">Centro</option>
                            <option value="Cidade Jardim">Cidade Jardim</option>
                            <option value="Estrela D' Alva">Estrela D' Alva</option>
                            <option value="Getuba">Getuba</option>
                            <option value="Golfinho">Golfinho</option>
                            <option value="Indaiá">Indaiá</option>
                            <option value="Ipiranga">Ipiranga</option>
                            <option value="Jaraguá">Jaraguá</option>
                            <option value="Jaraguazinho">Jaraguazinho</option>
                            <option value="Jardim Aruan">Jardim Aruan</option>
                            <option value="Jardim Britânia">Jardim Britânia</option>
                            <option value="Jardim Califórnia">Jardim Califórnia</option>
                            <option value="Jardim Casa Branca">Jardim Casa Branca</option>
                            <option value="Jardim Flecheiras">Jardim Flecheiras</option>
                            <option value="Jardim Gaivotas">Jardim Gaivotas</option>
                            <option value="Jardim Jaqueira">Jardim Jaqueira</option>
                            <option value="Jardim Mariella">Jardim Mariella</option>
                            <option value="Jardim Olaria">Jardim Olaria</option>
                            <option value="Jardim Primavera">Jardim Primavera</option>
                            <option value="Jardim Rio Claro">Jardim Rio Claro</option>
                            <option value="Jardim Tarumãs">Jardim Tarumãs</option>
                            <option value="Jardim Terralão">Jardim Terralão</option>
                            <option value="Martim de Sá">Martim de Sá</option>
                            <option value="Massaguaçu">Massaguaçu</option>
                            <option value="Morro do Algodão">Morro do Algodão</option>
                            <option value="Pegorelli">Pegorelli</option>
                            <option value="Perequê Mirim">Perequê Mirim</option>
                            <option value="Poiares">Poiares</option>
                            <option value="Pontal Santa Marina">Pontal Santa Marina</option>
                            <option value="Porto Novo">Porto Novo</option>
                            <option value="Praia da Cocanha">Praia da Cocanha</option>
                            <option value="Praia da Mococa">Praia da Mococa</option>
                            <option value="Praia das Palmeiras">Praia das Palmeiras</option>
                            <option value="Prainha">Prainha</option>
                            <option value="Rio do Ouro">Rio do Ouro</option>
                            <option value="Sumaré">Sumaré</option>
                            <option value="Tabatinga">Tabatinga</option>
                            <option value="Tinga">Tinga</option>
                            <option value="Travessão">Travessão</option>
                            <option value="Vila Ponte Seca">Vila Ponte Seca</option>
                        </select>
                    </div>
                </div>
                <div className='mt-24 flex flex-grow flex-wrap gap-5 mb-10 justify-center 
                md:mt-8 md:justify-center'>
                    {filteredCells.length === 0 ? ( 
                    <p className="text-center text-md w-full h-full flex justify-center md:text-lg ">Nenhuma célula encontrada</p>
                ) : (
                        filteredCells.map((cell)=> (
                            <Cell
                            id_cell={cell.id_cell}
                            key={cell.id_cell} 
                            name_cell={cell.name_cell}
                            name_leader={cell.name_leader} 
                            neighborhood={cell.neighborhood}
                            photo_cell={cell.photo_cell}
                            photo_leader={cell.photo_leader} />
                        ))
                    )}
                </div>
            </ContainerMainCard>
        </>
    )
}