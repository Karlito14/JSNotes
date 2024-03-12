import { SearchBar } from 'components/SearchBar/SearchBar';
import { NoteList } from 'containers/NoteList/NoteList';
import { useState } from 'react';

export const NoteBrowse = () => {
    // eslint-disable-next-line no-unused-vars
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <SearchBar placeholder='Rechercher une méthode' onTextChange={setInputValue} />
            <NoteList textValue={inputValue} />
        </>
    );
};