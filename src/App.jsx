import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Error from "./components/Error";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <div className="text-center bg-main">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/404" element={<Error />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </div>
    </>
  );
}

export default App;
