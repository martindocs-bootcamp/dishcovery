import { it } from 'vitest';
import { render } from '@testing-library/react';
import { AppProvider } from '../context/appContext'; 
import { BrowserRouter } from 'react-router-dom';
import Search from '../components/Search/Search'; 

it('<Search /> component renders without error', () => {
    render(
        <AppProvider>
            <BrowserRouter>
                <Search />
            </BrowserRouter>
        </AppProvider>
    );
});
