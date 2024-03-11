import { BASE_URL } from 'config/config.js';

export class NotesApi {
    static async fetchAllNotes() {
        const response = await fetch(BASE_URL);
        const result = await response.json();
        return result;
    }

    static async create(note) {
        const response = await fetch((BASE_URL), {
            method: 'POST',
            body: JSON.stringify(note),
        });
        const result = await response.json();
        return result;
    }

    static async fetchNoteByID(id) {
        const response = await fetch(`${BASE_URL}/${id}`);
        const result = await response.json();
        return result;
    }

    static async deleteByID(id) {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        });
        const result = await response.json();
        return result;
    }

    static async updateNote(note) {
        const response = await fetch(`${BASE_URL}/${note.id}`, {
            method: 'PATCH',
            body: JSON.stringify(note),
        });
        const result = await response.json();
        return result;
    }
}
