export const Action = Object.freeze({
    DrawStaff: 'DrawStaff',
    AddBar: 'AddBar',
    DeleteBar: 'DeleteBar',
    ChangeNote: 'ChangeNote',
    DeleteNote: 'DeleteNote',
});

export function drawStaff(staves, notes) {
    return {
        type: Action.DrawStaff,
        staves: staves,
        notes: notes,
    };
}

export function addBar() {
    return {

    };
}

export function deleteBar() {
    return {

    };
}

export function changeNote() {
    return {

    };
}

export function deleteNote() {
    return {

    };
}