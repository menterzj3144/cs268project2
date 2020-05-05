import React from 'react';
import Vex from 'vexflow';

const VF = Vex.Flow;
const notes = [
    new VF.StaveNote({keys: ["c/4"],  duration: "qr"}),
    new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
    new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
    new VF.StaveNote({keys: ["b/4"],  duration: "qr"})
];

function playNote(staves, note) {
    const c = new Audio(`/audio/${note}.wav`);
    c.play();

    const canvas = document.getElementById("staff");
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);
    staves[0].draw();

    notes[0] = new VF.StaveNote({keys: [`${note}/4`], duration: "q"});
    
    VF.Formatter.FormatAndDraw(staves[0].context, staves[0], notes);
}

function playSharpNote(staves, note) {
    const c = new Audio(`/audio/${note}s.wav`);
    c.play();

    const canvas = document.getElementById("staff");
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);
    staves[0].draw();

    notes[0] = new VF.StaveNote({keys: [`${note}/4`], duration: "q"}).addAccidental(0, new VF.Accidental("#"));
    
    VF.Formatter.FormatAndDraw(staves[0].context, staves[0], notes);
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