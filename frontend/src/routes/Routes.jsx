import { Routes, Route } from "react-router-dom";
import { useState } from "react";


import Icon from '../components/IconTab.jsx';
import Navbar from '../sections/Home.jsx';

import Home from "../sections/Home";
import Login from "../sections/Login";
import Register from "../sections/Register";


const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Icon onClick={handleMenuClick} />

      <Navbar open={menuOpen}></Navbar>
      
      {children}
    </>
  );
};


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}



export default AppRoutes;
