import { TextCard } from 'components/TextCard/TextCard';
import style from './style.module.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const NoteList = () => {
    const methodes = useSelector(store => store.notes.noteList);
    const navigate = useNavigate()

    return (
    <main className={style.main}>
        {methodes && methodes.map(methode => {
            return (
                <TextCard 
                    key={`${methode.id}-${methode.created_at}`}
                    title={methode.title} 
                    subtitle={methode.created_at} 
                    content={methode.content} 
                    onClick={() => navigate(`/note/${methode.id}`)}
                />         
            )
        })}
    </main>
    )
}