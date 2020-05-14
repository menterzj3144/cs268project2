import React from 'react';
// import {addBar} from './staff';
import {useDispatch} from 'react-redux';
import {addNote} from './actions';

// var s = 0;
// var n = 0;


// export function clearAndDraw(staves, notes) {
//     if (staves[0] != null) {
//         const canvas = document.getElementById("staff");
//         const context = canvas.getContext('2d');
//         context.clearRect(0, 0, canvas.clientWidth, canvas.height);

//         var i;
//         for(i = 0; i <= s; i++) {
//             staves[i].draw();
//             VF.Formatter.FormatAndDraw(staves[i].context, staves[i], notes[i]);
//         }

//         const restAdd = document.getElementById("rest-add");
//         restAdd.style.display = "none";
//         const deleteMessage = document.getElementById("delete");
//         deleteMessage.style.display = "none";
//     }
// }


// export function addRest(staves, notes) {
//     // if (staves[0] == null) {
//     //     createStaff(staves);
//     // }

//     notes[s][n] = new VF.StaveNote({keys: ["b/4"], duration: "qr"});
//     clearAndDraw(staves, notes);

//     n++;
//     if (n > 3) {
//         addBar(staves);
//         s++;
//         n = 0;
    
//         var tempnotes = [
//             new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
//             new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
//             new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
//             new VF.StaveNote({keys: ["b/4"],  duration: "qr"})
//         ];

//         notes.push(tempnotes);
//     }

//     notes[s][n].setStyle({fillStyle: "green", strokeStyle: "green"});

//     clearAndDraw(staves, notes);

//     if(n === 0) {
//         const restAdd = document.getElementById("rest-add");
//         restAdd.style.display = "block";
//     } else {
//         const restAdd = document.getElementById("rest-add");
//         restAdd.style.display = "block";
//     }
// }


// export function addNote(staves, notes) {
//     notes[s][n].setStyle({fillStyle: "black", strokeStyle: "black"});
    
//     if (notes[s][n].getNoteType() === "n") {
//         n++;
//         if (n > 3) {
//             addBar(staves);
//             s++;
//             n = 0;
        
//             var tempnotes = [
//                 new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
//                 new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
//                 new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
//                 new VF.StaveNote({keys: ["b/4"],  duration: "qr"})
//             ];

//             notes.push(tempnotes);
//         }

//         notes[s][n].setStyle({fillStyle: "green", strokeStyle: "green"});

//         clearAndDraw(staves, notes);
//     }
// }


// export function deleteNote(staves, notes) {
//     if(s === 0 && n === 0) {
//         const deleteMessage = document.getElementById("delete");
//         deleteMessage.style.display = "block";
//     } else if (n === 0) {
//         if(notes[s][n] != null) {
//             notes[s][n] = new VF.StaveNote({keys: ["b/4"], duration: "qr"});
//         }
//         s--;
//         n = 3;
//         notes[s][n] = new VF.StaveNote({keys: ["b/4"], duration: "qr"});
//         notes[s][n].setStyle({fillStyle: "green", strokeStyle: "green"});
//         clearAndDraw(staves, notes);
//     } else {
//         n--;
//         var j;
//         for(j = n; j < 4; j++) {
//             notes[s][j] = new VF.StaveNote({keys: ["b/4"], duration: "qr"});
//         }
//         notes[s][n].setStyle({fillStyle: "green", strokeStyle: "green"});
//         clearAndDraw(staves, notes);
//     }
// }


// export function clearBar(staves, notes) {
//     notes[s] = [
//         new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
//         new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
//         new VF.StaveNote({keys: ["b/4"],  duration: "qr"}),
//         new VF.StaveNote({keys: ["b/4"],  duration: "qr"})
//     ];
//     n = 0;
//     notes[s][n].setStyle({fillStyle: "green", strokeStyle: "green"});
//     clearAndDraw(staves, notes);
// }


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