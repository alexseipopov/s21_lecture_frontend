import './App.css';
import Form from "./components/Form/Form";
import Content from "./components/Content/Content";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([]) // posts = []

    useEffect(() => {
        axios.get("/articles")
            .then(response => {
                console.log(response.data)
                setPosts(response.data.data.posts)
            })
    }, [])

    return (
        <div className="container">
            <Form setPosts={setPosts}/>
            <Content posts={posts}/>
        </div>
    );
}

export default App;
