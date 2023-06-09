import React from "react";
import "./index.css"

export const StartButton = props => {
    const validateEmail = hostname => {
        if(hostname === null || typeof hostname === "undefined") {
            return false;
        }
        let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let result = hostname.match(emailRegex);
        return (result === null || result.length === 0) ? false : true;
    }
    return (<div class="start-button" onClick={e => {
        if(!validateEmail(props.email)) {
            alert("Please enter a valid email");
            return;
        }
        window.location.href="https://app.loch.one/welcome";
    }}>Get Started</div>)
}