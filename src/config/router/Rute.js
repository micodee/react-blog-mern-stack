import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Error, Login, Register } from "../../pages/Pages";
import Mainapp from "./Mainapp";

const Rute = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<Mainapp/>} >
            <Route path="*" element={<Error/>} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Rute;
