import { CardContext } from "../context/ContextProvider";
import { useContext } from "react";
import "../App.css";

const FormComponent = () => {
  const {
    holderName,
    setHolderName,
    cardNum,
    setCardNum,
    expDateMonth,
    setExpDateMonth,
    expDateYear,
    setExpDateYear,
    cvcNum,
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
          placeholder={holderName}
        />
        <label className="labels" htmlFor="">
          CARD NUMBER
        </label>
        <input
          type="text"
          onInput={(e) => setCardNum(e.target.value)}
          onChange={handleChange}
          maxLength="16"
          placeholder={cardNum}
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
                // onInput={(e) => {
                //   const monthValue = e.target.value.replace(/\D/g, "");
                //   setExpDateMonth(monthValue.padStart(2, "0"));
                // }}
                // onInput={(e) => {
                //   const monthValue = e.target.value.replace(/\D/g, "");
                //   // Limit the month value to 12
                //   const validMonth = Math.min(parseInt(monthValue, 10), 12);
                //   // Ensure two-digit format with leading zero for months 1 to 9
                //   const formattedMonth = validMonth.toString().padStart(2, "0");
                //   setExpDateMonth(formattedMonth);
                // }}
                onInput={(e) => {
                  const monthValue = e.target.value.replace(/\D/g, "");
                  // Parse the numeric value. If it's not a valid number, set it to 0
                  const validMonth = parseInt(monthValue, 10) || 0;
                  // Limit the month value to a range of 0 to 12
                  const clampedMonth = Math.max(Math.min(validMonth, 12), 0);
                  // Ensure two-digit format with leading zero for months 1 to 9
                  const formattedMonth = clampedMonth
                    .toString()
                    .padStart(2, "0");
                  setExpDateMonth(formattedMonth);
                }}
                maxLength="2"
                placeholder={expDateMonth}
              />
              <label className="labels" htmlFor="" hidden>
                EXP. DATE (MM/YY)
              </label>
              <input
                className="date"
                type="text"
                onInput={(e) => {
                  const yearValue = e.target.value.replace(/\D/g, "");
                  setExpDateYear(yearValue.padStart(2, "0"));
                }}
                maxLength="2"
                placeholder={expDateYear}
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
              onInput={(e) => {
                const cvcValue = e.target.value.replace(/\D/g, "");
                setCvcNum(cvcValue.padStart(3, "0"));
              }}
              maxLength="3"
              placeholder={cvcNum}
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
