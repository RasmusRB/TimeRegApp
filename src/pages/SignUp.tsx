import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonMenuButton,
  IonMenuToggle,
  IonPage,
  IonRippleEffect,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { PasswordValidation } from "../hooks/PasswordValidation";

const SignUp: React.FC = () => {

  let history = useHistory();

  const [email, setEmail] = React.useState('');
  //const [password, setPassword] = React.useState('');
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [telephone, setTelephone] = React.useState('');
  const [error, setError] = React.useState('');
  const [password, setPassword] = useState({ firstPassword: '', secondPassword: '' });
  const [validLength, hasNumber, upperCase, lowerCase, specialChar] = PasswordValidation({ firstPassword: password.firstPassword, secondPassword: password.secondPassword })

  const setFirst = (e: any) => {
    setPassword({ ...password, firstPassword: e.target.value })
  }
  const setSecond = (e: any) => {
    setPassword({ ...password, secondPassword: e.target.value })
  }

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    const config = {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'multipart/form-data'
      }
    }

    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password.firstPassword);
    formdata.append("firstname", firstname);
    formdata.append("lastname", lastname);
    formdata.append("telephone", telephone);

    if (password.firstPassword !== password.secondPassword){
      setError("Passwords don't match!");
    } else if 
      (!validateEmail(email)) {
      setError("Invalid email!");
    } else if
      (password.secondPassword.length < 8){
        setError("Password blabla")
      } else
    await axios.post(`http://localhost:5014/user/create`, formdata, config)
      .then(res => {
        alert("Successfully created with Id : " + res.data)
        history.push("/")
      }).catch(error => {
        alert(error.message)
      })
  }

  // Regex to validate email
  const validateEmail = (email: any) => {
    const regulars =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regulars.test(String(email).toLowerCase());
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton />
          <IonTitle style={{ textAlign: "center" }}>TimeRegApp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <form onSubmit={handleSignUp}>

          <IonInput
            placeholder="Email"
            type="text"
            style={{ textAlign: "center" }}
            onIonChange={(e: any) => setEmail(e.target.value)}
          >
          </IonInput>

          <IonInput
            placeholder="First Name"
            type="text"
            style={{ textAlign: "center" }}
            onIonChange={(e: any) => setFirstname(e.target.value)}
          >
          </IonInput>

          <IonInput
            placeholder="Last Name"
            type="text"
            style={{ textAlign: "center" }}
            onIonChange={(e: any) => setLastname(e.target.value)}
          >
          </IonInput>

          <IonInput
          type="number"
            placeholder="Phone"
            style={{ textAlign: "center" }}
            onIonChange={(e: any) => setTelephone(e.target.value)}
          >
          </IonInput>

          <IonInput
          type="password"
            placeholder="Password"
            style={{ textAlign: "center" }}
            onIonChange={setFirst}
          >
          </IonInput>

          <IonInput
          type="password"
            placeholder="Repeat Password"
            style={{ textAlign: "center" }}
            onIonChange={setSecond}
          >
          </IonInput>
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
                  width: "200px",
                }}
              >
                {error}
              </IonLabel>
            </>
          )}
          <IonButton
            expand="block"
            fill="solid"
            type="submit"
            //color="danger"
            style={{ margin: "50px" }}
          >
            Sign Up
          </IonButton>
        </form>

      </IonContent>
    </IonPage>
  );
};

export default SignUp;
