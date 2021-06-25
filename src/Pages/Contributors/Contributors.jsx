import CircleCard from '../../Components/CircularCard/circular_card.jsx'
import './contributors.css'
import { BloggersData } from '../../Data/bloggersData'

function Contributors() {
    return (
        <>
            <section>

                <h2>Bloggers</h2>
                <div className=" blogger">
                    {
                        BloggersData.map((item, index) => {
                            return (
                                <CircleCard name={item.name} imgUrl={item.imageUrl} githubUrl={item.githubUrl} />
                            )
                        })
                    }

                </div>
                <h2>Developer</h2>
                <div className=" developer" >
                    <div className="card">
                        <div className="imgBx">
                            <img
                                src="https://i.ibb.co/cF3R9Jj/IMG-20200222-164350.jpg"
                                alt="404"
                            />
                        </div>
                        <div className="details">
                            <h2>Anant Verma</h2>
                            <div className="social-icons">
                                <a href="https://www.instagram.com/abstractinfinity0519/" target="_blank"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                                ></a>
                                <a href="https://www.aedin.com/in/abstrxtinfinity/" target="_blank"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                                ></a>
                                <a href="https://github.com/abstrxtInfinity" target="_blank"
                                ><i className="fa fa-github" aria-hidden="true"></i
                                ></a>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Contributors
