import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ChallengeList from "./components/ChallengeList";
import AddChallenge from "./components/AddChallenge";
import Login from "./components/Login";
import SignUp from "./components/Signup";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <ChallengeList />,
      },
      {
        path: "/home/addchallenges",
        element: <AddChallenge />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
