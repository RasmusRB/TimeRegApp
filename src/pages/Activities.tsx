import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import "./Activities.css";

const Activities: React.FC = () => {
  const [activity, setActivity] = useState<any>("");
  const [activities, setActivities] = useState<any>([]);
  const { authInfo } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          Accept: "*/*",
          Authorization: "Bearer " + authInfo.user.token,
          "Content-Type": "multipart/form-data",
        },
      };

      let formData = new FormData();
      formData.append("activity", activity);

      await axios
        .post(`http://localhost:5014/api/activitycreate`, formData, config)
        .then((res) => {
          alert("Created succesfully with id : " + res.data.id);
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert("Bad input!");
          }
        });
    } catch {
      alert("Fail!");
    }
  };

  useEffect(() => {
    const getAllActivities = () => {
      try {
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
            alert(error.message);
          });
      } catch {
        alert("Failed to fetch!");
      }
    };

    getAllActivities();
  }, [handleSubmit]);

  return (
    <IonPage className="bgContent">
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle slot="end">Activities</IonTitle>
          </IonToolbar>
        </IonHeader>

        <form onSubmit={handleSubmit}>
          <div className="center-container">
            <IonLabel className="lbl-form">Create activity</IonLabel>
            <IonInput
              type="text"
              className="input-form"
              clearInput={true}
              onIonChange={(e: any) => setActivity(e.target.value)}
            />
            <IonButton type="submit">Submit</IonButton>
          </div>
        </form>
        <IonCard>
          <IonList>
            {
              // Sorting by id
              activities
                ?.sort((a: any, b: any) => {
                  return a.id - b.id;
                })
                .map((act: any, i: any) => {
                  return (
                    <IonItem key={i}>
                      <Link
                        to={{
                          pathname: `/Activities/${act.id}`,
                          state: { act },
                        }}
                        key={act.id}
                      >
                        {" "}
                        Id: {act.id}, Activity: {act.activity}{" "}
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

export default Activities;
