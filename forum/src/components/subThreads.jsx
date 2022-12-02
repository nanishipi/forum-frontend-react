import React, { useState } from "react";

// STYLES
import "../components/thread.css";

export default function Thread(props) {
    const data = [
        {
            "title": "Car subthread",
            "category": "Doubt",
            "body": "This is a thread body",
            "image": "https://i.kym-cdn.com/entries/icons/mobile/000/026/489/crying.jpg"
        },
        {
            "title": "Car subthread",
            "category": "Doubt",
            "body": "This is a thread body",
            "image": "https://i.kym-cdn.com/entries/icons/mobile/000/026/489/crying.jpg"
        }
    ]
    const listItems = data.map(
        (element) => {
            return (<>
                <div className="subThreadCard">
                    <img className="subThreadImage" src={element.image} alt="threadImage"></img>
                    <div className="column">
                        <h4 className="subThreadTitle"> {element.title}</h4>
                        <h4 className="subThreadCategory">Category: {element.category}</h4>
                        <p className="subThreadBody">{element.body}</p>
                    </div>
                </div>
            </>)
        }
    )
    return (
        <div className='subThreadsContainer'>
            {listItems}
        </div>
    )
}