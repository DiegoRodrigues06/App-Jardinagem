import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './GlobalStyles/Styles'
import Home from './containers/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Home />
  </StrictMode>,
)
