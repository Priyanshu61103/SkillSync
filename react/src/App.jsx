import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs/Jobs";
import Internships from "./Internships/Internships";
import { store } from "./Redux/Store/store"
import { Provider } from "react-redux";
import Jobs2 from "./Jobs Host/Jobs2";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jobpostings" element={<Jobs />}></Route>
          <Route path="/internships" element={<Internships />}></Route>
          <Route path="/jobhost" element={<Jobs2/>}></Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
