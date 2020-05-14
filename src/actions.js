export const Action = Object.freeze({
    AddBar: 'AddBar',
    DeleteBar: 'DeleteBar',
    DeleteNote: 'DeleteNote',
    AddNote: 'AddNote',
    Yeet1: 'Yeet1',
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

export function yeet1() {
    return {
        type: Action.Yeet1,
        payload: undefined,
    };
}