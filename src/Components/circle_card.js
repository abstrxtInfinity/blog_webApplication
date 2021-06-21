import React from 'react'
import { Link } from 'react-router-dom';

function CircleCard(props) {

    return (
        <>
            <div className="circle-card">
                <div className="imgBx">
                    <img src={props.imgUrl} alt="users" />
                </div>
                <div className="details">
                    <h3>{props.name}</h3>
                    <Link to={props.githubUrl}
                    ><i className="fa fa-github" aria-hidden="true"></i
                    ></Link>
                </div>
            </div>
        </>
    )
}

export default CircleCard
