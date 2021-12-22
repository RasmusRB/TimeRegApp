import React, { useEffect, useState } from "react";
import {
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { useAuth } from "../AuthContext";
import { IUser } from "../interfaces/IUser";
import { Link } from "react-router-dom";
import "./Users.css";

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>();
  const { authInfo } = useAuth();

  useEffect(() => {
    const getAllUsers = () => {
      try {
        const config = {
          headers: {
            Accept: "*/*",
            Authorization: "Bearer " + authInfo.user.token,
          },
        };

        axios
          .get(`http://localhost:5014/user/getallusers`, config)
          .then((res) => {
            setUsers(res.data);
          })
          .catch((error) => {
            alert(error.message);
          });
      } catch {
        alert("Failed to fetch!");
      }
    };
    getAllUsers();
  });

  return (
    <IonPage className="bgContent">
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle slot="end">Users</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonList>
            {
              // Sorting by id
              users
                ?.sort((a, b) => {
                  return a.id - b.id;
                })
                .map((u, i) => {
                  return (
                    <IonItem key={i}>
                      <Link to={{ pathname: `Users/${u.id}`, state: { u } }}>
                        Id: {u.id}
                        <br /> Email: {u.email}
                        <br /> Firstname: {u.firstname}
                        <br />
                        Lastname: {u.lastname}
                        <br /> Phone: {u.telephone} <br />
                        <br />
                      </Link>
                    </IonItem>
                  );
                })
            }
          </IonList>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Users;
