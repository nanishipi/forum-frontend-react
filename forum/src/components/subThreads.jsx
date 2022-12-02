import { useState, useEffect } from 'react'

// STYLES
import "../components/thread.css";

export default function Thread(props) {
    const [subthreads, setSubthreads] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8080/subthreads")
        .then((res) => res.json())
        .then((data) => setSubthreads(data));
    }, []);

    const data = subthreads;
    const listItems = data.map(
        (element) => {
            return (<>
                <div className="subThreadCard">
                    <img className="subThreadImage" src={element.imageLink} alt="threadImage"></img>
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