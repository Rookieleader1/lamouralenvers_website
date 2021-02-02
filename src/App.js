import "./style/output.css";
import AudioPlayer from "./Components/AudioPlayer";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const App = () => {
  // return (
  //   <div className="h-screen bg-blue-400">
  //     <AudioPlayer />
  //   </div>
  // );

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/QRcode1">
            <Redirect to="/" />
          </Route>
          <Route path="/">
            <AudioPlayer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
