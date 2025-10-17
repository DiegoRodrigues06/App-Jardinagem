import { Routes, Route } from "react-router-dom";
import { useState } from "react";


import Icon from '../components/IconTab.jsx';
import Navbar from '../sections/Home.jsx';

import Home from "../sections/Home";
import Login from "../sections/Login";
import Register from "../sections/Register";
import AddPlant from "../sections/Add-Plant.jsx";
import PlantDetailsPage from "../sections/Details.jsx";


// muitos problemas nisso aq kkk, tentando arrumar
const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Icon onClick={toggleMenu} />

      <Navbar open={isMenuOpen}></Navbar>

      {children}
    </>
  );
};


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add-plant" element={<AddPlant />} />
      <Route path="/details/:id" element={<PlantDetailsPage />} />
    </Routes>
  );
}
 


export default AppRoutes;
