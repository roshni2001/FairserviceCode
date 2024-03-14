import React from "react";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import "./styles/card.css";
const Card = (props) => {
  return (
    <div className="card card_serv">
      <img src={props.image} alt={props.title} />
      <div className="card-body">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <div className="cardLink">
          <Link to={props.link}  rel="noreferrer">
            Visit
          </Link>
        </div>
        {/* <NavLink to={props.link}>Explore</NavLink> */}
      </div>
    </div>
  );
};

export default Card;
