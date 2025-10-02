import styled from 'styled-components'

const colors = {
  primary: "#c7e0be", 
  primaryDark: "#b4d6a9", 
  background: "#a5c8ca",
  background2: "#e3e5d7", 
  formBackground: "#ffffff", 
  text: "#333333", 
  textLight: "#7f8c8d", 
  border: "#bdc3c7", 
  white: "#fff",
  bgcolor: "#fcfbf8",
  textcolorprimary: "#3d453f",
  textcolorsecondary: "#8a9188",
  searchbg: "#f5f4f0",
  cardbg: "#fbeee4",
  buttonbg: "#3d453f",
  buttontext: "#ffffff",
  bordercolor: "#ebeae6",
};

const PageContainer = styled.div`
    background-color: ${colors.bgcolor};
    min-height: 100vh;
    padding: 20px;
`;

const FormContainer = styled.form`
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    max-width: 600px;
    margin-top: 10rem;
    margin-left: auto;
    margin-right: auto;
    background-color: ${colors.formBackground};
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h3`
  color: ${colors.textcolorprimary};
  margin: 0;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  
`;

const RadioInput = styled.input`
  accent-color: ${colors.textcolorprimary};
  width: 1.3em;
  height: 1.3em;

  &:focus-within {
    accent-color: ${colors.textcolorsecondary};
  }  
`;

const TextField = styled.input`
  margin-top: 2.5rem;
  border-bottom: 2px solid ${colors.border};
  border-top: none;
  border-left: none;
  border-right: none;
  background: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  color: ${colors.textcolorsecondary};
  margin-bottom: 1.5rem;
`;

const Options = styled.select`
  width: 10rem;
  margin-left: 1rem;
  font-family: 'Poppins', sans-serif;
  padding: 12px 15px;
  border-radius: 8px;
  border: 2px solid ${colors.border};
  background-color: ${colors.bgcolor};
  font-size: 1rem;
  color: ${colors.textcolorprimary};
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;

  &:hover, &:focus {
    border-color: ${colors.textcolorsecondary};
    outline: none;
    background-color: ${colors.background2};
`;

const ButtonContainer = styled.button`
  margin-top: 8rem;
  width: 10rem;
  padding: 12px;
  margin-right: auto;
  background-color: ${colors.buttonbg};
  color: ${colors.buttontext};
  border: none;
  border-radius: 13px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primaryDark};
    color: ${colors.buttonbg};
    transition: background-color 0.5s ease;
    transition: color 0.5s ease;
  }
`;

const ImageContainer = styled.div`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  border-color: ${colors.bordercolor};
  min-width: 200px;
  min-height: 225px;
  background-color: ${colors.cardbg};  /* Certifique-se de que colors.cardbg está definido corretamente */
  border-radius: 5px;
  overflow: hidden;
  border: 2px solid #ccc;  /* Adicione uma borda para verificar a área visível */
`;

const EndContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export {
    PageContainer,
    FormContainer,
    Header, 
    Title,
    Label,
    RadioInput,
    TextField, 
    Options, 
    ButtonContainer,
    ImageContainer,
    EndContainer
};