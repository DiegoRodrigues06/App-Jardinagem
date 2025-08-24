import styled from "styled-components";

const Button = styled.button`
  background: #4A793E;
  color: #f5f5f5;
  border: none;
  border-radius: 20px;
  padding: clamp(6px, 1vw, 10px) clamp(12px, 2vw, 24px);
  font-weight: bold;
  cursor: pointer;
  margin-left: 1.5rem;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 0.5rem;
    width: 100%;
  }
`;

export { Button };