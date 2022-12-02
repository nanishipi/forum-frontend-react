import { useState, useEffect } from 'react'
import SubThread from './subThread';
// STYLES
import "../components/thread.css";

export default function Thread(props) {
    const [isVisible, setIsVisible] = useState(false);

    const onThreadClickHandler = () => {
        setIsVisible(current => !current)
    }

    const onSubmitHandler = () => {
        // Using Fetch API
        fetch('/myserver.endpoint', {
            method: 'POST',
            body: JSON.stringify({
                // Add parameters here
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });

        console.log("Submited")
    }

    return (<>
        <div onClick={onThreadClickHandler} className="threadContainer">
            <img className="threadImage" src={props.imagelink} alt="threadImage"></img>
            <h2 className="threadTitle">{props.title}</h2>
        </div>
        <div style={{ display: isVisible ? 'block' : 'none' }} className="subThreadsContainer">
            <div>
                <h3>Create subthread</h3>
                <form>
                    <label htmlFor="postTitle">Title</label><br></br>
                    <input type="text" id="postTitle" required></input><br></br><br></br>
                    <label htmlFor="postCategory">Category</label><br></br>
                    <select name="origins" id="origins" required>
                        <option value="select" disabled selected>Select a Category</option>
                        <option value="doubt">{props.title} Doubt</option>
                        <option value="suggestion">{props.title} Suggestion</option>
                        <option value="clarification">{props.title} Clarification</option>
                    </select><br></br><br></br>
                    <label htmlFor="postBody">Body</label><br></br>
                    <textarea type="text" id="postBody"></textarea><br></br><br></br>
                    <label htmlFor="postImage">Image Link</label><br></br>
                    <input type="text" id="postImage"></input><br></br><br></br>
                    <button onClick={onSubmitHandler} className="submitBtn" type="submit" value="submit">Submit</button>
                </form>
            </div>
            <div>
                <h2 className="subThreadsTitle">Sub-Threads</h2>
            </div>
            <div className="nestedThreadContainer">
                <SubThread title={props.title} imagelink={props.imagelink}></SubThread>
            </div>
        </div>
    </>)
}