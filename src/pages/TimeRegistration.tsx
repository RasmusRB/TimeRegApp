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


  function showDate(){
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    //var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date;
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonMenuButton />
          <IonTitle style={{ textAlign: "center" }}>Time Registration</IonTitle>
          
          <p style={{ textAlign: "center" }}> {showDate()} </p>
          
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
