import React from "react";
import "./homepagestyle.css"
import brand1 from "../images/brand1.png"
import brand2 from "../images/brand2.png"
import brand3 from "../images/brand3.png"
import brand4 from "../images/brand4.png"
import brand5 from "../images/brand5.png"

function Brands()
{
    return(
        <div className="brandsstyle">
                <div className="container">
                    <div className="row"><h1 id="brandshead">Healthily Ready To Eat Food Brands</h1></div>
                    <div className="row">
                        <div className="col"><img src={brand1} alt=".." className="setimg"/></div>
                        <div className="col"><img src={brand2} alt=".." className="setimg"/></div>
                        <div className="col"><img src={brand3} alt=".." className="setimg"/></div>
                    </div>
                    <div className="row">
                        <div className="col"><img src={brand4} alt=".." className="setimg"/></div>
                        <div className="col"><img src={brand5} alt=".." className="setimg"/></div>
                        <div className="col"></div>
                    </div>
                </div>
        </div>
    );
}

export default Brands;