import {
    HANDLE_INPUT,
} from './actions';

const reducer = (state, action) => {

    switch(action.type){
        case HANDLE_INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        default:
            return new Error(`No such action ${action.type}`);
    }
}

export default reducer;