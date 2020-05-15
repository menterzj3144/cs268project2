export const Action = Object.freeze({
    DeleteNote: 'DeleteNote',
    AddNote: 'AddNote',
    DeleteSong: 'DeleteSong',
    Yeet: 'Yeet',
});

export function deleteNote() {
    return {
        type: Action.DeleteNote,
        payload: undefined,
    };
}

export function addNote(note) {
    return {
        type: Action.AddNote,
        payload: note,
    };
}

export function deleteSong() {
    return {
        type: Action.DeleteSong,
        payload: undefined,
    }
}

export function yeet() {
    return {
        type: Action.Yeet,
        payload: undefined,
    };
}