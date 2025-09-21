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

export default function SearchBar (){
    return (
        <>
        <SearchContainer>
            <SearchIcon />
            <SearchInput type="text" placeholder="Pesquisar" />
        </SearchContainer>
        </>
    )
}