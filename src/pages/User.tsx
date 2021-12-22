import React from "react";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory, useLocation } from "react-router";
import { useAuth } from "../AuthContext";
import axios from "axios";
import "./User.css";

interface User {
  u: {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    telephone: string;
  };
}

const User: React.FC = () => {
  const history = useHistory();
  const location = useLocation<User>();
  const { u } = location.state;
  const { authInfo } = useAuth();

  const goBack = () => {
    history.goBack();
  };

  const handleDelete = async (e: any) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          Accept: "*/*",
          Authorization: "Bearer " + authInfo.user.token,
        },
      };

      await axios
        .delete(
          `http://localhost:5014/user/delete?userEmail=${u.email}`,
          config
        )
        .then((res) => {
          alert("User deleted!");
          history.push("/Users");
        })
        .catch((error) => {
          alert("Delete unsuccesfull!");
        });
    } catch {
      alert("Failed to fetch!");
    }
  };

  return (
    <IonPage className="bgContent">
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle slot="end">User</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonList>
            <IonItem>
              <IonLabel>Id:</IonLabel>
              {u.id}
            </IonItem>
            <IonItem>
              <IonLabel>Email:</IonLabel>
              {u.email}
            </IonItem>
            <IonItem>
              <IonLabel>Firstname:</IonLabel>
              {u.firstname}
            </IonItem>
            <IonItem>
              <IonLabel>Lastname:</IonLabel>
              {u.lastname}
            </IonItem>
            <IonItem>
              <IonLabel>Telephone:</IonLabel>
              {u.telephone}
            </IonItem>
          </IonList>
        </IonCard>
        <IonButton
          expand="block"
          fill="solid"
          color="danger"
          onClick={handleDelete}
          style={{ margin: "10px" }}
        >
          Delete
        </IonButton>
        <IonButton
          expand="block"
          fill="solid"
          style={{ margin: "10px" }}
          onClick={goBack}
        >
          Back
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default User;
