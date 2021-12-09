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
import { getUser, removeUserSession } from "../utils/Common";
import axios from "axios";

const Profile: React.FC = () => {

  useEffect(() => {
    getUserInfo();
  }, [])

  const user = getUser();

  interface User {
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    telehpone: string,
    role: string
  }

  const [userData, setUserData] = useState<User>();

  const getUserInfo = () => {
    axios.get(`http://localhost:5014/user/getuser?email=${user}`)
    .then(res => {
      setUserData(res.data)
    }).catch(error => {
      alert("Something went wrong.")
    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonMenuButton />
          <IonTitle style={{ textAlign: "center" }}>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
       
      <IonInput placeholder={userData?.email} style={{ textAlign: "center" }} />
      <IonInput placeholder={userData?.firstname} style={{ textAlign: "center" }} />
      <IonInput placeholder={userData?.lastname} style={{ textAlign: "center" }} />
      <IonInput placeholder={userData?.telehpone} style={{ textAlign: "center" }} />

      <div style={{ textAlign: "center", justifyContent: "center", display: "grid", alignContent: "center" }}>
        <IonButton>Update</IonButton>
      </div>
      {
        console.log(userData?.telehpone)
      }

      </IonContent>
    </IonPage>
  );
};

export default Profile;
