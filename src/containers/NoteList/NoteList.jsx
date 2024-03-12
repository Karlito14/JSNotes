import { TextCard } from '../../components/TextCard/TextCard';
import style from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { NotesApi } from '../../api/api';
import { deleteNote } from '../../store/note/note-slice';

export const NoteList = ({textValue}) => {
    const methodes = useSelector(store => store.notes.noteList);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const methodesSort = [...methodes].sort((a, b) => a.title.localeCompare(b.title));
    
    const valueText = textValue.toUpperCase().trim();
    const methodesFiltered = methodesSort.filter(method => method.title.toUpperCase().includes(valueText) || method.content.toUpperCase().includes(valueText));

    async function deleteMethod(id) {
        const methodDeleted = await NotesApi.deleteByID(id);
        console.log(methodDeleted);
        dispatch(deleteNote(methodDeleted));
        navigate('/');
    }

    return (
        <section className={style.main}>
            {methodes.length > 0 ? methodesFiltered.map(methode => {
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
            }) : 
                // eslint-disable-next-line react/no-unescaped-entities
                <p>Vous n'avez pas de notes. Voulez-vous en <Link to='/note/new'>créer une ?</Link></p>
            }
        </section>
    );
};