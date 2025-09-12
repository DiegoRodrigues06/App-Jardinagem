import styled from 'styled-components';

const MenuIcon = styled.div`
  display: none; /* Esconde em telas grandes */
  z-index: 1000;
  cursor: pointer;
  
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 3rem;
    right: 1.5rem;

    @media (max-width: 600px) {
      display: none;
  }
`;

const Bar = styled.div`
  width: 2rem;
  height: 0.25rem;
  background-color: #f5f5f5; /* Cor das barrinhas */
  border-radius: 10px;
  transition: all 0.3s linear;
`;

export { MenuIcon, Bar };