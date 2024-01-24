import React, { useState } from "react";
import HeaderComponent from "./components/Header";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import EmployeeContext from "./utils/employeeContext";
import { ChallengeListData } from "./utils/db";

const App = () => {
  const [challenges, setChallenges] = useState(ChallengeListData);

  return (
    <EmployeeContext.Provider value={{ challenges, setChallenges }}>
      <Layout>
        <HeaderComponent />
        <Outlet />
      </Layout>
    </EmployeeContext.Provider>
  );
};

export default App;
