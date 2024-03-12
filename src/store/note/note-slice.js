import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        noteList: [],
    },
    reducers: {
        setNoteList: (currentSlice, action) => {
            currentSlice.noteList = action.payload;
        },

        addNote: (currentSlice, action) => {
            currentSlice.noteList.push(action.payload);
        },

        deleteNote: (currentSlice, action) => {
            const methode = action.payload;
            const indexNote = currentSlice.noteList.findIndex(note => note.id === methode.id);
            console.log(indexNote);
            currentSlice.noteList.splice(indexNote, 1);
        },

        updateNote: (currentSlice, action) => {
            const methode = action.payload;
            const indexMethode = currentSlice.noteList.findIndex(note => note.id === methode.id);
            currentSlice.noteList[indexMethode] = methode;
        }
    }
});

export const { setNoteList, addNote, deleteNote, updateNote } = noteSlice.actions;
export const noteReducer = noteSlice.reducer;