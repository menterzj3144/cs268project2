import {Action, addBar} from './actions';
import Vex from 'vexflow';
import {useDispatch} from 'react-redux';

const VF = Vex.Flow;
const initialState = {
    staves: [],
    notes: [[]]
};
var xposition = 0;
var yposition = -10;
var x;
var noteIndex = -1;
var staveIndex = -1;

function reducer(state = initialState, action) {
    switch (action.type) {
        case Action.CreateStaff:
            // x = window.innerWidth / 400;
            // x = x % 1;
            // x = x * 400;
            // x = x / 2;
            staveIndex++;
            return {
                ...state,
                staves: [...state.staves, new VF.Stave(xposition, yposition, 400).addClef("treble").addTimeSignature("4/4")],
            };
        case Action.AddBar:
            xposition += 400;
            staveIndex++;
            return {
                ...state,
                staves: [...state.staves, new VF.Stave(xposition, yposition, 400)],
            };
        case Action.DeleteBar:
            if (xposition >= 400) {
                xposition -= 400;
                return {
                    ...state,
                    staves: state.staves.filter((element, index) => index < state.staves.length - 1),
                };
            }
        case Action.AddNote:
            noteIndex++;

            if (staveIndex == 0 && noteIndex == 0) {
                return {
                    ...state,
                    notes: [[
                        new VF.StaveNote({keys: [`${action.payload}/4`],  duration: "q"}),
                    ]],
                };
            } else if (staveIndex == 0) {
                return {
                    ...state,
                    notes: [[
                        ...state.notes[0],
                        new VF.StaveNote({keys: [`${action.payload}/4`],  duration: "q"}),
                    ]],
                }
            } else if (noteIndex > 3) {
                console.log(state.notes[0]);

                console.log("yeet");
                noteIndex = 0;
                return {
                    ...state,
                    notes: [...state.notes, [
                        new VF.StaveNote({keys: [`${action.payload}/4`],  duration: "q"}),
                    ]],
                }
            } else {
                console.log(noteIndex, staveIndex)
                console.log(state.notes[1])
                return {
                    ...state,
                    notes: [...state.notes, [
                        ...state.notes[staveIndex],
                        new VF.StaveNote({keys: [`${action.payload}/4`],  duration: "q"}),
                    ]],
                }
            }
        default:
            return state;
    }
}

export default reducer;