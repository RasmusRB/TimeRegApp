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

const Home: React.FC = () => {
  useEffect(() => {
  }, []);

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

  // log in post function => using axios library for http requests
  const handleLogin = async () => {
    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    // validation checks (email + password length)
    if (!validateEmail(email)) {
      setError("Invalid email!");
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters!");
    } else {
      await axios({
        method: "post",
        url: "http://localhost:5014/user/login",
        headers: {
          Accept: "*/*",
          "Content-Type": "multipart/form-data",
        },
        data: formdata,
      })
        .then((res) => {
          setUserSession(res.data, email);
          const user = getUser();
          alert("Welcome " + user);
          history.push("/Front");
        })
        .catch((error) => {
            if (error.response.status === 400) {
                error = setError("Wrong username or password.");
              } else error = setError("Something went wrong, try again later.");
        });
    }
  };

  // using navigation history to navigate 
  const handleNavigate = () => {
    history.push("/SignUp");
  };

  return (
    <IonPage className="bgContent">
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ textAlign: "center" }}>TimeRegApp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form>
          <div
            style={{
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center",
              margin: "25px",
            }}
          >
            <IonLabel>Email</IonLabel>
            <IonInput
              type="text"
              onIonChange={(e: any) => setEmail(e.target.value)}
            />
          </div>
          <div
            style={{
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center",
              margin: "25px",
            }}
          >
            <IonLabel>Password</IonLabel>
            <IonInput
              type="password"
              onIonChange={(e: any) => setPassword(e.target.value)}
            />
            <br />
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
        </form>
        <IonButton
          expand="block"
          fill="solid"
          color="danger"
          style={{ margin: "50px" }}
          onClick={handleLogin}
        >
          Log in
        </IonButton>
        <IonButton
          expand="block"
          color="success"
          style={{ margin: "50px" }}
          onClick={handleNavigate}
        >
          Sign up
        </IonButton>
        <div style={{ textAlign: "center", margin: "60px" }}>
          <p>
            <Link to="/Forgotten">Forgotten password?</Link>
            <IonRippleEffect></IonRippleEffect>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
