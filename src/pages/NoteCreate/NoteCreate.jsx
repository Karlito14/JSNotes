import style from './style.module.scss';
import { NoteForm } from 'components/NoteForm/NoteForm';
import { NotesApi } from 'api/api';
import { addNote } from 'store/note/note-slice';
import { useDispatch } from 'react-redux';

export const NoteCreate = () => {
    const dispatch = useDispatch()
    async function postMethod(note) {
        const methode = await NotesApi.create(note);
        dispatch(addNote(methode));
    }
    return (
        <>
            <NoteForm title={'Enregistrer une méthode'} onClickSubmit={postMethod} />
        </>)
};