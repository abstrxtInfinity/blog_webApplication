import { Link } from 'react-router-dom';
import "./circular_card.css"

function CircleCard(props) {

    return (
        <>
            <div className="circle-card">
                <div className="imgBx">
                    <img src={props.imgUrl} alt="users" />
                </div>
                <div className="details">
                    <h3>{props.name}</h3>
                    {props.githubUrl === "" ? <Link to="#"><i className="fas fa-ghost"></i></Link> : <a target="_blank" href={props.githubUrl}
                    ><i className="fa fa-github" aria-hidden="true"></i
                    ></a>}


                </div>
            </div>
        </>
    )
}

export default CircleCard

