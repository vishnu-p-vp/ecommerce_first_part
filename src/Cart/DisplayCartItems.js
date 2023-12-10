import React, { useState, useEffect } from "react";
import {collection,doc,getDocs} from "firebase/firestore";
import {db} from "../firebase-config";
import "./itemstyle.css"

function DisplayCartItems(props)
{

    const [items3,setItems3]=useState([]);

    const categoryRef3=collection(db,props.cname);
    useEffect(()=>{
        const getItems3=async()=>{
            const data3=await getDocs(categoryRef3);
            setItems3(data3.docs.map((doc)=>(
                {...doc.data(),id:doc.id}
            )))
        }
        getItems3();
    },[]);

    return(
        <div>
            <div className="container container2 rounded">
                {items3.map((items3)=>{
                    // return(<div>{items3.itemPrice}</div>)
                    // {props.cartItem.map((cartitem)=>{
                        if(items3.id==props.cartItem)
                        {
                            return(
                                <div>
                                <div className="container">
                                        <div className="row row2">
                                            <div className="col">
                                                <img src={items3.imageURL} class="imageset" alt="..."/>
                                            </div>
                                             <div className="col col2">
                                                <h3>{items3.itemName}</h3><br/>
                                                <h4>Rs.{items3.itemPrice}</h4>
                                            </div>
                                        </div> 
                                </div>
                                </div>
                                
                            )
                        }
                    // })}
                    
                })}
            </div>
            {/* <button type="button" class="btn btn-primary">Buy Now</button> */}
        </div>
    );
}

export default DisplayCartItems;