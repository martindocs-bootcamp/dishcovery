import { createContext, useReducer } from "react"; 
import reducer from './reducer';
import PropTypes from 'prop-types';
import { initialState } from "./initState";
import {
    HANDLE_INPUT,
} from './actions';


export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const[state, dispatch] = useReducer(reducer, initialState);

    const handleInput = ({name, value}) => {
        dispatch({type: HANDLE_INPUT, payload: {value, name} })
    }

    return (
        <AppContext.Provider 
            value={{
                ...state,
                handleInput,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

AppProvider.propTypes = {
    children: PropTypes.object
}