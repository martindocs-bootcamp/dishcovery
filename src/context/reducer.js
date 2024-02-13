import {
    HANDLE_INPUT,

    GET_EDAMAM_RECIPES_BEGIN,
    GET_EDAMAM_RECIPES_SUCCESS,

    GET_DRINKS_RECIPES_BEGIN,
    GET_DRINKS_RECIPES_SUCCESS,

    SEND_MESSAGE_BEGIN,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_ERROR,
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
        
        case SEND_MESSAGE_BEGIN:            
            return {
                ...state,                
                sendingEmail: true,
                errorMessage: null,
            };
        
        case SEND_MESSAGE_SUCCESS:            
            return {
                ...state,
                sendingEmail: false,                
            };
        
        case SEND_MESSAGE_ERROR:            
            return {
                ...state,
                sendingEmail: false,
                errorMessage: 'Error sending email', 
            };

        default:
            return new Error(`No such action ${action.type}`);
    }
}

export default reducer;