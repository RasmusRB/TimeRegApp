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

const Calendar: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle style={{ textAlign: "center" }}>Calendar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton
          expand="block"
          fill="solid"
          color="danger"
          style={{ margin: "50px" }}
        >
          <IonInput type="datetime-local" />
          Log in
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Calendar;
