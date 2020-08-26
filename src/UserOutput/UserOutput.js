import React from "react";
import './UserOutput.css';
const userOutput=( props )=>{
    const style = {
        border: '2px solid red'
    };
    return  (
        <div className="UserOutput">
            <p> Mi name is {props.name}</p>
            <p> and I live in Spain</p>
        </div>
    )
}
export default  userOutput;
