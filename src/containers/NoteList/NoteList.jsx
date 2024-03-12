import { TextCard } from 'components/TextCard/TextCard';
import style from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NotesApi } from 'api/api';
import { deleteNote } from 'store/note/note-slice';

export const NoteList = () => {
    const methodes = useSelector(store => store.notes.noteList);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const methodesSort = [...methodes].sort((a, b) => a.title.localeCompare(b.title));

    async function deleteMethod(id) {
        const methodDeleted = await NotesApi.deleteByID(id);
        console.log(methodDeleted);
        dispatch(deleteNote(methodDeleted));
        navigate('/');
    }

    return (
        <section className={style.main}>
            {methodes && methodesSort.map(methode => {
                return (
                    <TextCard 
                        key={`${methode.id}-${methode.created_at}`}
                        title={methode.title} 
                        subtitle={methode.created_at} 
                        content={methode.content} 
                        onClick={() => navigate(`/note/${methode.id}`)}
                        onClickBin={deleteMethod}
                        id={methode.id}
                    />         
                );
            })}
        </section>
    );
};