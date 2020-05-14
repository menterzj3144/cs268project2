import React from 'react';
import {useDispatch} from 'react-redux';
import {addNote} from './actions';

export function Piano() {
    const dispatch = useDispatch();

    const playNote = note => {
        const c = new Audio(`/audio/${note}.wav`);
        c.play();

        dispatch(addNote(note));
    }

    return (
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
    );
}