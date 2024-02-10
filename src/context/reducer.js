import {
    HANDLE_INPUT,

    GET_EDAMAM_RECIPES_BEGIN,
    GET_EDAMAM_RECIPES_SUCCESS,

    GET_DRINKS_RECIPES_BEGIN,
    GET_DRINKS_RECIPES_SUCCESS,
} from './actions';

const reducer = (state, action) => {

    switch(action.type){
        case HANDLE_INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        case GET_EDAMAM_RECIPES_BEGIN:
            return {
                ...state,
                isLoading: true,
            }

        case GET_EDAMAM_RECIPES_SUCCESS:
            
            return {
                ...state,
                isLoading: false,
                edamamAPI: action.payload.results
            }

        case GET_DRINKS_RECIPES_BEGIN:
            return {
                ...state,
                isLoading: true,
            }

        case GET_DRINKS_RECIPES_SUCCESS:
            
            return {
                ...state,
                isLoading: false,
                drinksAPI: action.payload.results
            }
        default:
            return new Error(`No such action ${action.type}`);
    }
}

export default reducer;