import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App1 from "./App1";
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
    path: "/challenges",
    element: <App />,
    children: [
      {
        path: "/challenges",
        element: <></>,
      },
      {
        path: "/challenges/list",
        element: <ChallengeList />,
      },
      {
        path: "/challenges/addchallenges",
        element: <AddChallenge />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
