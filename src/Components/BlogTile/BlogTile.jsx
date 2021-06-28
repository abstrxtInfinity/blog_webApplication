import './blogTile.css'
import { Link } from "react-router-dom";

function BlogTile(props) {
    return (
        <>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: `/post/${props.id}`, state: { data: props }, }} >
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
            </Link>
            
        </>
    )
}


export default BlogTile