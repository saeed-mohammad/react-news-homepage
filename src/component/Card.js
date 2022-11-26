import React from "react";
import img1 from "../assets/images/image-retro-pcs.jpg";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <div className="content">
        <h3>{props.count}</h3>
        <h4>{props.title}</h4>
        <p>{props.des}</p>
      </div>
    </div>
  );
};

export default Card;
