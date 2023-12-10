import React, { useState } from "react";
import DisplayItems from "./DisplayItems";

function DisplayCategory({addInCart})
{

    return(
        <div>
            <DisplayItems categoryName="Snacks" addInCart={addInCart}/>
            <DisplayItems categoryName="Sweets" addInCart={addInCart}/>
            <DisplayItems categoryName="Pickles and Sauces" addInCart={addInCart}/>
        </div>
    );
}

export default DisplayCategory;