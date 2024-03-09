import style from './style.module.scss';
import { NoteForm } from 'components/NoteForm/NoteForm';
import { NotesApi } from 'api/api';

export const NoteCreate = () => {
    async function postMethod(note) {
        NotesApi.create(note);
    }
    return (
        <main className={style.main}>
            <NoteForm title={'Enregistrer une méthode'} onClickSubmit={postMethod} />
        </main>)
};