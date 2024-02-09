import { createContext, useReducer } from "react"; 
import reducer from './reducer';
import axios from 'axios';
import PropTypes from 'prop-types';
import { initialState } from "./initState";
import {
    HANDLE_INPUT,

    GET_EDAMAM_RECIPES_BEGIN,
    GET_EDAMAM_RECIPES_SUCCESS,
} from './actions';

import edamamData from '../data/edamam.json';

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

    return (
        <AppContext.Provider 
            value={{
                ...state,
                handleInput,
                fetchEdamamRecipes,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

AppProvider.propTypes = {
    children: PropTypes.object
}