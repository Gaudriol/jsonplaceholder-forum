import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Posts } from "./pages/Posts";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Posts />
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
