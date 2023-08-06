import "../App.css";
import { useContext } from "react";
import { CardContext } from "../context/ContextProvider";
import cardFront from "../assets/bg-card-front.png";
import cardBack from "../assets/bg-card-back.png";
import cardLogo from "../assets/card-logo.svg";

const CardComponent = () => {
  const { holderName, cardNum, expDateMonth, expDateYear, cvcNum } =
    useContext(CardContext);

  return (
    <div>
      <div className="cardOne">
        <img className="cardLogo" src={cardLogo} alt="" />
        <img className="cardOneBg" src={cardFront} alt="" />
        <p className="cardName">{holderName}</p>
        <p className="cardNumber">{cardNum.replace(/(.{4})/g, "$1 ")}</p>
        <p className="cardExp">
          {expDateMonth}/{expDateYear}
        </p>
      </div>
      <div className="cardTwo">
        <img className="cardTwoBg" src={cardBack} alt="" />
        <p className="cardCVC">{cvcNum}</p>
      </div>
    </div>
  );
};

export default CardComponent;
