import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonRippleEffect,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getUser, setUserSession } from "../utils/Common";
import { useAuth } from "../AuthContext";

const Home: React.FC = () => {
  useEffect(() => {}, []);

  const { logIn } = useAuth();
  let history = useHistory();

  // React hooks to define user log in and possible errors in input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Regex to validate email
  const validateEmail = (email: any) => {
    const regulars =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regulars.test(String(email).toLowerCase());
  };

  // TODO improve checks etc
  const handleSubmit = () => {
    try {
      logIn(email, password);
      history.push("/Front");
    } catch {}
  };

  // log in post function => using axios library for http requests
  // const handleLogin = async () => {
  //   let formdata = new FormData();
  //   formdata.append("email", email);
  //   formdata.append("password", password);

  //   // validation checks (email + password length)
  //   if (!validateEmail(email)) {
  //     setError("Invalid email!");
  //   } else if (password.length < 8) {
  //     setError("Password must be at least 8 characters!");
  //   } else {
  //     try {
  //       await axios({
  //         method: "post",
  //         url: "http://localhost:5014/user/login",
  //         headers: {
  //           Accept: "*/*",
  //           "Content-Type": "multipart/form-data",
  //         },
  //         data: formdata,
  //       })
  //         .then((res) => {
  //           setUserSession(res.data, email);
  //           const user = getUser();
  //           alert("Welcome " + user);
  //           history.push("/page/");
  //         })
  //         .catch((error) => {
  //           if (error.response.status === 400) {
  //             error = setError("Wrong username or password.");
  //           } else error = setError("Something went wrong, try again later.");
  //         });
  //     } catch (Exception) {
  //       alert("Something bad happened! ");
  //     }
  //   }
  // };

  // using navigation history to navigate
  const handleNavigate = () => {
    history.push("/SignUp");
  };

  return (
    <IonPage className="bgContent">
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle style={{ textAlign: "center" }}>TimeRegApp</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="center-container">
          <form>
            <IonLabel className="lbl-form">Email</IonLabel>
            <IonInput
              clearInput={true}
              className="input-form"
              type="text"
              onIonChange={(e: any) => setEmail(e.target.value)}
            />

            <IonLabel className="lbl-form">Password</IonLabel>
            <IonInput
              className="input-form"
              type="password"
              onIonChange={(e: any) => setPassword(e.target.value)}
            />
            <br />
            <div
              style={{
                justifyContent: "center",
                alignContent: "center",
                display: "grid",
              }}
            >
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
            </div>
            <br />
            <IonButton expand="block" fill="solid" onClick={handleSubmit}>
              Log in
            </IonButton>
            <IonButton expand="block" onClick={handleNavigate}>
              Sign up
            </IonButton>
            <div
              style={{
                textAlign: "center",
                margin: "50px",
                fontFamily: "monospace",
              }}
            >
              <p>
                <Link to="/Forgotten">Forgotten password?</Link>
                <IonRippleEffect></IonRippleEffect>
              </p>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
