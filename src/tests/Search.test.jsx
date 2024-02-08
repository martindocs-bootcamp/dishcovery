import { it } from 'vitest';
import { render } from '@testing-library/react';
import { AppProvider } from '../context/appContext'; 
import Search from '../components/Search/Search'; 

it('<Search /> component renders without error', () => {
    render(
        <AppProvider>
            <Search />
        </AppProvider>
    );
});
