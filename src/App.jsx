
import './App.css'
import Header from '../src/components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'

import Home from './view/Home.jsx'
import About from './view/About.jsx'

import Store from './view/Store.jsx'
import StoreHe from './view/StoreHe.jsx'
import StoreShe from './view/StoreShe.jsx'
import StoreSon from './view/StoreSon.jsx'


import Contact from './view/Contact.jsx'

import Bagar from './view/Bagshoopin.jsx'

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/store" element={<Store/>}></Route>
          <Route path="/store/he" element={<StoreHe/>}></Route>
          <Route path="/store/she" element={<StoreShe/>}></Route>
          <Route path="/store/son" element={<StoreSon/>}></Route>
          <Route path="/store/compra" element={<Bagar/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
