import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { useAuth } from "../AuthContext";
import { useHistory } from "react-router";

interface Activity {
  id: number;
  activity: string;
}

const TimeRegistration: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>();
  const [activityId, setActivityId] = useState();
  const [comment, setComment] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndtime] = useState('');
  const { authInfo } = useAuth();

  let history = useHistory();

  useEffect(() => {
    const getActivities = () => {
      const config = {
        headers: {
          Accept: "*/*",
          Authorization: "Bearer " + authInfo.user.token,
        },
      };
      axios
        .get(`http://localhost:5014/api/activities`, config)
        .then((res) => {
          setActivities(res.data);
        })
        .catch((error) => {
          alert("Try reload!");
        });
    };
    getActivities();
  });

  const goBack = () => {
    history.goBack();
  }

  const handleSelect = (e: any) => {
    setActivityId(e.target.value)
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle slot="end">Time Registration</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonLabel className="lbl-form">Start time</IonLabel>
          <IonInput className="input-form" onIonChange={(e: any) => setStartTime(e.target.value)}/>
          <IonLabel className="lbl-form">End time</IonLabel>
          <IonInput className="input-form" onIonChange={(e: any) => setEndtime(e.target.value)}/>
          <IonLabel className="lbl-form">Comment</IonLabel>
          <IonTextarea className="input form" onIonChange={(e: any) => setComment(e.target.value)}/>
          <IonSelect placeholder="--Select--" style={{color: "black"}} onIonChange={handleSelect}>
            {activities?.map((a, i) => {
              return (
                <IonSelectOption value={a.id} key={i}>{a.activity}</IonSelectOption>
              );
            })}
          </IonSelect>
        </IonCard>
        <IonButton expand="block" fill="solid" style={{ margin: "10px" }}>
          Submit
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

export default TimeRegistration;
