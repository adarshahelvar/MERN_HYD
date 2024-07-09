import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Signin from "../components/Signin/Signin";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default Routing;
