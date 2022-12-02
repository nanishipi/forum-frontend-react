import { useState, useEffect } from 'react'
import SubThreads from './subThreads';

// STYLES
import "../components/thread.css";

export default function Thread(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [body, setBody] = useState('');
    const [imageLink, setImageLink] = useState('');

    const onThreadClickHandler = () => {
        setIsVisible(current => !current)
    }

    const handleTitleChange = event => {
        setTitle(event.target.value);
    }

    const handleCategoryChange = event => {
        setCategory(event.target.value);
    }

    const handleBodyChange = event => {
        setBody(event.target.value);
    }

    const handleImageLinkChange = event => {
        setImageLink(event.target.value);
    }

    const onSubmitHandler = async () => {
        // Using Fetch API
        await fetch('http://localhost:8080/subthreads', {
            method: 'POST',
            body: JSON.stringify({
                "title": title,
                "category": category,
                "body": body,
                "imageLink": imageLink
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
        <div style={{ display: isVisible ? 'block' : 'none' }} className="subThreadsMainContainer">
            <div>
                <h3>Create subthread</h3>
                <form>
                    <label htmlFor="postTitle">Title</label><br></br>
                    <input onChange={handleTitleChange} type="text" id="postTitle" required></input><br></br><br></br>
                    <label htmlFor="postCategory">Category</label><br></br>
                    <select onChange={handleCategoryChange} name="categories" id="categories" required>
                        <option value="select" defaultValue disabled>Select a Category</option>
                        <option value="doubt">{props.title} Doubt</option>
                        <option value="suggestion">{props.title} Suggestion</option>
                        <option value="clarification">{props.title} Clarification</option>
                    </select><br></br><br></br>
                    <label htmlFor="postBody">Body</label><br></br>
                    <textarea onChange={handleBodyChange} type="text" id="postBody"></textarea><br></br><br></br>
                    <label htmlFor="postImage">Image Link</label><br></br>
                    <input onChange={handleImageLinkChange} type="text" id="postImage"></input><br></br><br></br>
                    <button onClick={onSubmitHandler} className="submitBtn" type="submit" value="submit">Submit</button>
                </form>
            </div>
            <div>
                <h2 className="subThreadsTitle">Sub-Threads</h2>
            </div>
            <div>
                <SubThreads></SubThreads>
            </div>
        </div>
    </>)
}