import { Header } from './components/Header/Header';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { NotesApi } from './api/api';
import { useDispatch } from 'react-redux';
import { setNoteList } from './store/note/note-slice';

export function App() {
    const dispatch = useDispatch();

    async function getNotes() {
        const data = await NotesApi.fetchAllNotes();
        dispatch(setNoteList(data));
    }
  
    useEffect(() => {
        getNotes();
    // eslint-disable-next-line 
    }, []);

    return (
        <>
            <Header />
            <main className='main'>
                <Outlet />
            </main>
        </>
    );
}
