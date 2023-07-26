import { CardContext } from "../context/ContextProvider";
import { useContext } from "react";
import "../App.css";

const FormComponent = () => {
  const {
    setHolderName,
    setCardNum,
    setExpDateMonth,
    setExpDateYear,
    setCvcNum,
  } = useContext(CardContext);
  return (
    <div>
      <form className="theForm" action="">
        <label htmlFor="">CARDHOLDER NAME</label>
        <input type="text" onInput={(e) => setHolderName(e.target.value)} />
        <label htmlFor="">CARD NUMBER</label>
        <input type="number" onInput={(e) => setCardNum(e.target.value)} />
        <label htmlFor="">EXP. DATE (MM/YY)</label>
        <label htmlFor="">CVC</label>
        <div className="formBase">
          <input
            className="date"
            type="number"
            onInput={(e) => setExpDateMonth(e.target.value)}
          />
          <input
            className="date"
            type="number"
            onInput={(e) => setExpDateYear(e.target.value)}
          />

          <input type="number" onInput={(e) => setCvcNum(e.target.value)} />
        </div>

        <div className="submit">
          <button>Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
