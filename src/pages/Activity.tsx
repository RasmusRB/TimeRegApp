import { useHistory, useLocation } from "react-router";
import React, { useState } from "react";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonMenuToggle,
  IonPage,
  IonRippleEffect,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useAuth } from "../AuthContext";
import axios from "axios";

interface Activity {
  act: {
    id: number;
    activity: string;
  };
}
const Activity: React.FC = () => {
  const history = useHistory();
  const location = useLocation<Activity>();
  const { act } = location.state;
  const { authInfo } = useAuth();

  const goBack = () => {
    history.goBack();
  };

  const handleDelete = async (e: any) => {
    e.preventDefault();

    const config = {
      headers: {
        Accept: "*/*",
        Authorization: "Bearer " + authInfo.user.token,
      },
    };

    await axios
      .delete(`http://localhost:5014/api/activitydelete/${act.id}`, config)
      .then((res) => {
        alert("Activity deleted!");
        history.push("/Activities");
      })
      .catch((error) => {
        alert("Delete unsuccesfull!");
      });
  };

  return (
    <IonPage>
      <IonContent fullscreen id="main">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle slot="end">Activity {act.id}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonList>
            <IonItem>
              <IonLabel>Id:</IonLabel>
              {act.id}
            </IonItem>
            <IonItem>
              <IonLabel>Activity:</IonLabel>
              {act.activity}
            </IonItem>
          </IonList>
        </IonCard>
        <IonButton expand="block" fill="solid" color="danger" onClick={handleDelete}>Delete</IonButton>
        <IonButton expand="block" fill="solid" onClick={goBack}>
          Back
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
export default Activity;
