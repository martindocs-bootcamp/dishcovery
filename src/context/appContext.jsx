import { createContext, useReducer } from "react"; 
import reducer from './reducer';
import axios from 'axios';
import PropTypes from 'prop-types';
import { initialState } from "./initState";
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

import edamamData from '../data/edamam.json';
import drinksData from '../data/drinks.json';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const[state, dispatch] = useReducer(reducer, initialState);
    
    // Handle input search 
    const handleInput = ({name, value}) => {
        dispatch({type: HANDLE_INPUT, payload: {value, name} })
    }

    // Fetch data from Edeme recepies
    const fetchEdamamRecipes = async () => {      

        const {search} = state;
        const edamamApiID = import.meta.env.VITE_EDAMAM_APP_ID;
        const edamamApiKey = import.meta.env.VITE_EDAMAM_APP_KEY;

        if (state.edamamAPI.length === 0) {
            dispatch({type: GET_EDAMAM_RECIPES_BEGIN})
            try {
                // const {data} = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${edamamApiID}&app_key=${edamamApiKey}`);

                // const {hits:results} = data;
                const {hits:results} = edamamData;
            
                dispatch({type: GET_EDAMAM_RECIPES_SUCCESS, payload: {results}})
            }catch(err) {
                console.log(err);
            }    
        }
    }

    const fetchDrinksRecipes = async() => {

        if (state.drinksAPI.length === 0) {
            dispatch({type: GET_DRINKS_RECIPES_BEGIN});
            try {
                
                // const {data} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            
                // const results = data.drinks[0];
                const results = drinksData.drinks[0];
                              
                dispatch({type: GET_DRINKS_RECIPES_SUCCESS, payload:{results}});
            }catch(err) {
                console.log(err);
            }
        }
    }

    const sendEmail = async(props) => {        
        const{senderName, senderEmail, senderMessage} = props;

        dispatch({type: SEND_MESSAGE_BEGIN});
        try {
            await axios.post('/.netlify/functions/sendEmail',{                 
                  name: senderName,
                  email: senderEmail,
                  message: senderMessage,                
            });            
            
            dispatch({type: SEND_MESSAGE_SUCCESS});
        }catch(err) {
            dispatch({type: SEND_MESSAGE_ERROR});
        }
    }

    return (
        <AppContext.Provider 
            value={{
                ...state,
                handleInput,
                fetchEdamamRecipes,
                fetchDrinksRecipes,
                sendEmail,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

AppProvider.propTypes = {
    children: PropTypes.object,
    senderName: PropTypes.string,
    senderEmail: PropTypes.string,
    senderMessage: PropTypes.string,
}