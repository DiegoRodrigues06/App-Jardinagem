import styled from "styled-components";

const CardContainer = styled.div`
  /* Layout e espaçamento */
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
  margin: 1rem 0;
  align-items: center;
  
  /* Aparência do card */
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #E0E0E0;

  /* Responsividade básica */
  width: 100%;
  height: 200px;
  max-width: 200px; /* Limita a largura em telas grandes para manter a legibilidade */
  

  @media (max-width: 600px) {
    padding: 1rem;
    height: 200px;
    max-width: 200px;

`;

export default CardContainer;