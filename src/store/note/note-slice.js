import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        noteList: [],
    },
    reducers : {
        setNoteList: (currentSlice, action) => {
            currentSlice.noteList = action.payload
        },

        addNote: (currentSlice, action) => {
            currentSlice.noteList.push(action.payload)
        }
    }
})

export const { setNoteList, addNote } = noteSlice.actions;
export const noteReducer = noteSlice.reducer;