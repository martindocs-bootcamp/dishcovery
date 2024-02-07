import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SharedLayout,
  Home,
} from './components';

function App() {

  return (  
    <BrowserRouter>
      <Routes>
         {/* SharedLayout is used as a layout wrapper for all routes */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>   
  )
}

export default App;
