import MainContainer from "./MainContainer.jsx";
import AlgoContainer from "./algoContainer.jsx";
import React, { Component, useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Choice = () => {
  return (
    <div>
      <div className="mainContainer">
        <div className="mainTitle"> CODERACER</div>
      <Router>
        <div className="choice">
          <div className="loadscreen">
            <Link to="/algocontainer">
              <button className="crtSpecial algo">ALGORITHM</button>
            </Link>
            <Link to="/maincontainer">
              <button className="crtSpecial code">CODE</button>
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/maincontainer">
            <MainContainer />
          </Route>
          <Route path="/algocontainer">
            <AlgoContainer />
          </Route>
        </Switch>
      </Router>
    </div>
    </div>
  );
};

export default Choice;
