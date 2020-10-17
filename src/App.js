import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { testCycle } from "./state/test/action";

function App() {
  const dispatch = useDispatch();

  dispatch(testCycle("terst"));

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
