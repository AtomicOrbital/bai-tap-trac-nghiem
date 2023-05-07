import React, {useEffect} from "react";
import "./style.css";
import SignInForm from "./Login/SignIn/SignIn";
import SignUpForm from "./Login/SignUp/SignUp";
import Controller from "./Login/Controller";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';
import SignIn from '../src/Login/SignIn/SignIn'
import Home from "./Pages/Home/Home";
import {Admin} from "./Pages/Admin/Admin";
import {Profile} from "./Pages/Profile/Profile";
import {Category} from "./Pages/Category/Category";
import { Exercise } from "./Pages/Exercise/Exercise";
import { Question } from "./Pages/Question/Question";
import {DoExercise} from "./Pages/DoExercise/DoExercise"
import { DoPage } from "./Pages/DoExercise/DoPage";

export const history = createBrowserHistory();

export default function App() {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.location.reload();
    });
    return unlisten;
  }, [history]);
  return (
    <Router history={history}>
      {/* <Controller /> */}
      <Switch>
        <Route path="/login" exact component={Controller} />
        <Route path="/home" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/category" exact component={Category} />
        <Route path="/exercise" component={Exercise} />
        <Route path="/do-exercise/:id" component={DoPage} />
        <Route path="/do-exercise" exact component={DoExercise} />
        <Route path="/question" component={Question} />
      </Switch>
    </Router>
  );
}