import React from 'react'
import BlogTile from '../Components/BlogTile'
import { BlogData } from '../Components/Data/BlogData'
import '../Style/home.css'
function Home() {
    return (
        <>
            <section className="blog-section">
                <div className="heading">
                     <h2>Here is where we tell our stories</h2>
               </div>
                <div className="blogs">
                {
                BlogData.map((item, index) => {
                    return (
                        <BlogTile key={index} title={item.title} tags={item.tags}  blogDescription={item.blog} imageUrl={ item.imageUrl}/>

                    )
                })
            }
            </div>
            </section>
        </>
    )
}

export default Home
