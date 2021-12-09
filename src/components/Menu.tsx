import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useHistory, useLocation } from "react-router-dom";
import {
  archiveOutline,
  archiveSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  //
  timeOutline,
  timeSharp,
  calendarOutline,
  calendarClearSharp,
  calendarSharp,
  personOutline,
  personSharp,
} from "ionicons/icons";
import "./Menu.css";
import { getUser, removeUserSession } from "../utils/Common";

// Define links in menu
interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Time Registration",
    url: "/TimeRegistration",
    iosIcon: timeOutline,
    mdIcon: timeSharp,
  },
  {
    title: "Calendar",
    url: "/Calendar",
    iosIcon: calendarOutline,
    mdIcon: calendarSharp,
  },
  {
    title: "Profile",
    url: "/Profile",
    iosIcon: personOutline,
    mdIcon: personSharp,
  },
  
  /*
  {
    title: "Archived",
    url: "/page/Archived",
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },

  */
];

const Menu: React.FC = () => {
  // use router history
  let history = useHistory();

  const location = useLocation();
  const user = getUser();

  // logs the user out by removing his session => see ./utils/Common.tsx
  const logout = () => {
    removeUserSession();
    history.push("/");
  };

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>{user}</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonButton expand="block" fill="solid" onClick={logout}>
          Logout
        </IonButton>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
