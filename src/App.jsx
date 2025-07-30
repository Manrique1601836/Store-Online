
import './App.css'
import Header from '../src/components/Header.jsx'
import { Routes, Route } from 'react-router-dom'

import Home from './view/Home.jsx'
import About from './view/About.jsx'
import Store from './view/Store.jsx'
import Contact from './view/Contact.jsx'

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/store" element={<Store/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App
