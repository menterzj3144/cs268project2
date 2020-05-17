import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNote, deleteNote, clearSong, loadSong, saveNote, updateNote, deleteSong, saveSongName, yeet} from './actions';

export function Piano() {
    const completedBars = useSelector(state => state.completedBars);
    const barInProgress = useSelector(state => state.barInProgress);
    const dispatch = useDispatch();

    const playNote = note => {
        document.getElementById("message").style.display = "none";
        document.getElementById("song-name").style.display = "none";

        const c = new Audio(`/audio/${note}.wav`);
        c.play();

        dispatch(addNote(note));
    }

    const onClickAddRest = () => {
        document.getElementById("message").style.display = "none";
        document.getElementById("song-name").style.display = "none";

        dispatch(addNote("r"));
    };

    const onClickDeleteNote = () => {
        document.getElementById("message").style.display = "none";
        document.getElementById("song-name").style.display = "none";

        dispatch(deleteNote());
    };

    const onClickClearSong = () => {
        document.getElementById("message").style.display = "none";
        document.getElementById("song-name").style.display = "none";

        dispatch(clearSong());
    };

    const clickYeet = () => {
        dispatch(yeet());
    };

    const clickLoadSong = id => {
        document.getElementById("message").style.display = "none";
        document.getElementById("load").value = "";

        dispatch(loadSong(id));
    };

    const saveSong = songId => {
        document.getElementById("message").style.display = "none";
        document.getElementById("save").value = "";

        var i;
        var noteId = 0;
        for (i = 0; i < completedBars.length; i++) {
            var j;
            for (j = 0; j < 4; j++) {
                noteId++;
                dispatch(saveNote(noteId, songId, completedBars[i][j]));
            }
        }

        if (barInProgress.length !== 0) {
            for (i = 0; i < barInProgress.length; i++) {
                noteId++;
                dispatch(saveNote(noteId, songId, barInProgress[i]));
            }
        }

        dispatch(saveSongName(songId));
    };

    const updateSong = songId => {
        document.getElementById("message").style.display = "none";
        document.getElementById("update").value = "";

        var i;
        var noteId = 0;
        for (i = 0; i < completedBars.length; i++) {
            var j;
            for (j = 0; j < 4; j++) {
                noteId++;
                dispatch(updateNote(noteId, songId, completedBars[i][j]));
            }
        }

        if (barInProgress.length !== 0) {
            for (i = 0; i < barInProgress.length; i++) {
                noteId++;
                dispatch(updateNote(noteId, songId, barInProgress[i]));
            }
        }
    }

    const clickDeleteSong = songId => {
        document.getElementById("message").style.display = "none";
        document.getElementById("song-name").style.display = "none";
        document.getElementById("delete").value = "";

        dispatch(deleteSong(songId));
    };

    return (
        
            <div className="piano-block">
                <div className="db-buttons">
                    <button onClick={() => clickLoadSong(document.getElementById("load").value)}>Load Song</button>
                    <input type="text" id="load" placeholder="Song name..."></input>
                    <button onClick={() => saveSong(document.getElementById("save").value)}>Save Song</button>
                    <input type="text" id="save" placeholder="Song name..."></input>
                    <button onClick={() => updateSong(document.getElementById("update").value)}>Update Song</button>
                    <input type="text" id="update" placeholder="Song name..."></input>
                    <button onClick={() => clickDeleteSong(document.getElementById("delete").value)}>Delete Song</button>
                    <input type="text" id="delete" placeholder="Song name..."></input>
                    <button onClick={clickYeet}>Yeet</button>
                </div>
                <div className="buttons">
                    <button onClick={onClickAddRest}>Add Rest</button>
                    <button onClick={onClickDeleteNote}>Delete Last Note</button>
                    <button onClick={onClickClearSong}>Clear Song</button>
                </div>
                <div className="piano">
                    <button className="white-key" onClick={() => playNote("c")}>C</button>
                    <button className="black-key" id="cs" onClick={() => playNote("cs")}>C#</button>
                    <button className="white-key" onClick={() => playNote("d")}>D</button>
                    <button className="black-key" id="ds" onClick={() => playNote("ds")}>D#</button>
                    <button className="white-key" onClick={() => playNote("e")}>E</button>
                    <button className="white-key" onClick={() => playNote("f")}>F</button>
                    <button className="black-key" id="fs" onClick={() => playNote("fs")}>F#</button>
                    <button className="white-key" onClick={() => playNote("g")}>G</button>
                    <button className="black-key" id="gs" onClick={() => playNote("gs")}>G#</button>
                    <button className="white-key" onClick={() => playNote("a")}>A</button>
                    <button className="black-key" id="as" onClick={() => playNote("as")}>A#</button>
                    <button className="white-key" onClick={() => playNote("b")}>B</button>
            </div>
        </div>
    );
}