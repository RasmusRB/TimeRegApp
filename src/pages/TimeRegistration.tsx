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



const TimeRegistration: React.FC = () => {


var today = new Date();


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonMenuButton />
          <IonTitle style={{ textAlign: "center" }}>Time Registration</IonTitle>
          
        {
          today.getUTCDate
        }
          
          
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton
          expand="block"
          fill="solid"
          color="danger"
          style={{ margin: "50px" }}
        >
          Log in
        </IonButton>





      </IonContent>
    </IonPage>
  );
};

export default TimeRegistration;
