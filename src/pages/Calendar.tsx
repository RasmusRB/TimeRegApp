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
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { useAuth } from "../AuthContext";
import "./Calendar.css";

interface TimeReg {
  timereg_id: number;
  timereg_created: string;
  timereg_start: string;
  timereg_end: string;
  timereg_comment: string;
  activity_id: number;
  user_id: number;
}

const Calendar: React.FC = () => {
  const { authInfo } = useAuth();
  const [date, setDate] = useState();
  const [timeregistrations, setTimeregistrations] = useState<TimeReg[]>();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          Accept: "*/*",
          Authorization: "Bearer " + authInfo.user.token,
        },
      };

      axios
        .get(`http://localhost:5014/api/timeregbydate/${date}`, config)
        .then((res) => {
          setTimeregistrations(res.data);
        })
        .catch((error) => {
          alert(error.message);
        });
    } catch {
      alert("Failed to fetch!");
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle slot="end">Calendar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonLabel className="lbl-form">Search for a date</IonLabel>
          <IonInput
            className="input-form"
            type="date"
            onIonChange={(e: any) => setDate(e.target.value)}
          />
          <IonButton
            style={{ margin: "10px" }}
            expand="block"
            fill="solid"
            onClick={handleSubmit}
          >
            Submit
          </IonButton>
        </IonCard>
        <IonCard>
          <IonList>
            {timeregistrations?.map((tr, idx) => {
              return (
                <IonItem style={{ fontFamily: "monospace" }} key={idx}>
                  User Id: {tr.user_id} <br /> Activity Id: {tr.activity_id}{" "}
                  <br />
                  Start: {tr.timereg_start} <br /> End: {tr.timereg_end} <br />{" "}
                  Comment: {tr.timereg_comment}
                </IonItem>
              );
            })}
          </IonList>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Calendar;
