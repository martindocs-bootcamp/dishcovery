import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SharedLayout,
  Recipe,
  Drinks,
  LandingPage,
  ErrorPage,  
  Contact,
  Favorites,
} from './pages';

function App() {
  return (  
    <BrowserRouter>
      <Routes>
         {/* SharedLayout is used as a layout wrapper for all routes */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LandingPage/>} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />          
        </Route>
      </Routes>
    </BrowserRouter>   
  )
}

export default App;
