import React from "react";
import "./index.css"

export const EmailInput = props => {
    return (<input class="email-input"
     onChange={e => {
        e.preventDefault();
        props.setEmail(e.target.value);
        
     }} 
     placeholder="Your email address"
     value={props.email}/>)
} 