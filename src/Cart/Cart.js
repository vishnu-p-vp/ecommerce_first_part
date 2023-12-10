import React from "react";
import { useState, useEffect } from "react";
import Menu from "../Common/Menu";
import "./itemstyle.css"
// import {collection,doc,getDocs} from "firebase/firestore";
// import {db} from "../firebase-config";
import DisplayCartItems from "./DisplayCartItems";

function Cart(props)
{
    // const [allItems,setAllItems]=useState([]);
    // const [itemCategory,setItemCategory]=useState([]);

    // const allItemsRef=collection(db,"All Items");
    // useEffect(()=>{
    //     const getAllItems=async()=>{
    //         const data2=await getDocs(allItemsRef);
    //         setAllItems(data2.docs.map((doc)=>(
    //             {...doc.data(),id:doc.id}
    //         )))
    //     }
    //     getAllItems();
    // },[]);
    
    
        // for (let index = 0; index < props.cartItem.length; index++) {
        //     if(props.cartItem[index]==allItems.itemId){
        //         setItemCategory(allItems.category);
        //     }
        // }


    return(
        <div>
            <Menu/>
            <div className="carttop">
                <h1>Cart</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>
                <div className="container container2 rounded">
                    {/* <div className="row row2"> */}
                {props.itemCategory.map((itemCategory)=>{
                    return(<DisplayCartItems cname={itemCategory} cartItem={props.cartItem} removeItem={props.removeItem} buyNow={props.buyNow}/>)
                })}
                {/* </div> */}
                </div>
            {/* {props.cartItem} */}
            {/* {props.itemCategory} */}
            </div>
        </div>
    );
}

export default Cart;