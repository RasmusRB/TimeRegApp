import { useLocation } from "react-router";
import React from "react";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonMenuButton,
  IonMenuToggle,
  IonPage,
  IonRippleEffect,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Activity: React.FC = () => {

    const location = useLocation()

  return (
    <IonPage>
        <IonContent fullscreen id="main">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton />
              </IonButtons>
              <IonTitle slot="end">Activity </IonTitle>
            </IonToolbar>
          </IonHeader>
      </IonContent>
    </IonPage>
  );
};
export default Activity;