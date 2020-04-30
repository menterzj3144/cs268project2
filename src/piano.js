import React from 'react';

export function Piano() {
    const playC = () => {
        const c = new Audio("/audio/c.wav");
        c.play();
    }

    const playCs = () => {
        const cs = new Audio("/audio/cs.wav");
        cs.play();
    }

    const playD = () => {
        const d = new Audio("/audio/d.wav");
        d.play();
    }

    const playDs = () => {
        const ds = new Audio("/audio/ds.wav");
        ds.play();
    }

    const playE = () => {
        const e = new Audio("/audio/e.wav");
        e.play();
    }

    const playF = () => {
        const f = new Audio("/audio/f.wav");
        f.play();
    }

    const playFs = () => {
        const fs = new Audio("/audio/fs.wav");
        fs.play();
    }

    const playG = () => {
        const g = new Audio("/audio/g.wav");
        g.play();
    }

    const playGs = () => {
        const gs = new Audio("/audio/gs.wav");
        gs.play();
    }

    const playA = () => {
        const a = new Audio("/audio/a.wav");
        a.play();
    }

    const playAs = () => {
        const as = new Audio("/audio/as.wav");
        as.play();
    }

    const playB = () => {
        const b = new Audio("/audio/b.wav");
        b.play();
    }

    return (
        <div className="piano">
            <button className="white-key" onClick={playC}>C</button>
            <button className="black-key" id="cs" onClick={playCs}>C#</button>
            <button className="white-key" onClick={playD}>D</button>
            <button className="black-key" id="ds" onClick={playDs}>D#</button>
            <button className="white-key" onClick={playE}>E</button>
            <button className="white-key" onClick={playF}>F</button>
            <button className="black-key" id="fs" onClick={playFs}>F#</button>
            <button className="white-key" onClick={playG}>G</button>
            <button className="black-key" id="gs" onClick={playGs}>G#</button>
            <button className="white-key" onClick={playA}>A</button>
            <button className="black-key" id="as" onClick={playAs}>A#</button>
            <button className="white-key" onClick={playB}>B</button>

        </div>
    );
}