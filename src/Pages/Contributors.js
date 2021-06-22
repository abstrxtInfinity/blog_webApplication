import React from 'react'
import CircleCard from '../Components/circle_card'
import '../Style/contributors.css'
import { Link } from 'react-router-dom';

function Contributors() {
    return (
        <>
            <section>

                <h2>Bloggers</h2>
                <div className=" blogger">
                    <CircleCard name="Anant Verma" imgUrl="https://source.unsplash.com/user/erondu" githubUrl="" />
                    <CircleCard name="Elon Musk" imgUrl="https://source.unsplash.com/random" githubUrl="" />
                    <CircleCard name="Stephen Hawking" imgUrl="https://source.unsplash.com/user/john" githubUrl="" />
                    <CircleCard name="Stephen Hawking" imgUrl="https://source.unsplash.com/user/doe" githubUrl="" />
                    <CircleCard name="Stephen Hawking" imgUrl="https://source.unsplash.com/user/john" githubUrl="" />
                    <CircleCard name="Stephen Hawking" imgUrl="https://source.unsplash.com/user/john" githubUrl="" />
                    <CircleCard name="Stephen Hawking" imgUrl="https://source.unsplash.com/user/smith" githubUrl="" />
                    <CircleCard name="Stephen Hawking" imgUrl="https://source.unsplash.com/user/john" githubUrl="" />
                    <CircleCard name="Stephen Hawking" imgUrl="https://source.unsplash.com/user/john" githubUrl="" />
                    <CircleCard name="Stephen Hawking" imgUrl="https://source.unsplash.com/user/john" githubUrl="" />

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
                                <Link to="https://www.instagram.com/abstractinfinity0519/"
                                ><i className="fa fa-instagram" aria-hidden="true"></i
                                ></Link>
                                <Link to="https://www.linkedin.com/in/abstrxtinfinity/"
                                ><i className="fa fa-linkedin" aria-hidden="true"></i
                                ></Link>
                                <Link to="https://github.com/abstrxtInfinity"
                                ><i className="fa fa-github" aria-hidden="true"></i
                                ></Link>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Contributors
