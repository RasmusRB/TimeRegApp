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
              <IonTitle slot="end">Welcome</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonCard style={{ padding: "5px" }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              laborum illum nostrum sed error libero tempore distinctio omnis
              molestias a.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              voluptatem accusantium officiis repellat autem maxime
              necessitatibus dolorem vitae fuga inventore consectetur ipsum sint
              ea eaque ullam tenetur reiciendis in, quia veritatis harum amet,
              quo rerum?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
              eius quam. Minus exercitationem debitis maxime ab nemo
              perferendis, explicabo blanditiis corporis molestiae quaerat
              obcaecati deserunt deleniti ea consectetur quisquam repellendus.
            </p>
          </IonCard>
        </IonContent>
      </IonSplitPane>
    </IonPage>
  );
};
export default Front;
