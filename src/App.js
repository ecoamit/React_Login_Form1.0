import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import SignForm from "./Components/SignForm";
import LoginForm from "./Components/loginForm";
import Header from "./Components/Header";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import Editpage from "./Components/EditPage";
import "./App.css";

const App = () => {
  const isLogged = localStorage.getItem("loguser");
  const isSigned = localStorage.getItem("signuser");

  return (
    <BrowserRouter>
      <Container fluid className="formbg">
        <Header />
        <Switch>
          <Route path="/SignForm" component={SignForm} />
          <Route path="/LoginForm" component={LoginForm} />

          <Route
            path="/Home"
            exact
            render={() => {
              return isLogged === isSigned ? (
                <Home />
              ) : (
                <Redirect to="/SignForm"></Redirect>
              );
            }}
          />
          <Route
            path="/Editpage"
            render={() => {
              return isLogged === isSigned ? (
                <Editpage />
              ) : (
                <Redirect to="/Editpage"></Redirect>
              );
            }}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
