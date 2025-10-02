import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs/Jobs";
import Internships from "./Internships/Internships";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/jobpostings" element={<Jobs />}></Route>
        <Route path="/internships" element={<Internships />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
