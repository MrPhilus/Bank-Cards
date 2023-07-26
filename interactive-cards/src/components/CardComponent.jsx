import "../App.css";
import { useContext } from "react";
import { CardContext } from "../context/ContextProvider";

const CardComponent = () => {
  const { holderName, cardNum, expDateMonth, expDateYear, cvcNum } =
    useContext(CardContext);

  return (
    <div>
      <div className="cardOne">
        <p>{holderName}</p>
        <p>{cardNum}</p>
        <p>{expDateMonth}</p>
        <p>{expDateYear}</p>
      </div>
      <div className="cardTwo">
        <p>{cvcNum}</p>
      </div>
    </div>
  );
};

export default CardComponent;
