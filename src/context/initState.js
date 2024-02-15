// Define the initial state for the application
export const initialState = {
    isLoading: false, // Flag to track whether data is being loaded
    edamamAPI: [],  // Array to store Edamam API recipes
    recipeID: '', // ID of a specific recipe
    drinksAPI: [], // Array to store drink recipes   
    search: '', // Search term for recipes
    sendingEmail: false, // Flag to track whether an email is being sent
    errorMessage: null,  // Error message to display in case of API or email errors       
}