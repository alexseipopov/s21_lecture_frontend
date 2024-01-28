import './Content.css'


const Content = ({posts}) => {

    if (posts.length === 0) {
        return (
            <div className="content">
                <p>Постов нет</p>
            </div>
        );
    }

    return (
        <div className="content">
            {posts.map((post, i) =>
                (
                    <div key={i} className="content__item">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                )
            )}
        </div>
    );
}

export default Content;