import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Home from "./components/Home";
import Note from "./components/Note";
import Dashboard from "./components/Dashboard";
import Compose from "./components/Compose";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/dashboard/:id" component={Note} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/compose" component={Compose} />
          </Switch>
        </React.Fragment>
      </AuthProvider>
    </Router>
  );
}

export default App;
