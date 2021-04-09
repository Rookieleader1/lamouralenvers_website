import "./style/output.css";
import AudioPlayerPage from "./Components/AudioPlayerPage";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => (
  <Router>
    <div style={{ background: "#e0dedd" }}>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/QRcode1">
          <Redirect to="/" />
        </Route>
        <Route path="/">
          <AudioPlayerPage />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
