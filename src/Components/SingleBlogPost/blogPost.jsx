import Sidebar from '../Sidebar/Sidebar'
import { BlogData } from '../../Data/BlogData'
import './blogPost.css'

export default function BlogPost() {
    return (
        <>
            <section className="singlePostContainer">
                <div className="singlePost">
                    <div className="imgBx">
                        <img src={BlogData[0].imageUrl} alt="" className="singlePostImg" />
                    </div>
                    <div className="head">
                        <h2 className="title">{BlogData[0].title }</h2>
                    <h3 className="author">Author: {BlogData[0].author }</h3>
                    </div>
                    <div className="blog">
                        <p>{
                            BlogData[0].blog
                        }</p>
                    </div>
                    <hr className="hr-tag"/>
                </div>
            </section>
        </>
    )
}
