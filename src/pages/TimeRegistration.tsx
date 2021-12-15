import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonMenuButton,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const TimeRegistration: React.FC = () => {
  function showDate() {
    var today = new Date();
    var date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    //var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date;
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle style={{ textAlign: "center" }}>
              Time Registration
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonHeader style={{ textAlign: "center" }}>{showDate()}</IonHeader>
        <form>
          <IonInput
            placeholder="Start time"
            style={{ textAlign: "center" }}
          ></IonInput>
          <IonInput
            placeholder="End time"
            style={{ textAlign: "center" }}
          ></IonInput>

          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
              display: "grid",
              alignContent: "center",
            }}
          >
            <select name="noget" id="noget">
              <option value="noget" selected>
                Choose activity
              </option>
              <option value="noget">Programming</option>
              <option value="noget">Meeting</option>
              <option value="noget">Planning</option>
            </select>
          </div>

          <IonTextarea
            placeholder="Comments"
            style={{ textAlign: "center" }}
          ></IonTextarea>

          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
              display: "grid",
              alignContent: "center",
            }}
          >
            <IonButton>Submit</IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default TimeRegistration;
