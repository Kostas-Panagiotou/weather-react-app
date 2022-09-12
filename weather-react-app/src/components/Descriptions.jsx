import React from "react";
import "./descriptions.css";

import { FaArrowDown } from "react-icons/fa";

const Descriptions = () => {
    return (
        <div className="section section_description">
           <div className="card">
            <div className="description__card-icon">
                <FaArrowDown />
                <small>min</small>
                <h2>32 °C</h2>
            </div>
           </div>
         </div>
    )
};

export default Descriptions;