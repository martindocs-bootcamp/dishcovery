import { useContext } from 'react';
import { AppContext } from '../context/appContext'; 

export const useGlobalContext = () => {
    return useContext(AppContext);
}