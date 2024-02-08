import { useContext } from 'react';
import { AppContext } from '../context/appContext'; 

export const useGlobalContext = () => {
  
    const context = useContext(AppContext);
  
    if (!context) {
        throw new Error('useGlobalContext must be used within an AppProvider');
    }

    return context;
}