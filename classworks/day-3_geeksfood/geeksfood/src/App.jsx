import "./App.css";
import Home from "./pages/Home/Home";
import Foods from "./pages/Foods/FoodsPage";
import RestaurentPage from "./pages/RestaurentPage/RestaurentPage";
import QuotesPage from "./pages/QuotesPage/QuotesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodDetails from "./components/FoodDetails/FoodDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/foodDetails:id" element={<FoodDetails />} />
          <Route path="/restaurents" element={<RestaurentPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
