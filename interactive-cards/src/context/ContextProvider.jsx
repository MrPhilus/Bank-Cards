import { createContext, useState } from "react";

export const CardContext = createContext();

const ContextProvider = ({ children }) => {
  const [holderName, setHolderName] = useState("");
  const [cardNum, setCardNum] = useState(0);
  const [expDateMonth, setExpDateMonth] = useState(0);
  const [expDateYear, setExpDateYear] = useState(0);
  const [cvcNum, setCvcNum] = useState(0);

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
