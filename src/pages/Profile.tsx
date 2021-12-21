import React, { useState, useEffect, Attributes } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { getUser, getToken } from "../utils/Common";
import axios from "axios";
import { IUser } from "../interfaces/IUser";
import { useHistory } from "react-router";
import { useAuth } from "../AuthContext";

const Profile: React.FC = () => {
  const [userData, setUserData] = useState<IUser>();

  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");

  const user = getUser();
  const { authInfo } = useAuth();
  let history = useHistory();

  useEffect(() => {
    const fetchUser = () => {
      const config = {
        headers: {
        Accept: "*/*",
        Authorization: "Bearer " + authInfo.user.token,
      },
    };
    
    axios
    .get<IUser>(`http://localhost:5014/user/getuser?email=${authInfo.user.email}`, config)
    .then((res) => {
      setUserData(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      alert(error.message);
    });
  }
  fetchUser();
  }, []);

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("firstname", firstname);
    formdata.append("lastname", lastname);
    formdata.append("telephone", telephone);
    formdata.append("password", password);

    let config = {
      headers: {
        Accept: "*/*",
        Authorization: "Bearer " + authInfo.user.token,
      },
    };

    await axios
      .post(`http://localhost:5014/user/update/${authInfo.user.id}`, formdata, config)
      .then((res) => {
        alert("User updated!");
        history.push("/Front")
      })
      .catch((error) => {
        alert("Something went wrong!");
      });
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle slot="end">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="center-container">
          <form>
            <IonLabel className="lbl-form">First name</IonLabel>
            <IonInput
              className="input-form"
              placeholder={userData?.firstname}
              style={{ textAlign: "center" }}
              onIonChange={(e: any) => setFirstname(e.target.value)}
            />
            <IonLabel className="lbl-form">Last name</IonLabel>
            <IonInput
              className="input-form"
              placeholder={userData?.lastname}
              style={{ textAlign: "center" }}
              onIonChange={(e: any) => setLastname(e.target.value)}
            />
            <IonLabel className="lbl-form">Email</IonLabel>
            <IonInput
              className="input-form"
              placeholder={userData?.email}
              style={{ textAlign: "center" }}
              onIonChange={(e: any) => setEmail(e.target.value)}
            />
            <IonLabel className="lbl-form">Telephone</IonLabel>
            <IonInput
              className="input-form"
              placeholder={userData?.telephone}
              style={{ textAlign: "center" }}
              onIonChange={(e: any) => setTelephone(e.target.value)}
            />
            <IonLabel className="lbl-form">Password</IonLabel>
            <IonInput
              className="input-form"
              type="password"
              placeholder={userData?.password}
              style={{ textAlign: "center" }}
              onIonChange={(e: any) => setPassword(e.target.value)}
            />

            <IonButton expand="block" fill="solid" style={{ margin: "10px" }} onClick={handleUpdate}>
              Update
            </IonButton>
            <IonButton expand="block" fill="solid" style={{ margin: "10px" }} onClick={goBack}>
          Back
        </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
