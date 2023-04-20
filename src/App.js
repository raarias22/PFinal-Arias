
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/NavBar/ItemListContainer";
import ItemDetailContainer from "./components/NavBar/ItemDetailContainer";
import Error404 from "./components/Error404";
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CarritoProvider } from './components/context/CartContext';
import { ToastContainer } from 'react-toastify';




function App() {
  return (
        <div >      
          <BrowserRouter >
          <CarritoProvider>
            <NavBar />
            <Routes>
              <Route path={"/"} element={<ItemListContainer />} />
              <Route path={"/category/:id"} element={<ItemListContainer />} />
              <Route path={"/item/:id"} element={<ItemDetailContainer />} />
              <Route path={"*"} element={<Error404 />} />
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>     
            </CarritoProvider>      
          </BrowserRouter>
          


        </div>
  );
}

export default App;