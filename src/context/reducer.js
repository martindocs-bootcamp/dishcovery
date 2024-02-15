// Import action types from the actions file
import {
    HANDLE_INPUT,
    HANDLE_RESET_STATE,

    GET_EDAMAM_RECIPES_BEGIN,
    GET_EDAMAM_RECIPES_SUCCESS,

    GET_DRINKS_RECIPES_BEGIN,
    GET_DRINKS_RECIPES_SUCCESS,

    SEND_MESSAGE_BEGIN,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_ERROR,
} from './actions';

// Define the initial state for the reducer
const initialState = {
    isLoading: false,
    edamamAPI: [],
    drinksAPI: [],
    search: '',
    sendingEmail: false,
    errorMessage: null,
};

// Define the reducer function
const reducer = (state, action) => {

    switch(action.type){
        // Handle input changes
        case HANDLE_INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        // Reset the state to its initial values
        case HANDLE_RESET_STATE:
            return {
                ...initialState
            }

        // Fetching recipes from the Edamam API
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

        // Fetching drink recipes
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
        
        // Sending an email
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

        // Default case for handling unknown actions
        default:
            return new Error(`No such action ${action.type}`);
    }
}

export default reducer;