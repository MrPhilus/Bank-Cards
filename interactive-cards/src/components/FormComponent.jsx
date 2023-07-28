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

  const formatCardNumber = (input) => {
    // Remove all non-numeric characters from the input
    const cleanedInput = input.replace(/\D/g, "");

    // Divide the input into sets of 4 digits
    const formattedInput = cleanedInput.replace(/(.{4})/g, "$1 ");

    // Limit the input to a maximum of 16 digits
    const truncatedInput = formattedInput.substr(0, 19);

    return truncatedInput;
  };

  const handleChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNum(formattedValue);
  };
  return (
    <div>
      <form className="theForm" action="">
        <label className="labels" htmlFor="">
          CARDHOLDER NAME
        </label>
        <input
          type="text"
          onInput={(e) => setHolderName(e.target.value)}
          placeholder="e.g Jane Appleseed"
        />
        <label className="labels" htmlFor="">
          CARD NUMBER
        </label>
        <input
          type="text"
          onInput={(e) => setCardNum(e.target.value)}
          onChange={handleChange}
          pattern="\d*"
          maxLength="16"
          placeholder="e.g 1234 5678 9123 0000"
        />

        <div className="formBase">
          <div className="dateInputs">
            <label className="labels" htmlFor="">
              EXP. DATE (MM/YY)
            </label>
            <div>
              <input
                className="date"
                type="text"
                onInput={(e) => setExpDateMonth(e.target.value)}
                pattern="\d*"
                maxLength="2"
                placeholder="MM"
              />
              <label className="labels" htmlFor="" hidden>
                EXP. DATE (MM/YY)
              </label>
              <input
                className="date"
                type="text"
                onInput={(e) => setExpDateYear(e.target.value)}
                pattern="\d*"
                maxLength="2"
                placeholder="YY"
              />
            </div>
          </div>
          <div className="cvcInput">
            <label className="labels" htmlFor="">
              CVC
            </label>
            <input
              className="cvc"
              type="text"
              onInput={(e) => setCvcNum(e.target.value)}
              pattern="\d*"
              maxLength="3"
              placeholder="e.g 123"
            />
          </div>
        </div>
        <div className="submit">
          <button>Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
