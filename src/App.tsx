import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Demo from "./Demo";
import { pathIds, pageRoutes } from "./routes";
import { SvgIconTypeMap } from '@material-ui/core';



const routeArray = Object.values(pageRoutes);
    
const App = () => (
  <Router>
    <div>
      <Demo routes={routeArray} />

      <Switch>
        {routeArray.map((prop, key) => {
          return (
            <Route
              path={prop.path}
              component={prop.component}
              key={`route-${key}`}
            />
          );
        })}
      </Switch>
    </div>
  </Router>
);

export default App;

