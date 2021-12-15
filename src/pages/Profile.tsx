import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
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

  const user = getUser()

  useEffect(() => {
    axios.get<IUser>(`http://localhost:5014/user/getuser?email=${user}`)
    .then(res => {
      setUserData(res.data)
      console.log(res.data)
    }).catch((error) => {
      alert(error.message)
    })    
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonMenuButton />
          <IonTitle style={{ textAlign: "center" }}>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >       
      
      <IonInput placeholder={userData?.firstname} style={{ textAlign: "center" }} />
      <IonInput placeholder={userData?.lastname} style={{ textAlign: "center" }} />
      <IonInput placeholder={userData?.email} style={{ textAlign: "center" }} />
      <IonInput placeholder={userData?.telephone} style={{ textAlign: "center" }} />

      <div style={{ textAlign: "center", justifyContent: "center", display: "grid", alignContent: "center" }}>
        <IonButton>Update</IonButton>
      </div>

      {
        console.log(userData?.firstname)
      }

      </IonContent>
    </IonPage>
  );
};

export default Profile;
