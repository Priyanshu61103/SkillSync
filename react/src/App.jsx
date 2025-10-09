import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs/Jobs";
import Internships from "./Internships/Internships";
import AuthPage from "./LoginAndSignUp/AuthPage.jsx";
import { store } from "./Redux/Store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Jobs2 from "./Jobs Host/Jobs2";
import Internships2 from "./Internships Host/Internships2";
import Resume from "./Resume/Resume.jsx";
import Interview from "./Interview/Interview.jsx"
import AiSetup from "./Interview/Aisetup.jsx";
import "react-toastify/dist/ReactToastify.css";
import Details from "./Details/Details.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jobpostings" element={<Jobs />}></Route>
          <Route path="/internships" element={<Internships />}></Route>
          <Route path="/Auth" element={<AuthPage />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/jobhost" element={<Jobs2 />}></Route>
          <Route path="/internshiphost" element={<Internships2 />}></Route>
          <Route path="/aiinterview" element={<Interview />}></Route>
          <Route path="/aisetup" element={<AiSetup/>}></Route>
          <Route path="/details" element={<Details/>}></Route>
        </Routes>
        {/* <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        /> */}
      </Router>
    </Provider>
  );
};

export default App;
