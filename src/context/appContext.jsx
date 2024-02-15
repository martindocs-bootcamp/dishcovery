import { createContext, useReducer } from "react"; 
import reducer from './reducer';
import axios from 'axios';
import PropTypes from 'prop-types';
import { initialState } from "./initState";
import { toast } from 'react-toastify';

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

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const[state, dispatch] = useReducer(reducer, initialState);
    
    const getFromLocalStorage = () => {
        const storage = JSON.parse(localStorage.getItem('favorites'));
        if(!storage){
            localStorage.setItem('favorites', JSON.stringify([]));
        }
        return storage === null ? [] : storage;        
    }

    const removeFromLocalStorage = (label) => {
        const{ favorites } = state;
        const updatedFavorites = favorites.filter(
            (recipe) => recipe.label !== label
          );
              
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }

    const addToLocalStorage = ({title, image, id}) => {
        const favorites = getFromLocalStorage();

        const isFavorite = favorites.some(
          (favorite) => favorite.title === title
        );

        if (isFavorite) {
            showErrorMessage("Recipe is already in favorites!");
        } else {  
            const updatedFavorites = [...favorites, {title, image, id}];
    
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

            showSuccessMessage("Recipe added to favorites!");
        }
    }


    const showSuccessMessage = (text) => {
        toast.success(text, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "light",
        });
      };
    
      const showErrorMessage = (text) => {
        toast.error(text, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "light",
        });
      };

    // Handle input search 
    const handleInput = ({name, value}) => {
        dispatch({type: HANDLE_INPUT, payload: {value, name} })
    }

    const handleResetState = () => {
        dispatch({type: HANDLE_RESET_STATE});
    }
    
    // Fetch data from Edeme recepies
    const fetchEdamamRecipes = async ( str = '') => {      
        const {search} = state;
        
        const newSearch = str === '' ? search : str;
        
        const edamamApiID = import.meta.env.VITE_EDAMAM_APP_ID; // locally
        const edamamApiKey = import.meta.env.VITE_EDAMAM_APP_KEY; // locally
        // const edamamApiID = process.env.EDAMAM_APP_ID; // Netlify
        // const edamamApiKey = process.env.EDAMAM_APP_KEY; // Netlify        
      
        try {
            dispatch({type: GET_EDAMAM_RECIPES_BEGIN})
            
            let url = '';
            
            if(str === '') {
                // Fetch by search query
                url = `https://api.edamam.com/api/recipes/v2?type=public&q=${newSearch}&app_id=${edamamApiID}&app_key=${edamamApiKey}`;
            } else {
                // Fetch by recipe ID
                const id = getFromLocalStorage().filter((item)=> item.title == newSearch)[0].id;                
                url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${edamamApiID}&app_key=${edamamApiKey}`;              
            }
                        
            const {data} = await axios.get(url);                             
            const results = data.hits ? data.hits : [data]; 
    
            dispatch({type: GET_EDAMAM_RECIPES_SUCCESS, payload: {results}})
        }catch(err) {
            console.log(err);
        }    
       
    }

    const fetchDrinksRecipes = async() => {

        if (state.drinksAPI.length === 0) {
            dispatch({type: GET_DRINKS_RECIPES_BEGIN});
            try {
                
                const {data} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'); 
            
                const results = data.drinks[0]; 
                              
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
                showSuccessMessage,
                showErrorMessage,
                getFromLocalStorage,
                removeFromLocalStorage,
                addToLocalStorage,
                handleInput,
                handleResetState,
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
    children: PropTypes.object.isRequired,
    senderName: PropTypes.string.isRequired,
    senderEmail: PropTypes.string.isRequired,
    senderMessage: PropTypes.string.isRequired,
}