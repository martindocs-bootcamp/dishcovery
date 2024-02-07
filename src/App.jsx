import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SharedLayout,
  Home,
  LandingPage,
  ErrorPage,  
} from './pages';

function App() {
  return (  
    <BrowserRouter>
      <Routes>
         {/* SharedLayout is used as a layout wrapper for all routes */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/landing" element={<LandingPage/>} />
          <Route path="*" element={<ErrorPage />} />          
        </Route>
      </Routes>
    </BrowserRouter>   
  )
}

export default App;
