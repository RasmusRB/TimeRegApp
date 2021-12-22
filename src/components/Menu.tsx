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
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  peopleOutline,
  timeOutline,
  timeSharp,
  calendarOutline,
  calendarSharp,
  personOutline,
  personSharp,
  peopleSharp,
  listOutline,
  listSharp,
} from "ionicons/icons";
import "./Menu.css";
import { IAppPages } from "../interfaces/IAppPages";
import { useAuth } from "../AuthContext";

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
    iosIcon: peopleOutline,
    mdIcon: peopleSharp,
  },
  {
    title: "Activities",
    url: "/Activities",
    iosIcon: listOutline,
    mdIcon: listSharp,
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
  const { logOut, authInfo } = useAuth();

  // logs the user out by removing his session => see ./utils/Common.tsx
  const logout = () => {
    logOut();
    history.push("/");
  };

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
            <Link to="/Front">TimeRegApp</Link>
          </IonListHeader>
          <IonNote>{authInfo.user.email}</IonNote> <br />
          <IonNote>
            {authInfo.user.admin.toString() === "True" ? "Admin" : "User"}
          </IonNote>
          {authInfo.user.admin.toString() === "True"
            ? AdminAppPages.map((appPage, index) => {
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
            : UserAppPages.map((ap, idx) => {
                return (
                  <IonMenuToggle key={idx} autoHide={false}>
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
              })}
        </IonList>
        <IonButton expand="block" fill="solid" onClick={logout}>
          Log out
        </IonButton>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
