import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  SharedLayout,
  Recipe,
  Drinks,
  LandingPage,
  ErrorPage,
  Contact,
} from "./pages";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* SharedLayout is used as a layout wrapper for all routes */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/favourites" element={<Favourites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
