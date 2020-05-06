import React from 'react';
import Vex from 'vexflow';
import {addBar} from './staff'

const VF = Vex.Flow;
var notes = [[
    new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
    new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
    new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
    new VF.StaveNote({keys: ["b/4"],  duration: "qr"})
]];
var s = 0;
var n = 0;


function clearAndDraw(staves) {
    const canvas = document.getElementById("staff");
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);

    var i;
    for(i = 0; i <= s; i++) {
        staves[i].draw();
        VF.Formatter.FormatAndDraw(staves[i].context, staves[i], notes[i]);
    }

    const restAdd = document.getElementById("rest-add");
    restAdd.style.display = "none";
    const noteAdd = document.getElementById("note-add");
    noteAdd.style.display = "none"
}


function playNote(staves, note) {
    const c = new Audio(`/audio/${note}.wav`);
    c.play();

    notes[s][n] = new VF.StaveNote({keys: [`${note}/4`], duration: "q"});

    clearAndDraw(staves);
}


function playSharpNote(staves, note) {
    const c = new Audio(`/audio/${note}s.wav`);
    c.play();

    notes[s][n] = new VF.StaveNote({keys: [`${note}/4`], duration: "q"}).addAccidental(0, new VF.Accidental("#"));

    clearAndDraw(staves);
}


export function addRest(staves) {
    notes[s][n] = new VF.StaveNote({keys: ["b/4"], duration: "qr"});

    clearAndDraw(staves);
    addNote(staves);
}


export function addNote(staves) {
    n++;
    if (n > 3) {
        addBar(staves);
        s++;
        n = 0;
    
        var tempnotes = [
            new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
            new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
            new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
            new VF.StaveNote({keys: ["b/4"],  duration: "qr"})
        ];

        notes.push(tempnotes);
    }
    clearAndDraw(staves);
    if(n === 0) {
        if (notes[s][n].getNoteType() === "r") {
            const restAdd = document.getElementById("rest-add");
            restAdd.style.display = "block";
        } else {
            const noteAdd = document.getElementById("note-add");
            noteAdd.style.display = "block";
        }
    } else {
        if (notes[s][n-1].getNoteType() === "r") {
            const restAdd = document.getElementById("rest-add");
            restAdd.style.display = "block";
        } else {
            const noteAdd = document.getElementById("note-add");
            noteAdd.style.display = "block";
        }
    }
}


export function Piano(props) {
    return (
        
            <div className="piano">
                <button className="white-key" onClick={() => playNote(props.staves, "c")}>C</button>
                <button className="black-key" id="cs" onClick={() => playSharpNote(props.staves, "c")}>C#</button>
                <button className="white-key" onClick={() => playNote(props.staves, "d")}>D</button>
                <button className="black-key" id="ds" onClick={() => playSharpNote(props.staves, "d")}>D#</button>
                <button className="white-key" onClick={() => playNote(props.staves, "e")}>E</button>
                <button className="white-key" onClick={() => playNote(props.staves, "f")}>F</button>
                <button className="black-key" id="fs" onClick={() => playSharpNote(props.staves, "f")}>F#</button>
                <button className="white-key" onClick={() => playNote(props.staves, "g")}>G</button>
                <button className="black-key" id="gs" onClick={() => playSharpNote(props.staves, "g")}>G#</button>
                <button className="white-key" onClick={() => playNote(props.staves, "a")}>A</button>
                <button className="black-key" id="as" onClick={() => playSharpNote(props.staves, "a")}>A#</button>
                <button className="white-key" onClick={() => playNote(props.staves, "b")}>B</button>
        </div>
    );
}