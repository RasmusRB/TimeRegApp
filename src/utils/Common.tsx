// Returns user data from session storage
export const getUser = () => {
    const userData = sessionStorage.getItem("user");
    if (userData) return JSON.parse(userData);
    else return null;
  };
  
  // Returns token from session storage
  export const getToken = () => {
    return sessionStorage.getItem("token");
  };
  
  // Sets token and user to session storage
  export const setUserSession = (token: any, user: any) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
  };
  
  export const userSession = (token: any, userId: any) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('userId', JSON.stringify(userId))
  }
  
  // Removes token and user from session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  };