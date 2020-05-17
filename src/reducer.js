import {Action} from './actions';

const initialState = {
    staves: [1],
    completedBars: [],
    barInProgress: [],
    songName: "",
};

function reducer(state = initialState, action) {
    switch (action.type) {      
        case Action.Yeet:
            console.log("Yeet");
            console.log("staves: ", state.staves, "completed: ", state.completedBars, "in progress: ", state.barInProgress);
            return {
                ...state,
            };
        

        case Action.AddNote:
            if (state.barInProgress.length < 4 && state.barInProgress.length > 0) {
                return {
                    ...state,
                    barInProgress: [...state.barInProgress, action.payload],
                };
            } else if (state.barInProgress.length === 4) {
                return {
                    ...state,
                    completedBars: [...state.completedBars, state.barInProgress],
                    barInProgress: [action.payload],
                    staves: [...state.staves, 1],
                };
            } else if (state.barInProgress.length === 0 && state.completedBars.length > 0) {
                return {
                    ...state,
                    barInProgress: [action.payload],
                    staves: [...state.staves, 1],
                };
            } else {
                return {
                    ...state,
                    barInProgress: [action.payload],
                };
            }


        case Action.DeleteNote:
            if (state.completedBars.length === 0 && state.barInProgress.length === 1) {
                return {
                    ...state,
                    barInProgress: state.barInProgress.filter((element, index) => index < state.barInProgress.length - 1),
                };
            } if (state.completedBars.length === 0 && state.barInProgress.length === 0) {
                return {
                    ...state,
                };
            } else if (state.barInProgress.length === 0) {
                return {
                    ...state,
                    barInProgress: state.completedBars[state.completedBars.length - 1].filter((element, index) => index < state.completedBars[state.completedBars.length - 1].length - 1),
                    completedBars: state.completedBars.filter((element, index) => index < state.completedBars.length - 1),
                };
            } else if (state.barInProgress.length === 1) {
                return {
                    ...state,
                    barInProgress: state.barInProgress.filter((element, index) => index < state.barInProgress.length - 1),
                    staves: state.staves.filter((element, index) => index < state.staves.length - 1),
                };
            } else {
                return {
                    ...state,
                    barInProgress: state.barInProgress.filter((element, index) => index < state.barInProgress.length - 1),
                };
            }


        case Action.ClearSong:

            return {
                staves: [1],
                completedBars: [],
                barInProgress: [],
            };


        case Action.LoadNotes:
            var notes = [];
            var i;
            for (i = 0; i < action.payload.songs.length; i++) {
                notes.push(action.payload.songs[i].notes);
            }

            var numStaves = notes.length / 4;
            var difference = numStaves % 1;
            numStaves = numStaves - difference;

            var stavesArr = [];
            var complete = [];
            var arr = [];
            var j;
            for (j = 0; j < numStaves; j++) {
                stavesArr.push(1);
            }

            var x;
            var count = 0;
            for (x = 0; x < numStaves * 4; x++) {
                count++;
                arr.push(notes[x]);

                if (count === 4) {
                    complete.push(arr);
                    arr = [];
                    count = 0;
                }
            }

            var inProgress = [];
            if (numStaves * 4 !== notes.length) {
                for (j = numStaves * 4; j < notes.length; j++) {
                    inProgress.push(notes[j]);
                }
                stavesArr.push(1);
            }

            var length = (complete.length * 4) + inProgress.length;

            return {
                ...state,
                staves: stavesArr,
                completedBars: complete,
                barInProgress: inProgress,
                loadLength: length,
                songName: action.payload.songid,
            };


        case Action.SaveSongName:
            return {
                ...state,
                songName: action.payload,
            }


        default:
            return state;
    }
}

export default reducer;