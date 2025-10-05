import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs/Jobs";
import Internships from "./Internships/Internships";
import AuthPage from "./LoginAndSignUp/AuthPage.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/jobpostings" element={<Jobs />}></Route>
        <Route path="/internships" element={<Internships />}></Route>
          <Route path="/Auth" element={<AuthPage/>}></Route>
      </Routes>
    </>
  );
};

export default App;
