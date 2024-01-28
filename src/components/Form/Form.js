import './Form.css';
import axios from "axios";
import {useState} from "react";

const Form = ({setPosts}) => {
    const [title, setTitle] = useState("") // title = ""
    const [content, setContent] = useState("") // title = ""

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("/articles", {
            title: title,
            content: content
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log(response.data)
                setPosts(response.data.data.posts)
        })
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="form__row">
                    <label htmlFor="title">Заголовок</label>
                    <input type="text" id="name" name="title" onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="form__row">
                    <label htmlFor="content">Текст поста</label>
                    <input maxLength={50} type="text" id="email" name="contant" onChange={e => setContent(e.target.value)}/>
                </div>
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default Form;