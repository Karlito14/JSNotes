import { useNavigate, useParams } from 'react-router-dom';
import style from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { NoteForm } from 'components/NoteForm/NoteForm';
import { NotesApi } from 'api/api';
import { deleteNote } from 'store/note/note-slice';

export const Note = () => {
    const { id } = useParams();
    const store = useSelector(store => store.notes.noteList);
    const methode = store.find(element => element.id === id);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function deleteMethod(id) {
        const methodDeleted = await NotesApi.deleteByID(id);
        dispatch(deleteNote(methodDeleted));
        navigate('/');
    }
    
    return (
        <>
            {methode && <NoteForm 
                title={methode.title} 
                onClickEdit={() => console.log('edit')} 
                onClickTrash={deleteMethod}
                methodId={methode.id}
            />}
        </>
    )
};