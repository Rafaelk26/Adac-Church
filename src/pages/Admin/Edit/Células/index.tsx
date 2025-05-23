// Import development
import { useState, useEffect, useMemo } from 'react';
import { collection, getDocs } from 'firebase/firestore';

// Components
import { ContainerHeader } from '../../../../components/Container/Header';
import { ContainerMainCard } from '../../../../components/Container/MainCard';
import { HeaderPages } from '../../../../components/Header/Pages/index';
// Cards 
import { CellEdit }  from '../../../../components/Pages/Admin/CellEdit';
// Interfaces
import { cellProps } from '../../../../components/Pages/Cell/CardsCell';
// Connections
import { db } from '../../../../services/server';
// Image loading 
import logoLoading from '../../../../assets/Logo/logo-adac.png';

export function EditCelulas(){

    const [cells, setCells] = useState<cellProps[]>([]);
    const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('All');

    // Loading
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        const fetchCells = async () => {
            setIsUploading(true);
            const cellsCollection = collection(db, 'Celulas');
            const cellsSnapshot = await getDocs(cellsCollection);
            const cellsData = cellsSnapshot.docs.map(doc => {
                const data = doc.data() as cellProps;
                return { 
                        id: doc.id,
                        id_cell: data.id_cell,
                        name_cell: data.name_cell,
                        name_leader: data.name_leader,
                        neighborhood: data.neighborhood,
                        age_group: data.age_group,
                        photo_cell: data.photo_cell,
                        photo_leader: data.photo_leader
                    };
            });
            setIsUploading(false);
            setCells(cellsData);
        };
        fetchCells();
    }, []);
    
    function handleNeighborhood(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedNeighborhood(event.target.value);
    }

    // Filtrar as células com base no bairro selecionado
    const filteredCells = selectedNeighborhood !== 'All' 
    ? cells.filter(cell => cell.neighborhood === selectedNeighborhood) 
    : cells;

    const memorizedCellsImage = useMemo(()=> {
        return cells.map(cell => cell.photo_cell);
    }, [cells]);

    console.log(memorizedCellsImage);

    return(
        <>
            <ContainerHeader>
                <HeaderPages 
                path='/adac/admin/'
                name='Editar Células' />
            </ContainerHeader>
            <ContainerMainCard>
            <div className='w-full h-24 flex items-center flex-col mt-40
                sm:mt-36
                md:justify-between md:flex-row md:mt-28'>
                    {/* Select bairro */}
                    <div className='w-full h-max flex justify-center mt-3
                    md:justify-end'>
                        <select
                        className='border border-1 border-white w-max p-1 rounded-md text-lg cursor-pointer' 
                        name="Bairro" 
                        id="bairro_escolha"
                        onChange={handleNeighborhood}
                        value={selectedNeighborhood}>
                            <option value=""></option>
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
                            <option value="Jardim Rio Santos">Jardim Rio Santos</option>
                            <option value="Jardim Tarumãs">Jardim Tarumãs</option>
                            <option value="Jardim Terralão">Jardim Terralão</option>
                            <option value="Martim de Sá">Martim de Sá</option>
                            <option value="Massaguaçu">Massaguaçu</option>
                            <option value="Morro do Algodão">Morro do Algodão</option>
                            <option value="Nova Caraguá I">Nova Caraguá I</option>
                            <option value="Nova Caraguá II">Nova Caraguá II</option>
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
                <div className='mt-4 flex flex-grow flex-wrap gap-5 mb-10 justify-center 
                md:mt-8 md:justify-center'>
                    {filteredCells.length === 0 ? ( 
                    <p className="text-center text-md w-full h-full flex justify-center md:text-lg ">Nenhuma célula encontrada</p>
                ) : (
                        filteredCells.map((cell)=> (
                            <CellEdit
                            id_cell={cell?.id}
                            key={cell.id_cell} 
                            name_cell={cell.name_cell}
                            name_leader={cell.name_leader} 
                            neighborhood={cell.neighborhood}
                            age_group={cell.age_group}
                            photo_cell={cell.photo_cell}
                            photo_leader={cell.photo_leader} />
                        ))
                    )}
                </div>
                {/* Div loading */}
                {isUploading && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <img 
                        className='w-24 fixed'
                        src={logoLoading} 
                        alt="Logo Adac" />
                        <div className="animate-spin rounded-full h-28 w-28 border-t-4 border-b-4 border-white"></div>
                    </div>
                )}
            </ContainerMainCard>
        </>
    )
}
