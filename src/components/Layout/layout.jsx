// Layout.jsx
import { useState } from 'react';
import Navbar from './Navbar'; // Seu componente de navbar
import TresBarras from './TresBarras'; // Seu componente das 3 barras

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Navbar open={menuOpen}>
        <TresBarras onClick={handleMenuClick} />
      </Navbar>
      {children}
    </>
  );
};

export default Layout;