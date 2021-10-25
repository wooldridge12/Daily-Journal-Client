import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
// import { NavBar } from "./nav/NavBar";

export const DailyJournal = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("daily_journal_token")) {
            return (
              <>
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route
        path="/login"
        render={() => {
          if (localStorage.getItem("daily_journal_token")) {
            return <Redirect to="/" />;
          } else {
            return <Login />;
          }
        }}
      />
  
      <Route
        path="/register"
        render={() => {
          if (localStorage.getItem("auther_id")) {
            return <Redirect to="/" />;
          } else {
            return <Register />;
          }
        }}
      />
    </>
  );