import React from "react";
import "./App.css";
import App1 from "./components/Main/Main";
import Company from "./Routes/Company";
import Org from "./Routes/Org";
import Login from "./components/SignIn/Login/Login";
import SignUp from "./components/SignIn/SignUp/SignUp";
import OProfile from "./Routes/OrgProf/OProfile";
import CProfile from "./Routes/CompProf/CProfile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

          <Route path="/company" element={<Company />} />
          <Route path="/org" element={<Org />} />
          <Route path="/orgprof" element={<OProfile />} />
          <Route path="/com-prof" element={<CProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
