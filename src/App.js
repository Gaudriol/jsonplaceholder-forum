import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          Index with posts
        </Route>
        <Route exact path="/posts/:postId">
          Post
        </Route>
        <Route exact path="/users/:userId">
          User
        </Route>
        <Route path="*">Not found</Route>
      </Switch>
    </Router>
  );
}

export default App;
