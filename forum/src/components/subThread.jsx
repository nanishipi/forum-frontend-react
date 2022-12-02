import React, { useState } from "react";

// STYLES
import "../components/thread.css";

export default function Thread(props) {
    return (<>
        <img className="subThreadImage" src={props.imagelink} alt="threadImage"></img>
        <div className="column">
            <h4 className="subThreadCategory">Category: </h4>
            <p className="subThreadBody">Car goes vrrrrrrrrum</p>
        </div>
    </>);
}