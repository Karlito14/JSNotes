import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NoteForm } from '../../components/NoteForm/NoteForm';
import { NotesApi } from 'api/api';
import { deleteNote, updateNote } from 'store/note/note-slice';
import { useState } from 'react';

export const Note = () => {
    const { id } = useParams();
    const [editable, setEditable] = useState(false);
    const store = useSelector(store => store.notes.noteList);
    const methode = store.find(element => element.id === id);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function deleteMethod(id) {
        const methodDeleted = await NotesApi.deleteByID(id);
        dispatch(deleteNote(methodDeleted));
        navigate('/');
    }

    async function updateMethod(note) {
        note.id = methode.id;
        note.created_at = methode.created_at;
        const methodeUpdated = await NotesApi.updateNote(note);
        dispatch(updateNote(methodeUpdated));
        setEditable(!editable);
    }
    
    return (
        <>
            {methode && <NoteForm 
                isEditable={editable}
                title={editable ? 'Modifier une méthode' : methode.title} 
                onClickEdit={() => setEditable(!editable)} 
                onClickTrash={deleteMethod}
                note={methode}
                onClickSubmit={updateMethod}
            />}
        </>
    );
};