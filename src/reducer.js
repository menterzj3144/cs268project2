import {Action} from './actions';

const initialState = {
    staves: [1],
    completedBars: [],
    barInProgress: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {      
        case Action.Yeet1:
            console.log("YEET");
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


        default:
            return state;
    }
}

export default reducer;