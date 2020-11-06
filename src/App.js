import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./features/header/Header";
import Home from "./features/home/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Comparative from "./features/comparative/Comparative";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/comparativo" component={Comparative} />
            <Redirect to="/" />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
