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

const Front: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen id="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle style={{ textAlign: "center" }}>
              <IonMenuButton />
              TimeRegApp
            </IonTitle>
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
export default Front;
