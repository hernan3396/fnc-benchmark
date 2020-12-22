import React from "react";
import "./App.css";
import Header from "./features/header/Header";
import Home from "./features/home/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Comparative from "./features/comparative/Comparative";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
          <Header />
          <div class="app-main">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/benchmark" component={Comparative} />
              <Route
                exact
                path="/benchmark/:clickedPost"
                component={Comparative}
              />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
