import {
    HANDLE_INPUT,
} from './actions';

const reducer = (state, action) => {

    switch(action.type){
        case HANDLE_INPUT:
            console.log(action.payload.name);
            console.log(action.payload.value);
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        default:
            return new Error(`No such action ${action.type}`);
    }
}

export default reducer;