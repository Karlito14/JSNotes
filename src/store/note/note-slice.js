import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        noteList: [],
    },
    reducers : {
        setNoteList: (currentSlice, action) => {
            currentSlice.noteList = action.payload;
        },

        addNote: (currentSlice, action) => {
            currentSlice.noteList.push(action.payload);
        },

        deleteNote: (currentSlice, action) => {
            const indexNote = currentSlice.noteList.indexOf(action.payload);
            currentSlice.noteList.splice(indexNote, 1);
        }
    }
});

export const { setNoteList, addNote, deleteNote } = noteSlice.actions;
export const noteReducer = noteSlice.reducer;