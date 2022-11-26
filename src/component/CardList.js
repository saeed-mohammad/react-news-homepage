import React from "react";
import Card from "./Card";
import { info } from "./cardInfo";

const CardList = () => {
  return (
    <div className="cardlist">
      {info.map((item, index) => (
        <Card
          img={item.img}
          title={item.title}
          count={item.count}
          des={item.des}
          key={index}
        />
      ))}
    </div>
  );
};

export default CardList;
