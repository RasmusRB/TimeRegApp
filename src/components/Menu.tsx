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
  // archiveOutline,
  // archiveSharp,
  // heartOutline,
  // heartSharp,
  // mailOutline,
  // mailSharp,
  // paperPlaneOutline,
  // paperPlaneSharp,
  timeOutline,
  timeSharp,
  calendarOutline,
  // calendarClearSharp,
  calendarSharp,
  personOutline,
  personSharp,
} from "ionicons/icons";
import "./Menu.css";
import { getToken, getUser, removeUserSession } from "../utils/Common";
import { IAppPages } from "../interfaces/IAppPages";
import { useState, useEffect } from "react";

// Define links in menu
const AdminAppPages: IAppPages[] = [
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
  {
    title: "Users",
    url: "/Users",
    iosIcon: personOutline,
    mdIcon: personSharp,
  },
];

const UserAppPages: IAppPages[] = [
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
];

const Menu: React.FC = () => {
  // use router history
  let history = useHistory();

  const location = useLocation();
  const user = getUser();
  const [admin, setAdmin] = useState();

  // logs the user out by removing his session => see ./utils/Common.tsx
  const logout = () => {
    removeUserSession();
    history.push("/");
  };

  useEffect(() => {
    try {
      let token = getToken() || '';
      let decoded = JSON.parse(atob(token.split(".")[1]));
      setAdmin(decoded.admin)
    } catch (e) {
      return;
    }
  }, [])

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>TimeRegApp</IonListHeader>
          <IonNote>{user}</IonNote>
          { 
            admin === true
            ?
            AdminAppPages.map((appPage, index) => {
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
              })
            : UserAppPages.map((ap, i) => {
                return (
                  <IonMenuToggle key={i} autoHide={false}>
                    <IonItem
                      className={location.pathname === ap.url ? "selected" : ""}
                      routerLink={ap.url}
                      routerDirection="none"
                      lines="none"
                      detail={false}
                    >
                      <IonIcon slot="start" ios={ap.iosIcon} md={ap.mdIcon} />
                      <IonLabel>{ap.title}</IonLabel>
                    </IonItem>
                  </IonMenuToggle>
                );
            })
          }
        </IonList>
        <IonButton expand="block" fill="solid" onClick={logout}>
          Logout
        </IonButton>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
