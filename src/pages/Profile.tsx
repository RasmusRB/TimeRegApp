import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { getUser } from "../utils/Common";
import axios from "axios";
import { IUser } from "../interfaces/IUser";

const Profile: React.FC = () => {
  const [userData, setUserData] = useState<IUser>();

  const user = getUser();

  useEffect(() => {
    axios
      .get<IUser>(`http://localhost:5014/user/getuser?email=${user}`)
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle slot="end">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="center-container">
          <IonLabel className="lbl-form">First name</IonLabel>
          <IonInput
            className="input-form"
            placeholder={userData?.firstname}
            style={{ textAlign: "center" }}
          />
          <IonLabel className="lbl-form">Last name</IonLabel>
          <IonInput
            className="input-form"
            placeholder={userData?.lastname}
            style={{ textAlign: "center" }}
          />
          <IonLabel className="lbl-form">Email</IonLabel>
          <IonInput
            className="input-form"
            placeholder={userData?.email}
            style={{ textAlign: "center" }}
          />
          <IonLabel className="lbl-form">Telephone</IonLabel>
          <IonInput
            className="input-form"
            placeholder={userData?.telephone}
            style={{ textAlign: "center" }}
          />
        </div>

        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "grid",
            alignContent: "center",
          }}
        >
          <IonButton>Update</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
