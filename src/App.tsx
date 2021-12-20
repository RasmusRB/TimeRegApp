import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import TimeRegistration from "./pages/TimeRegistration";
import Activities from "./pages/Activities";
import Forgotten from "./pages/Forgotten";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Front from "./pages/Front";
import Users from "./pages/Users";
import Home from "./pages/Home";

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

import PrivateRoute from "./utils/PrivateRoute";
import { useAuth } from "./AuthContext";
import Menu from "./components/Menu";

// Add routing and components
const App: React.FC = () => {

  const { authInfo } = useAuth();

  return (
    <IonApp>
      <IonReactRouter>
        {authInfo?.user?.email ? (
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/Front" component={Front} />
              <Route path="/Profile" component={Profile}/>
              <Route path="/Calendar" component={Calendar}/>
              <Route path="/TimeRegistration" component={TimeRegistration} />
              <PrivateRoute path="/Users" component={Users}/>
              <PrivateRoute path="/Activities" component={Activities}/>
            </IonRouterOutlet>
          </IonSplitPane>
        ) : (
          <>
            <Route path="/" component={Home} exact />
            <Redirect to="/" exact />
          </>
        )}
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/Forgotten">
          <Forgotten />
        </Route>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
