import BlogTile from '../../Components/BlogTile/BlogTile'
import { BlogData } from '../../Data/BlogData'
import './home.css'

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
                                <BlogTile key={index} title={item.title} tags={item.tags} blogDescription={item.blog} imageUrl={item.imageUrl} id={index}/>

                            )
                        })
                    }
                </div>
            </section>

        </>
    )
}

export default Home
