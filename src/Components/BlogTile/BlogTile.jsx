import './blogTile.css'

function BlogTile(props) {
    return (
        <>
            <div className="blog-tile">
                {
                    props.imageUrl === "" ? <div className="empty"></div> : <div className="imgBox">
                        <img src={props.imageUrl} alt="" />
                    </div>
                }
                <h3>{props.title}</h3>
                <p className="description">
                    {props.blogDescription}
                </p>
                <div className="tags">
                    {props.tags}
                </div>

            </div>
        </>
    )
}


export default BlogTile