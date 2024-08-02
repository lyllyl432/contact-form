import { useEffect, useState } from "react";
import "./Form.css";
import radioSvg from "./assets/images/icon-radio-selected.svg";
import checkSvg from "./assets/images/icon-checkbox-check.svg";
import { validateEmail } from "./Utils";

const Form = () => {
  const [activeRadio, setActiveRadio] = useState(null);
  const [activeCheckBox, setActiveCheckBox] = useState(false);
  const [fieldInput, setFieldInput] = useState({
    "first-name": "",
    "last-name": "",
    "email-address": "",
    "query-type": null,
    message: "",
    consent: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    firstNameError: "",
    lastNameError: "",
    emailAddressError: "",
    queryTypeError: "",
    messageError: "",
    consentError: "",
  });
  // handle radio click event
  const handleRadioClick = (num) => {
    setActiveRadio(num);
  };
  // handle checkbox click event
  const handleCheckBoxClick = () => {
    setActiveCheckBox(!activeCheckBox);
  };
  //handle submit form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //set object empty for input updates
    setErrorMessage({
      firstNameError: "",
      lastNameError: "",
      emailAddressError: "",
      queryTypeError: "",
      messageError: "",
      consentError: "",
    });
    const fieldMessage = "This field is required";
    const queryTypeMessage = "Please select a query type";
    const emailAddressMessage = "Please enter a valid email address";
    const consentMessage =
      "To submit this form, please consent to being contacted";

    if (fieldInput["first-name"] === "") {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        firstNameError: fieldMessage,
      }));
    }
    if (fieldInput["last-name"] === "") {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        lastNameError: fieldMessage,
      }));
    }
    if (fieldInput["email-address"] === "") {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        emailAddressError: fieldMessage,
      }));
    } else {
      if (!validateEmail(fieldInput["email-address"])) {
        setErrorMessage((errorMessage) => ({
          ...errorMessage,
          emailAddressError: emailAddressMessage,
        }));
      }
    }
    if (activeRadio === null) {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        queryTypeError: queryTypeMessage,
      }));
    }
    if (fieldInput["message"] === "") {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        messageError: fieldMessage,
      }));
    }
    if (!activeCheckBox) {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        consentError: consentMessage,
      }));
    }
  };
  //handle on change field inputs
  const handleInputChange = (e) => {
    setFieldInput({
      ...fieldInput,
      [e.target.name]: e.target.value,
    });
  };
  // set empty effect for states
  useEffect(() => {
    setActiveRadio(null);
    setActiveCheckBox(false);
  }, []);
  return (
    <>
      <form action="" id="form" onSubmit={handleFormSubmit}>
        <div className="input-container">
          <div className="input-group">
            <label htmlFor="">First Name</label>
            {errorMessage.firstNameError !== "" ? (
              <input
                className="input-field error"
                type="text"
                id="first-name"
                name="first-name"
                onChange={handleInputChange}
              />
            ) : (
              <input
                className="input-field  "
                type="text"
                id="first-name"
                name="first-name"
                onChange={handleInputChange}
              />
            )}
            <div className="error-message">
              <p>
                {errorMessage.firstNameError !== ""
                  ? errorMessage.firstNameError
                  : ""}
              </p>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="">Last Name</label>
            <input
              className={`input-field ${
                errorMessage.lastNameError !== "" ? "error" : ""
              }`}
              type="text"
              id="last-name"
              name="last-name"
              onChange={handleInputChange}
            />
            <div className="error-message">
              <p>
                {errorMessage.lastNameError !== ""
                  ? errorMessage.lastNameError
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="input-container">
          <div className="input-group">
            <label htmlFor="">Email Address</label>
            <input
              className={`input-field ${
                errorMessage.emailAddressError !== "" ? "error" : ""
              }`}
              type="text"
              id="email"
              name="email-address"
              onChange={handleInputChange}
            />
            <div className="error-message">
              <p>
                {errorMessage.emailAddressError !== ""
                  ? errorMessage.emailAddressError
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="input-container">
          <div className="input-group">
            <label htmlFor="">Query Type</label>
            <div
              className={`radio-box ${activeRadio === 0 ? "active" : ""}`}
              onClick={() => {
                handleRadioClick(0);
              }}
            >
              <input
                type="radio"
                id="general-enquiry"
                name="general-enquiry"
                onChange={(e) => {
                  e.target.checked = false;
                }}
              />
              <img className="radio-icon" src={radioSvg} alt="radio icon" />
              <span>General Enquiry</span>
            </div>
          </div>
          <div className="input-group">
            <div
              className={`radio-box ${activeRadio === 1 ? "active" : ""}`}
              onClick={() => {
                handleRadioClick(1);
              }}
            >
              <input
                type="radio"
                id="support-request"
                name="support-request"
                onChange={(e) => {
                  e.target.checked = false;
                }}
              />
              <img className="radio-icon" src={radioSvg} alt="radio icon" />
              <span>Support Request</span>
            </div>
          </div>
          <div id="query-error-message" className="error-message">
            <p>
              {errorMessage.queryTypeError !== ""
                ? errorMessage.queryTypeError
                : ""}
            </p>
          </div>
        </div>
        <div className="input-container">
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              onChange={handleInputChange}
              name="message"
              id="message"
              className={errorMessage.messageError !== "" ? "error" : ""}
              form="form"
            ></textarea>
            <div className="error-message">
              <p>
                {errorMessage.messageError !== ""
                  ? errorMessage.messageError
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="input-container">
          <div className="consent-container">
            <input
              type="checkbox"
              className={activeCheckBox ? "hide" : ""}
              name="consent"
              id="consent"
              onChange={(e) => {
                e.target.checked = false;
                handleCheckBoxClick();
              }}
            />
            <span id="consent-info">
              I consent to being contacted by the team
            </span>
            <img
              id="checkbox-icon"
              className="active"
              src={checkSvg}
              alt="checkbox"
              onClick={() => {
                setActiveCheckBox(!activeCheckBox);
              }}
            />
          </div>
          <div id="consent-error-message" className="error-message">
            <p>
              {errorMessage.consentError !== ""
                ? errorMessage.consentError
                : ""}
            </p>
          </div>
        </div>
        <div className="input-container">
          <button className="btn">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
