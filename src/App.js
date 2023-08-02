import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import vid from "./img/header/vid-1.mp4";
import vid2 from "./img/header/video-2.mp4";
const App = () => {
  return (
    <div>
      {/* <video src={vid} loop autoPlay muted id="bg_vid" /> */}
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </div>
  );
};

export default App;
