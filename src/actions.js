export const Action = Object.freeze({
    DeleteNote: 'DeleteNote',
    AddNote: 'AddNote',
    ClearSong: 'ClearSong',
    LoadNotes: 'LoadNotes',
    FinishSaveNote: 'FinishSaveNote',
    SaveSongName: 'SaveSongName',
    Yeet: 'Yeet',
    isWaiting: false,
});

export function isWaiting() {
    return {
        type: Action.isWaiting,
        payload: undefined,
    }
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

export function clearSong() {
    return {
        type: Action.ClearSong,
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
        dispatch(isWaiting());
        fetch(`${host}/song/${id}`)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                if (data.songs.length !== 0) {
                    document.getElementById("message").innerText = `${id} loaded!`;
                    document.getElementById("message").style.display = "block";
                    dispatch(loadNotes(data));
                } else {
                    document.getElementById("message").innerText = `Cannot load. ${id} does not exist.`;
                    document.getElementById("message").style.display = "block";
                }
            }
        })
        .catch(e => console.error(e));
    };
}

export function loadNotes(data) {
    return {
        type: Action.LoadNotes,
        payload: data,
    }
}

export function saveNote(id, song_id, song_note) {
    const noteAdd = {id, song_id, song_note};
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(noteAdd)
    }
    return dispatch => {
        dispatch(isWaiting());
        fetch(`${host}/song/`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                document.getElementById("message").innerText = `${song_id} saved!`;
                document.getElementById("message").style.display = "block";
            }
        })
        .catch(e => {
            console.error(e);
            document.getElementById("message").innerText = `${song_id} already exists.`;
            document.getElementById("message").style.display = "block";
        });
    };
}

export function updateNote(id, song_id, song_note) {
    const noteAdd = {id, song_id, song_note};
    const options = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(noteAdd)
    }
    return dispatch => {
        dispatch(isWaiting());
        fetch(`${host}/song/${song_id}/${id}`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            
            if (data.ok) {
                document.getElementById("message").innerText = `${song_id} updated!`;
                document.getElementById("message").style.display = "block";
            }
        })
        .catch(e => {
            console.error(e);
            document.getElementById("message").innerText = `${song_id} doesn't exist.`;
            document.getElementById("message").style.display = "block";
        });
    };
}

export function deleteSong(song_id) {
    const options = {
        method: 'DELETE',
    }
    return dispatch => {
        dispatch(isWaiting());
        fetch(`${host}/song/${song_id}`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                document.getElementById("message").innerText = `${song_id} deleted!`;
                document.getElementById("message").style.display = "block";
            }
        })
        .catch(e => {
            console.error(e);
            document.getElementById("message").innerText = `Cannot delete. ${song_id} does not exist.`;
            document.getElementById("message").style.display = "block";
        });
    };
}


export function saveSongName(songName) {
    return {
        type: Action.SaveSongName,
        payload: songName,
    }
}


export function yeet() {
    return {
        type: Action.Yeet,
        payload: undefined,
    };
}