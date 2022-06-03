import React from "react";
import AppBar from "./Components/Header";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RocketsPage from "./Pages/RocketsPage";
import UpcomingLaunchesPage from "./Pages/UpcomingLaunchesPage";
import SingleRocketPage from "./Pages/SingleRocketPage";
import AboutMePage from "./Pages/AboutMePage";
import AboutSpaceXPage from "./Pages/AboutSpaceXPage";
import StarlinkPage from "./Pages/StarlinkPage";
function App() {
  /*
  REACT ROUTER
  PARRALAX BACKGROUND
  SPACE THEME
  API
  MUI
  REDUX
  Framer Motion
  */
  return (
    <div className="App">
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/me" element={<AboutMePage />}></Route>
          <Route path="/spacex" element={<AboutSpaceXPage />}></Route>
          <Route path="/rockets" element={<RocketsPage />}></Route>
          <Route path="/starlink" element={<StarlinkPage />}></Route>
          <Route path="/launches" element={<UpcomingLaunchesPage />}></Route>
          <Route
            path="/launches/:id"
            element={<UpcomingLaunchesPage />}
          ></Route>
          <Route path="/rockets/:id" element={<SingleRocketPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
