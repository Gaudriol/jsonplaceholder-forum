import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Topbar } from "./components";

import { Posts, PostDetails, User } from "./pages";

function App() {
  return (
    <Router>
      <Container>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route exact path="/posts/:postId">
            <PostDetails />
          </Route>
          <Route exact path="/users/:userId">
            <User />
          </Route>
          <Route path="*">Not found</Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
