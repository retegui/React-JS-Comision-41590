import './App.css';
import React from 'react';

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/itemDetailContainer';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import { CartContainer } from './components/CartContainer/CartContainer';
import Logo from './assets/img/logo.png';
import { Parallax} from './components/Parallax/Parallax';
import {Footer} from './components/Footer/Footer';
import { Mantenimiento } from './components/Mantenimiento/Mantenimiento';
 


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavBar><img src={Logo} alt=''></img></NavBar> 

          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path="/productos/:tipoProducto" element={<ItemListContainer />}/>
            <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
            <Route path='*' element={<ItemListContainer />}/>
          </Routes>        
        </div>
        <div>
          {/* <Parallax/> */}
          <Footer/>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
