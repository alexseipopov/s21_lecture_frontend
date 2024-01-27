import './Form.css';

const Form = () => {
    return (
        <div className="form">
            <form onSubmit={e => {
                e.preventDefault()
                console.log("submit")
            }}>
                <div className="form__row">
                    <label htmlFor="title">Заголовок</label>
                    <input type="text" id="name" name="title" />
                </div>
                <div className="form__row">
                    <label htmlFor="content">Текст поста</label>
                    <input maxLength={50} type="text" id="email" name="contant" />
                </div>
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default Form;