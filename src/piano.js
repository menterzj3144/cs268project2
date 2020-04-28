import React from 'react';

export function Piano() {
    return (
        <div className="piano">
            <button className="white-key">C</button>
            <button className="black-key" id="cs">C#</button>
            <button className="white-key">D</button>
            <button className="black-key" id="ds">D#</button>
            <button className="white-key">E</button>
            <button className="white-key">F</button>
            <button className="black-key" id="fs">F#</button>
            <button className="white-key">G</button>
            <button className="black-key" id="gs">G#</button>
            <button className="white-key">A</button>
            <button className="black-key" id="as">A#</button>
            <button className="white-key">B</button>
        </div>
    );
}