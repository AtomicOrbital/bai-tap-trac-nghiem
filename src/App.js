import React from "react";
import "./style.css";
import SignInForm from "./Login/SignIn/SignIn";
import SignUpForm from "./Login/SignUp/SignUp";
import Controller from "./Login/Controller";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';
import SignIn from '../src/Login/SignIn/SignIn'
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";

export const history = createBrowserHistory();

export default function App() {
  console.log('history', history);
  return (
    <Router history={history}>
      {/* <Controller /> */}
      <Switch>
        <Route path="/login" exact component={Controller} />
        <Route path="/home" exact component={Home} />
        <Route path="/admin" exact component={Admin} />
      </Switch>
    </Router>
  );
}
