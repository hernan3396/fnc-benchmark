import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./features/header/Header";
import Home from "./features/home/Home";
import Brand from "./features/brand/Brand";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Objective from "./features/objective/Objective";
import PostInfo from "./features/postinfo/PostInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:brandName" component={Brand} />
            <Route
              exact
              path="/:brandName/:objectiveName"
              component={Objective}
            />
            <Route
              exact
              path="/:brandName/:objectiveName/:adId/:creativeId"
              component={PostInfo}
            />
            <Redirect to="/" />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
