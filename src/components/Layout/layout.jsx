// Layout.jsx
import { useState } from 'react';
import Navbar from '../Navbar'; 
import Icon from '../iconTab'; 

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

export default Layout;