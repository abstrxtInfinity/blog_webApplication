import BlogTile from '../../Components/BlogTile/BlogTile'
import { BlogData } from '../../Data/BlogData'
import { Link } from "react-router-dom";
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
                            let path = '/post/' + index;
                            return (
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={path} >
                                    <BlogTile key={index} title={item.title} tags={item.tags} blogDescription={item.blog} imageUrl={item.imageUrl} id={index}/>
                                </Link>
                                
                            )
                        })
                    }
                </div>
            </section>

        </>
    )
}

export default Home
