import { useState } from "react";
import "./FacebookForm.css";

const FacebookForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onEmailChange = (event) => setEmail(event.target.value);

  const onPasswordChange = (event) => setPassword(event.target.value);

  const validateInputs = () => {
    if (email.length === 0 || !email.includes("@") || password.length < 8) {
      setError(true);
      return true;
    } else {
      setError(false);
      return false;
    }
  };

  const submit = () => {
    validateInputs();
    console.log("submitting--", email, password);
  };

  //const isButtonDisabled = () => {
  //if (email.length === 0 || password.length < 8){

  //return true;
  //} else {
  //return false;
  //}
  //};

  return (
    <div className="p1">
      <h1 className="fac1">facebook</h1>
      <p className="fac2">
        Facebook helps you connect and share
        <br /> with the people in your life.
      </p>
      <div className="card1">
        <input
          className="email"
          placeholder="Email address or phone number"
          type="email"
          onChange={onEmailChange}
          value={email}
        />
        <br />
        <br />
        <input
          className="pass"
          placeholder="Password"
          type="password"
          onChange={onPasswordChange}
          value={password}
        />
        <br />

        {error ? <p>all input fields are mandatory</p> : <p></p>}
        <button className="btn1" onClick={submit}>
          Log In
        </button>
        <br />
        <p className="p2">Forgotten password?</p>
        <br />
        <button className="btn2">Create new account</button>
      </div>
    </div>
  );
};

export default FacebookForm;
