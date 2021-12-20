import React, { useEffect, useState } from "react";
import {
  IonButtons,
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

const Users: React.FC = () => {

  const [users, setUsers] = useState<IUser[]>();
  const { authInfo } = useAuth();

  useEffect(() => {
    const getAllUsers = () => {

      const config = {
        headers: {
          'Accept': '*/*',
          'Authorization': 'Bearer ' + authInfo.user.token
        }
      }

      axios.get(`http://localhost:5014/user/getallusers`, config)
      .then(res => {
        setUsers(res.data)
      }).catch(error => {
        alert(error.message)
      })
    }
    getAllUsers()
  } )

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
        <IonList>
          {
            users?.map((u, i) => {
              return ( 
              <IonItem>Id: {u.id}, Email: {u.email}, Firstname: {u.firstname}, Lastname: {u.lastname}, Phone: {u.telephone}</IonItem> )
            })
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Users;
