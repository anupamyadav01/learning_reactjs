import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "../pages/Homepage/Homepage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Covert from "../pages/Convert/Covert";
import RemoveBg from "../pages/RemoveBg/RemoveBg";
import Search from "../pages/Search/Search";
import Header from "../components/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/convert" element={<Covert />} />
        <Route path="/dashboard/removebg" element={<RemoveBg />} />
        <Route path="/dashboard/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
