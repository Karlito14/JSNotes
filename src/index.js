import './index.scss';
/*********************** Redux ***********************/
import { Provider } from 'react-redux';
import { store } from './store';
/*********************** React ***********************/
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*********************** Pages du site ***********************/
import { NoteBrowse } from './pages/NoteBrowse/NoteBrowse';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { Note } from './pages/Note/Note';
import { NoteCreate } from './pages/NoteCreate/NoteCreate';
/*********************** Composant ***********************/
import { App } from 'App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='/' element={<NoteBrowse />} />
                    <Route path='/note/:id' element={<Note />} />
                    <Route path='/note/new' element={<NoteCreate />} />
                    <Route path='*' element={<PageNotFound />} />
                </Route>  
            </Routes>
        </BrowserRouter>
    </Provider>
);
