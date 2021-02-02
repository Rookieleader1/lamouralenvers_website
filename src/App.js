import "./style/output.css";
import AudioPlayer from "./Components/AudioPlayer";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  // return (
  //   <div className="h-screen bg-blue-400">
  //     <AudioPlayer />
  //   </div>
  // );

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/QRcode1">QRcode1</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/QRcode1">
            <div>QR code 1</div>
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
