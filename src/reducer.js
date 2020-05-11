import {Action} from './actions';
import {createStaff} from './staff';

const initialState = {
    staves: [],
    notes: [[]]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case Action.DrawStaff:
            createStaff(action.staves, action.notes);
            return {
                ...state,
                staves: action.staves,
                notes: action.notes
            }
        default:
            return state;
    }
}

export default reducer;