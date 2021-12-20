import React from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router";

export type IAuthContext = {
  authInfo: {
    loggedIn: boolean;
    user: {
      id: number;
      email: string;
      admin: boolean;
      token: string;
    };
  };
  logOut: any;
  logIn: any;
};

export type IToken = {
  id: number;
  sub: string;
  admin: boolean;
};

const AuthContext = React.createContext<any>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [authInfo, setAuthInfo] = React.useState<any>();
  let history = useHistory();

  const logOut = () => {
    return new Promise((resolve) => {
      setAuthInfo({ user: null });
      // maybe
      setTimeout(() => {
        return resolve(true);
      }, 1000);
    });
  };

  const logIn = (email: string, password: string) => {
    const config = {
      headers: {
        Accept: "*/*",
        "Content-Type": "multipart/form-data",
      },
    };

    let userData = new FormData();
    userData.append("email", email);
    userData.append("password", password);

    axios
      .post(`http://localhost:5014/user/login`, userData, config)
      .then((res) => {
        const token = res.data;
        const decoded = jwtDecode<IToken>(token);
        let value = {
          loggedIn: true,
          user: { email: decoded.sub, id: decoded.id, admin: decoded.admin, token: token },
        };
        setAuthInfo(value);
        setTimeout(() => {
          return res.data;
        }, 1000);
      })
      .catch((err) => {
        alert("Login failed!");
        console.log(err)
      });
  };

  let value = {
    authInfo,
    logIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => React.useContext(AuthContext) as IAuthContext;
