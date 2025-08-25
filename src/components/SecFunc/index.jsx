import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SecFunc({ children }) {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    const novoCount = clickCount + 1;
    setClickCount(novoCount);

    if (novoCount === 5) {
      // Navega para a página secreta
      navigate('/PaginaSecreta');
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
}

export default SecFunc;
