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
            console.log("completed: ", state.completedBars, "in progress: ", state.barInProgress);
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
            console.log(temp);

            var temp2 = [];

            var j;
            for (j = 0; j < temp.length; j + 4) {
                if (temp[j + 3] != null) {
                    var arr = [];
                    var x;
                    for (x = 0; x < 4; x++) {
                        arr.push(j + x);
                    }
                    temp2.push(arr);
                }
            }

            return {
                ...state,
                completedBars: [temp2],
            };


        default:
            return state;
    }
}

export default reducer;