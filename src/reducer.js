import {Action} from './actions';

const initialState = {
    staves: [1],
    completedBars: [],
    barInProgress: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case Action.AddBar:
            return {
                ...state,
                staves: [...state.staves, 1],
            };
        case Action.DeleteBar:
            return {
                ...state,
                staves: state.staves.filter((element, index) => index < state.staves.length - 1),
            };
            
        case Action.AddNote:
            if (state.barInProgress.length < 4) {
                return {
                    ...state,
                    barInProgress: [...state.barInProgress, action.payload],
                }
            } else {
                return {
                    ...state,
                    completedBars: [...state.completedBars, state.barInProgress],
                    barInProgress: [action.payload],
                }
            }
        default:
            return state;
    }
}

export default reducer;