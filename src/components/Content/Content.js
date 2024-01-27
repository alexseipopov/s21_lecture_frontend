import './Content.css'
import {useState} from "react";

const Content = () => {
    const [posts, setPosts] = useState([]) // posts = []

    if (posts.length === 0) {
        return (
            <div className="content">
                <p>Постов нет</p>
            </div>
        );
    }

    return (
        <div className="content">
            <h1>Content</h1>
        </div>
    );
}

export default Content;