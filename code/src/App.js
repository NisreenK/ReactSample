import { Route, Switch } from "react-router-dom";

import LoginPage from "./pages/LoginPage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import React, { useState } from "react";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/posts">
          <PostsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
