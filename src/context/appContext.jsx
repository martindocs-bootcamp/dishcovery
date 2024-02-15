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
} from './actions';

// Create AppContext using createContext
export const AppContext = createContext();

// Define the AppProvider component
export const AppProvider = ({children}) => {

    // useReducer to manage state 
    const[state, dispatch] = useReducer(reducer, initialState);
    
    // Get favorites recipes from local storage 
    const getFromLocalStorage = () => {
        const storage = JSON.parse(localStorage.getItem('favorites'));
        if(!storage){
            localStorage.setItem('favorites', JSON.stringify([]));
        }
        return storage === null ? [] : storage;        
    }

    // Remove a recipe from local storage by label
    const removeFromLocalStorage = (label) => {
        const{ favorites } = state;
        const updatedFavorites = favorites.filter(
            (recipe) => recipe.label !== label
          );
              
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }

    // Add a recipe to local storage
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

    // Display a success message using react-toastify lib
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
    
    // Display an error message using the react-toastify lib
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

    // Reset the state to initial values
    const handleResetState = () => {
        dispatch({type: HANDLE_RESET_STATE});
    }
    
    // Fetch data from the Edamam API
    const fetchEdamamRecipes = async ( str = '') => {      
        const {search} = state;
        
        // If the user used search option set to 'search' state
        // or if user clicked on favorite recipe set the search to recipe title
        const newSearch = str === '' ? search : str;

        // Fetch Edamam API credentials
        const edamamApiID = process.env.EDAMAM_APP_ID; // Netlify
        const edamamApiKey = process.env.EDAMAM_APP_KEY; // Netlify  
           
      
        try {
            dispatch({type: GET_EDAMAM_RECIPES_BEGIN})
            
            let url = '';
            
            // True when user use search input 
            if(str === '') {
                // Fetch by search query
                url = `https://api.edamam.com/api/recipes/v2?type=public&q=${newSearch}&app_id=${edamamApiID}&app_key=${edamamApiKey}`;
            
            // True when user clicked on recipe through Favorite page
            } else {
                // Get the id of clicked recipe from local storage 
                const id = getFromLocalStorage().filter((item)=> item.title == newSearch)[0].id;                
                // and using the id Fetch the recipe by it's ID
                url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${edamamApiID}&app_key=${edamamApiKey}`;              
            }
                        
            const {data} = await axios.get(url);   
            
            // Depend of the 'data' recived, when its an array then user used Search page
            // if not user used Favorite page then
            const results = data.hits ? data.hits : [data]; 
    
            dispatch({type: GET_EDAMAM_RECIPES_SUCCESS, payload: {results}})
        }catch(err) {
            console.log(err);
        }           
    }

    // Fetch a random drink recipe
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

    // Provide the state and functions to the AppContext
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