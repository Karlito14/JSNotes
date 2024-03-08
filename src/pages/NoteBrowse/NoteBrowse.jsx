import { TextCard } from 'components/TextCard/TextCard';
import style from './style.module.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const NoteBrowse = () => {
    const methodes = useSelector(store => store.notes.noteList);

    console.log(methodes)
    return (
        <main className={style.main}>
            {methodes && methodes.map(methode => {
                return (
                    <TextCard 
                        key={`${methode.id}-${methode.created_at}`}
                        title={methode.title} 
                        subtitle={methode.created_at} 
                        content={methode.content} 
                    />         
                )
            })}
        </main>
    )
};