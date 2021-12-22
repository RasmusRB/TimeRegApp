import { useHistory } from "react-router";
import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { PasswordValidation } from "../hooks/PasswordValidation";
import "./SignUp.css";

const SignUp: React.FC = () => {
  let history = useHistory();

  const [email, setEmail] = React.useState("");
  //const [password, setPassword] = React.useState('');
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [error, setError] = React.useState("");
  const [password, setPassword] = useState({
    firstPassword: "",
    secondPassword: "",
  });
  const [validLength, hasNumber, upperCase, lowerCase, specialChar, match] =
    PasswordValidation({
      firstPassword: password.firstPassword,
      secondPassword: password.secondPassword,
    });

  const setFirst = (e: any) => {
    setPassword({ ...password, firstPassword: e.target.value });
  };
  const setSecond = (e: any) => {
    setPassword({ ...password, secondPassword: e.target.value });
  };

  const navigateBack = () => {
    history.goBack();
  };

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          Accept: "*/*",
          "Content-Type": "multipart/form-data",
        },
      };

      let formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password.firstPassword);
      formdata.append("firstname", firstname);
      formdata.append("lastname", lastname);
      formdata.append("telephone", telephone);

      if (password.firstPassword !== password.secondPassword) {
        setError("Passwords don't match!");
      } else if (!validateEmail(email)) {
        setError("Invalid email!");
      } else if (password.secondPassword.length < 8) {
        setError("Password blabla");
      } else
        await axios
          .post(`http://localhost:5014/user/create`, formdata, config)
          .then((res) => {
            alert("Successfully created with Id : " + res.data);
            history.push("/");
          })
          .catch((error) => {
            alert(error.message);
          });
    } catch {
      alert("Failed to post!");
    }
  };

  // Regex to validate email
  const validateEmail = (email: any) => {
    const regulars =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regulars.test(String(email).toLowerCase());
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle style={{ textAlign: "center" }}>Sign Up</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="center-container">
          <form onSubmit={handleSignUp}>
            <IonLabel className="lbl-form">Email</IonLabel>
            <IonInput
              type="text"
              className="input-form"
              onIonChange={(e: any) => setEmail(e.target.value)}
            ></IonInput>

            <IonLabel className="lbl-form">First Name</IonLabel>
            <IonInput
              type="text"
              className="input-form"
              onIonChange={(e: any) => setFirstname(e.target.value)}
            ></IonInput>

            <IonLabel className="lbl-form">Last Name</IonLabel>
            <IonInput
              type="text"
              className="input-form"
              onIonChange={(e: any) => setLastname(e.target.value)}
            ></IonInput>

            <IonLabel className="lbl-form">Telephone</IonLabel>
            <IonInput
              type="number"
              className="input-form"
              onIonChange={(e: any) => setTelephone(e.target.value)}
            ></IonInput>

            <IonLabel className="lbl-form">Password</IonLabel>
            <IonInput
              type="password"
              className="input-form"
              onIonChange={setFirst}
            ></IonInput>

            <IonLabel className="lbl-form">Confirm Password</IonLabel>
            <IonInput
              type="password"
              className="input-form"
              onIonChange={setSecond}
            ></IonInput>

            <div
              style={{
                justifyContent: "center",
                alignContent: "center",
                display: "grid",
              }}
            >
              <ul
                style={{
                  fontFamily: "monospace",
                  fontSize: "14px",
                  listStyleType: "square",
                  textAlign: "left",
                }}
              >
                <li>
                  {validLength ? (
                    <label style={{ color: "green" }}>Length (Min. 8)</label>
                  ) : (
                    <label style={{ color: "red" }}>Length (Min. 8)</label>
                  )}
                </li>

                <li>
                  {hasNumber ? (
                    <label style={{ color: "green" }}>Contains number</label>
                  ) : (
                    <label style={{ color: "red" }}>Contains number</label>
                  )}
                </li>

                <li>
                  {upperCase ? (
                    <label style={{ color: "green" }}>Upper case</label>
                  ) : (
                    <label style={{ color: "red" }}>Upper case</label>
                  )}
                </li>

                <li>
                  {lowerCase ? (
                    <label style={{ color: "green" }}>Lower case</label>
                  ) : (
                    <label style={{ color: "red" }}>Lower case</label>
                  )}
                </li>

                <li>
                  {specialChar ? (
                    <label style={{ color: "green" }}>
                      Special char (e.g. !@#?)
                    </label>
                  ) : (
                    <label style={{ color: "red" }}>
                      Special char (e.g. !@#?)
                    </label>
                  )}
                </li>

                <li>
                  {match ? (
                    <label style={{ color: "green" }}>Match</label>
                  ) : (
                    <label style={{ color: "red" }}>Match</label>
                  )}
                </li>
              </ul>
              {error && (
                <>
                  <IonLabel
                    style={{
                      color: "red",
                      fontFamily: "monospace",
                      justifyContent: "center",
                      alignContent: "center",
                      textAlign: "center",
                      width: "250px",
                    }}
                  >
                    {error}
                  </IonLabel>
                </>
              )}
            </div>
            <IonButton
              expand="block"
              fill="solid"
              type="submit"
              style={{ margin: "10px" }}
              //color="danger"
            >
              Sign Up
            </IonButton>
            <IonButton
              expand="block"
              fill="solid"
              style={{ margin: "10px" }}
              onClick={navigateBack}
            >
              Back
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
