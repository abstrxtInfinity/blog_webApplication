import './blogPost.css'
import { Link } from "react-router-dom";


export default function BlogPost(props) {
    const blogData = props.location.state.data;
    return (
        <>
            <Link to="/"><button className="close-btn">X</button></Link>
            <section className="singlePostContainer">
                <div className="singlePost">
                    {blogData.imageUrl == "" ?
                        <div className="empty"></div>
                    : <div className="imgBx">
                        <img src={blogData.imageUrl} alt="" className="singlePostImg" />
                    </div>}
                    <div className="head">
                        <h2 className="title">{blogData.title }</h2>
                    <h3 className="author">Author: {blogData.author }</h3>
                    </div>
                    <div className="blog">
                        <p>{blogData.blogDescription}</p>
                    </div>
                    <hr className="hr-tag"/>
                </div>
            </section>
        </>
    )
}
