import React, { useState } from "react";

import Menu from "../Common/Menu";
import Slidingimages from "./Slidingimages";
import Quotes from "./Quotes";
import DisplayCategory from "../Cart/DisplayCategory";
import Homeaboutus from "./Homeaboutus";
import Brands from "./Brands";
import Footer from "../Common/Footer";


function Homepage({addInCart})
{

    return(
        <div>
            <Menu/>
            <Slidingimages/>
            <Quotes/>
            <DisplayCategory addInCart={addInCart}/>
            <Homeaboutus/>
            {/* <Brands/> */}
            <Footer/>
        </div>
    );
}

export default Homepage;