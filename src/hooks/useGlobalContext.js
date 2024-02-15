import { useContext } from 'react';
import { AppContext } from '../context/appContext'; 

// Custom hook for easily access the global context
export const useGlobalContext = () => {
  
    // Import the AppContext from the appContext file
    const context = useContext(AppContext);
  
    // If the context is not available, throw an error
    if (!context) {
        throw new Error('useGlobalContext must be used within an AppProvider');
    }

    // Return the context, providing access to the state and functions
    return context;
}