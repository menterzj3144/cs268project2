export const Action = Object.freeze({
    DeleteNote: 'DeleteNote',
    AddNote: 'AddNote',
    DeleteSong: 'DeleteSong',
    LoadSong: 'LoadSong',
    LoadNotes: 'LoadNotes',
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

function checkForErrors(response) {
    if (!response.ok) {
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}

const host = 'https://jspiano.duckdns.org:8442';

export function loadSong(id) {
    return dispatch => {
        fetch(`${host}/song/${id}`)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                dispatch(loadNotes(data.songs));
            }
        })
        .catch(e => console.error(e));
    };
}

export function loadNotes(notes) {
    return {
        type: Action.LoadNotes,
        payload: notes,
    }
}

export function yeet() {
    return {
        type: Action.Yeet,
        payload: undefined,
    };
}