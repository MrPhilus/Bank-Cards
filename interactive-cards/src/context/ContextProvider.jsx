/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CardContext = createContext();

const ContextProvider = ({ children }) => {
  const [holderName, setHolderName] = useState("Jane Appleseed");
  const [cardNum, setCardNum] = useState("0000000000000000");
  const [expDateMonth, setExpDateMonth] = useState("MM");
  const [expDateYear, setExpDateYear] = useState("YY");
  const [cvcNum, setCvcNum] = useState(123);

  const objectsPassed = {
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
  };

  return (
    <CardContext.Provider value={objectsPassed}>
      {children}
    </CardContext.Provider>
  );
};

export default ContextProvider;
