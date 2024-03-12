import { NoteForm } from 'components/NoteForm/NoteForm';
import { NotesApi } from 'api/api';
import { addNote } from 'store/note/note-slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const NoteCreate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    async function postMethod(note) {
        const methode = await NotesApi.create(note);
        dispatch(addNote(methode));
        navigate('/');
    }

    return (
        <>
            <NoteForm title={'Enregistrer une méthode'} onClickSubmit={postMethod} />
        </>
    );
};