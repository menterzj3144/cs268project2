import {Action} from './actions';

const initialState = {
    staves: [1],
    completedBars: [],
    barInProgress: [],
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


        case Action.DeleteSong:
            return {
                staves: [1],
                completedBars: [],
                barInProgress: [],
            };


        case Action.LoadNotes:
            var temp = [];
            var i;
            for (i = 0; i < action.payload.length; i++) {
                temp.push(action.payload[i].notes);
            }

            var numStaves = temp.length / 4;
            var difference = numStaves % 1;
            numStaves = numStaves - difference;

            var stavesArr = [];
            var complete = [];
            var arr = [];
            var j;
            for (j = 0; j < numStaves; j++) {
                stavesArr.push(1);

                var x;
                var count = 0;
                for (x = 0; x < numStaves * 4; x++) {
                    count++;
                    arr.push(temp[x]);

                    if (count === 4) {
                        complete.push(arr);
                        arr = [];
                    }
                }
            }

            var inProgress = [];
            if (numStaves * 4 !== temp.length) {
                for (j = numStaves * 4; j < temp.length; j++) {
                    inProgress.push(temp[j]);
                }
                stavesArr.push(1);
            }

            return {
                ...state,
                staves: stavesArr,
                completedBars: complete,
                barInProgress: inProgress,
            };


        default:
            return state;
    }
}

export default reducer;