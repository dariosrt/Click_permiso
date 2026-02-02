import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Body } from './components/Body'
import { Header } from './components/Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header></Header>
    <Body></Body>
  </StrictMode>,
  
)
