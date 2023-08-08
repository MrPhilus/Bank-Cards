/* eslint-disable react/no-unescaped-entities */
import { CardContext } from "../context/ContextProvider";
import { useContext } from "react";
import { useFormik } from "formik";
import "../App.css";
import done from "../assets/icon-complete.svg";

const FormComponent = () => {
  const {
    setHolderName,
    setCardNum,
    setExpDateMonth,
    setExpDateYear,
    setCvcNum,
    isSubmitted,
    setIsSubmitted,
  } = useContext(CardContext);

  const handleFormSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    setIsSubmitted(true);
  };

  const formik = useFormik({
    initialValues: {
      holderName: "",
      cardNum: "",
      expDateMonth: "",
      expDateYear: "",
      cvcNum: "",
    },
    onSubmit: handleFormSubmit,
    validate: (values) => {
      const errors = {};
      if (!values.holderName) {
        errors.holderName = "Can't be blank";
      }
      if (!values.cardNum) {
        errors.cardNum = "Can't be blank";
      } else if (!/^\d*$/i.test(values.cardNum)) {
        errors.cardNum = "Wrong format,numbers only";
      } else if (values.cardNum.length !== 16) {
        errors.cardNum = "Card number must be 16 digits";
      }
      if (!values.expDateMonth && !values.expDateYear) {
        errors.expDateMonth = "Can't be blank";
      } else if (!/^\d*$/i.test(values.expDateMonth)) {
        errors.expDateMonth = "Months must be numbers only";
      } else if (values.expDateMonth > 12) {
        errors.expDateMonth = "Invalid month";
      }
      if (!values.expDateYear) {
        errors.expDateYear = "Can't be blank";
      } else if (!/^\d*$/i.test(values.expDateYear)) {
        errors.expDateYear = "Years must be numbers only";
      }
      if (!values.cvcNum) {
        errors.cvcNum = "Can't be blank";
      } else if (!/^\d*$/i.test(values.cvcNum)) {
        errors.cvcNum = "Numbers only";
      }

      return errors;
    },
  });

  return (
    <div>
      {isSubmitted ? (
        <div className="confirmed">
          <img src={done} alt="" />
          <h2>THANK YOU!</h2>
          <p>We've added your card details</p>
          <button>Continue</button>
        </div>
      ) : (
        <form className="theForm" onSubmit={formik.handleSubmit}>
          <label className="labels" htmlFor="holderName">
            CARDHOLDER NAME
          </label>
          <input
            type="text"
            name="holderName"
            value={formik.values.holderName}
            onChange={formik.handleChange}
            onInput={(e) => setHolderName(e.target.value)}
            onBlur={formik.handleBlur}
            maxLength="20"
            className={
              formik.errors.holderName && formik.touched.holderName
                ? "error-input"
                : ""
            }
            placeholder={"Jane Appleseed"}
          />
          {formik.errors.holderName && formik.touched.holderName ? (
            <p className="error-text">{formik.errors.holderName}</p>
          ) : null}

          <label className="labels" htmlFor="cardNum">
            CARD NUMBER
          </label>
          <input
            type="text"
            name="cardNum"
            value={formik.values.cardNum}
            onChange={formik.handleChange}
            onInput={(e) => setCardNum(e.target.value)}
            onBlur={formik.handleBlur}
            maxLength="16"
            className={
              formik.errors.cardNum && formik.touched.cardNum
                ? "error-input"
                : ""
            }
            placeholder={"0000 0000 0000 0000"}
          />
          {formik.errors.cardNum && formik.touched.cardNum && (
            <p className="error-text">{formik.errors.cardNum}</p>
          )}

          <div className="formBase">
            <div className="dateInputs">
              <label className="labels" htmlFor="expDateMonth">
                EXP. DATE (MM/YY)
              </label>
              <div>
                <input
                  className={
                    formik.errors.expDateMonth && formik.touched.expDateMonth
                      ? "error-date"
                      : "date"
                  }
                  onBlur={formik.handleBlur}
                  type="text"
                  name="expDateMonth"
                  value={formik.values.expDateMonth}
                  onChange={formik.handleChange}
                  onInput={(e) => {
                    setExpDateMonth(e.target.value.padStart(2, "0"));
                  }}
                  maxLength="2"
                  placeholder={"MM"}
                />

                <label className="labels" htmlFor="expDateYear" hidden>
                  EXP. DATE (MM/YY)
                </label>
                <input
                  className={
                    formik.errors.expDateYear && formik.touched.expDateYear
                      ? "error-date"
                      : "date"
                  }
                  type="text"
                  name="expDateYear"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.expDateYear}
                  onInput={(e) => {
                    setExpDateYear(e.target.value.padStart(2, "0"));
                  }}
                  maxLength="2"
                  placeholder={"YY"}
                />
              </div>
              {formik.errors.expDateMonth && formik.touched.expDateMonth ? (
                <p className="error-text">{formik.errors.expDateMonth}</p>
              ) : formik.errors.expDateYear && formik.touched.expDateYear ? (
                <p className="error-text">{formik.errors.expDateYear}</p>
              ) : null}
            </div>

            <div className="cvcInput">
              <label className="labels" htmlFor="cvcNum">
                CVC
              </label>
              <input
                className={
                  formik.errors.cvcNum && formik.touched.cvcNum
                    ? "error-cvc"
                    : "cvc"
                }
                type="text"
                name="cvcNum"
                value={formik.values.cvcNum}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                onInput={(e) => {
                  setCvcNum(e.target.value.padStart(3, "0"));
                }}
                maxLength="3"
                placeholder={"123"}
              />
              {formik.errors.cvcNum && formik.touched.cvcNum && (
                <p className="error-text">{formik.errors.cvcNum}</p>
              )}
            </div>
          </div>
          <div className="submit">
            <button type="submit">Confirm</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormComponent;
