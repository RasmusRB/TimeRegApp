import { useHistory } from "react-router";
import React from "react";
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

const Users: React.FC = () => {



    return (
<IonPage className="bgContent">
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle style={{ textAlign: "center" }}>Users</IonTitle>
          </IonToolbar>
        </IonHeader>
      
      </IonContent>
    </IonPage>
    )
}

export default Users;