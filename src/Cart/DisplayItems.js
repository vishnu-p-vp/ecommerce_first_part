import React, { useEffect, useState } from "react";
import {collection,doc,getDocs} from "firebase/firestore";
import {db} from "../firebase-config";
import "./itemstyle.css"

function DisplayItems(props)
{
    const [items,setItems]=useState([]);
    const categoryRef=collection(db,props.categoryName);
    useEffect(()=>{
        const getItems=async()=>{
            const data=await getDocs(categoryRef);
            setItems(data.docs.map((doc)=>(
                {...doc.data(),id:doc.id}
            )))
        }
        getItems();
    },[]);

 

    return(
        <div>
            

                        <div>
                            <div className="container rounded container1">
                                <div className="row categoryname"><h1>{props.categoryName}</h1></div>
                                <div className="row cardsstyle">
                                    {items.map((items)=>{
                                        return(
                                            <div className="col col-xl-3 col-lg-4 col-md-6">
                                                
                                                    <div class="card cardstyle">
                                                        <img src={items.imageURL} class="card-img-top" alt="..." height="255px"/>
                                                        <div class="card-body">
                                                            <h5 class="card-title">{items.itemName}</h5>
                                                            <h6 class="card-subtitle mb-2 text-muted">Rs.{items.itemPrice}</h6>
                                                            <h6 class="card-subtitle mb-2 text-muted">Quantity: {items.itemQuantity}g</h6>
                                                        
                                                            
                                                            <button type="button" 
                                                            class="btn btn-primary"
                                                            onClick={()=>props.addInCart(items.id,props.categoryName)}>
                                                                Add to Cart</button>
                                                        </div>
                                                    </div>
                                                
                                            </div>
                                            
                                        
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                         {/* <a href="#" class="btn btn-primary">Buy Now</a> */}   

                        {/* {" "}
                        <h1>{items.itemName}</h1>
                        <h1>{items.itemPrice}</h1>
                        <h1>{items.itemQuantity}</h1>
                        <h1>{items.itemDescription}</h1> */}
                    
        </div>
    );
}

export default DisplayItems;