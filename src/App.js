import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login.jsx";
import Details from './components/Details.jsx';
import EditDetails from "./components/EditDetails.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login/>
        </Route>
        <Route path="/details">
          <Details/>
        </Route>
        <Route path="/edit-details">
          <EditDetails/>
        </Route>
        {/* <Route path="/description" Component={Description} /> */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
