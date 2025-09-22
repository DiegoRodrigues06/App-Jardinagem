import styled from 'styled-components'


const SearchIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f4f0;
  padding: 0.8rem 1.2rem;
  border-radius: 2rem;
  gap: 0.75rem;
  border: 1px solid var(--border-color);
  transition: box-shadow 0.3 ease;

  &:focus-within {
    box-shadow: 0 0 0 2px #fbeee4;
  }
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
`;

export const ResultsBox = styled.ul`
  position: absolute;
  top: calc(100% - 32.5rem); /* logo abaixo da barra */
  left: 39rem; /* alinhado com input */
  right: 0;

  background: rgba(237, 247, 197, 0.85); /* fundo semi-transparente */
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  max-height: 200px;
  width: 25rem;
  overflow-y: auto;
  list-style: none;
  padding: 0.5rem 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 999; /* garante que fica por cima do formulário */
  backdrop-filter: blur(6px); /* opcional, dá aquele efeito vidro fosco */

  @media (max-width: 768px) {
  top: calc(100% - 30rem); /* ajusta para telas menores */
    left: 1rem; /* ajusta para telas menores */
    width: calc(100% - 2rem);
  }
`;

export const ResultItem = styled.li`
  padding: 0.6rem 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(0,0,0,0.05);
  }
`;

export default function SearchBar ({ value, onChange }) {
    return (
        <>
        <SearchContainer>
            <SearchIcon />
            <SearchInput
            type="text"
            placeholder="Pesquisar"
            value={value}
            onChange={onChange}
             />
        </SearchContainer>
        </>
    )
}