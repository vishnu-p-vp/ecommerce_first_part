import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {Route,Link,BrowserRouter as Router, Routes} from "react-router-dom";

import Homepage from './Homepage/Homepage';
// import { ToastContainer } from 'react-toastify';
import Menu from './Common/Menu';

import Cart from './Cart/Cart';

function App() {

  const [cartItem,setCartItem]=useState([]);
  const [itemCategory,setItemCategory]=useState([]);

    const addInCart=(iid,cname)=>{
        let existence=-1
        for (let index = 0; index < cartItem.length; index++) {
            if(cartItem[index]==iid){
                existence=0;
            }
            
        }
        if(existence!==-1){
            alert("Item already added in cart")
            return;
        }
        // const isAlreadyAdded=cartItem.findIndex(function(array){
        //     return array.id===iid
        // })

        // if(isAlreadyAdded!==-1){
        //     alert("Item already added to cart")
        //     return;
        // }
        
        setCartItem([...cartItem,iid]);
        setItemCategory([...itemCategory,cname]);
        alert("Item added to cart successfully");
    }

    const buyNow=()=>{
        setCartItem([])
        alert("Purchase Complete");
    }

    const removeItem=(item)=>{
        setCartItem(cartItem.filter(sigleItem => sigleItem.id !== item.id))
    }

  return (
    // <div className="App">
    //   <Homepage/>
    // </div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage addInCart={addInCart}/>}/>
        <Route exact path="/cart" element={<Cart cartItem={cartItem} itemCategory={itemCategory} removeItem={removeItem} buyNow={buyNow}/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
