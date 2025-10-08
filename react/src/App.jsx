import React from "react";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs/Jobs";
import Internships from "./Internships/Internships";
import AuthPage from "./LoginAndSignUp/AuthPage.jsx";
import {Provider} from "react-redux";
import {store} from "./Redux/Store/store.js";
import Resume from "./Resume/Resume.jsx";
import Jobs2 from "./Jobs Host/Jobs2.jsx";
import Internships2 from "./Internships Host/Internships2.jsx"
import Interview from "./Interview/Interview.jsx";
const App = () => {
    return (
        <Provider store={store}>
        <Router>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/jobpostings" element={<Jobs/>}></Route>
                    <Route path="/internships" element={<Internships/>}></Route>
                    <Route path="/Auth" element={<AuthPage/>}></Route>
                    <Route path="/resume" element={<Resume/>}></Route>
                    <Route path="/jobhost" element={<Jobs2/>}></Route>
                    <Route path="/internshiphost" element={<Internships2/>}></Route>
                    <Route path = "/aiinterview" element = {<Interview/>}></Route>
                </Routes>

        </Router>
        </Provider>
    );
};

export default App;
