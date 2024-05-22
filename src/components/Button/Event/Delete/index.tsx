// Import for development
import { useNavigate } from 'react-router-dom';
import { doc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

// Connection with Firebase
import { db } from '../../../../services/server';


interface buttonProps{
    id_event?: string;
    type: "submit" | "reset" | "button";
    name: string;
}

export function ButtonDelete({id_event, type, name}:buttonProps){
    
    const nav = useNavigate();

    const handleDelete = async (id: string) => {
        try{
            await deleteDoc(doc(db, "Eventos", id));
            toast.success('Evento deletado com sucesso!');
            nav('/adac/admin/');
            return;
        } catch(error){
            toast.error('Erro ao deletar o evento!');
            console.log('Erro:', error);
        }
    }
    
    return(
        <>  <button
            id={id_event}
            onClick={() => id_event && (handleDelete(id_event))}
            type={type}
            className="w-full p-2 border-2 bg-red-500 rounded-lg transition-all font-medium
            hover:bg-red-600 hover:font-medium md:border-red-800">         
                {name}
            </button>
        </>
    )
}