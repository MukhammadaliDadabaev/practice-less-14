import React from "react";


const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.imgSrc} alt="movies" />
      <p>{props.produced}</p>
      <p>{props.liked}</p>
    </div>
  ); 
};

export default Card;