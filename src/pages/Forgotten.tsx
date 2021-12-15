import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Forgotten.css";

const Forgotten: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handlePwReset = async (e: any) => {
    e.preventDefault();
  };

  return (
    <IonPage className="bgContent">
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle style={{ textAlign: "center" }}>Reset Password</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="center-container">
          <form onSubmit={handlePwReset}>
            <IonLabel className="lbl-form">Email</IonLabel>
            <IonInput
              className="input-form"
              type="text"
              clearInput={true}
              onIonChange={(e: any) => setEmail(e.target.value)}
            />
            <IonLabel className="lbl-form">Password</IonLabel>
            <IonInput
              className="input-form"
              type="password"
              clearInput={true}
              onIonChange={(e: any) => setPassword(e.target.value)}
            />
            <IonButton expand="block" fill="solid" type="submit">
              Submit
            </IonButton>
            <IonButton expand="block" fill="solid" onClick={history.goBack}>
              Back
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Forgotten;
