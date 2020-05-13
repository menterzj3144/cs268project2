export const Action = Object.freeze({
    CreateStaff: 'CreateStaff',
    AddBar: 'AddBar',
    DeleteBar: 'DeleteBar',
    ChangeNote: 'ChangeNote',
    DeleteNote: 'DeleteNote',
    AddRest: 'AddRest',
    AddNote: 'AddNote',
    AddSharpNote: 'AddSharpNote',
});

export function createStaff() {
    return {
        type: Action.CreateStaff,
        payload: undefined,
    };
}

export function addBar() {
    return {
        type: Action.AddBar,
        payload: undefined,
    };
}

export function deleteBar() {
    return {
        type: Action.DeleteBar,
        payload: undefined,
    };
}

export function addRest() {
    return {
        type: Action.AddRest,
        payload: undefined,
    };
}

export function changeNote() {
    return {
        type: Action.ChangeNote,
        payload: undefined,
    };
}

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

export function addSharpNote() {
    return {
        type: Action.AddSharpNote,
        payload: undefined,
    };
}