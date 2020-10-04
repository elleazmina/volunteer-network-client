import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          
          <PrivateRoute path="/register">
          <Register></Register>
          </PrivateRoute>

          <Route exact path="/">
          <Header></Header>
          <Headline></Headline>
          </Route>
        </Switch>
      </Router>
      
      </UserContext.Provider>
  );
}

export default App;
