import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import Login from "./components/login";
import Friends from "./components/friends";
import FriendDetail from "./components/friendDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Friends</h1>
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>

          <li>
            <Link to="/friends">friends</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/friends" exact component={Friends} />
          <Route path="/friends/:id" exact component={FriendDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//switch
//as soon as it finds a path with a match it will render
// that path.
