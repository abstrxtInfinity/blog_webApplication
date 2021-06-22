import React from 'react'
import '../Style/blogTile.css'

function BlogTile(props) {
    return (
        <>
            <div className="blog-tile">
                {props.imageUrl === "" ? <div className="empty"></div> : <div className="imgBox">
                    <img src={props.imageUrl} alt="" />
                </div>}
                <h3>{props.title}</h3>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatem dicta, officia nam natus vero deleniti perferendis, aut ipsum perspiciatis maxime asperiores voluptates quasi consectetur dolorem ratione doloribus ea possimus.
                    {/* {props.blogDescription} */}
                </p>
                <div className="tags">
                    {props.tags}
                </div>

            </div>
        </>
    )
}


export default BlogTile