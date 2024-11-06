import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Land from './Land.jsx'
// import Lagoon from './Lagoon.jsx'
// import a from './abcd.jsx'
import Abcd from './Abcd'

createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* <Lagoon/> */}
 <Abcd/>
  </StrictMode>
)
