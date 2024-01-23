import React from "react";
import HackIdeas from "./components/HackIdeas";
import HeaderComponent from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    // <Provider store={appStore}>
    // <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
    <div className="apps">
      <HeaderComponent />
      <Outlet />
    </div>
    // </UserContext.Provider>
    // </Provider>
  );
  // <div>
  //   <HackIdeas />
  // </div>
};

export default App;
