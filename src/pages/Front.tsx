import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
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

const Front: React.FC = () => {
  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonContent fullscreen id="main">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton />
              </IonButtons>
              <IonTitle slot="end">Whale cum</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonCard>
            // TODO
            Whale cum text - Explain about project :C
          </IonCard>

          <IonButton
            expand="block"
            fill="solid"
            color="danger"
            style={{ margin: "50px" }}
          >
            Log in
          </IonButton>
        </IonContent>
      </IonSplitPane>
    </IonPage>
  );
};
export default Front;
