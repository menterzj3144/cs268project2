export const Action = Object.freeze({
    AddBar: 'AddBar',
    DeleteBar: 'DeleteBar',
    DeleteNote: 'DeleteNote',
    AddNote: 'AddNote',
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

export function yeet() {
    return {
        type: Action.Yeet,
        payload: undefined,
    };
}