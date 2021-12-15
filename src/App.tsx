import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Front from "./pages/Front";
import TimeRegistration from "./pages/TimeRegistration";
import Calender from "./pages/Calendar";
import Profile from "./pages/Profile";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Calendar from "./pages/Calendar";
import Forgotten from "./pages/Forgotten";
import Users from "./pages/Users";
import PrivateRoute from "./utils/PrivateRoute";

// Add routing and components
const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonRouterOutlet id="main">
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/Front">
              <Front />
            </Route>
            <Route path="/TimeRegistration">
              <TimeRegistration />
            </Route>
            <Route path="/Calendar">
              <Calendar />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/Forgotten">
              <Forgotten />
            </Route>
            <PrivateRoute path="/Users" component={Users} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
