import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Signin from "../components/Signin/Signin";
import Singleblog from "../components/SingleBlog/Singleblog";
import CreateBlog from "../components/CreateBlog/CreateBlog";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/singleblog/:id" element={<Singleblog />} />
      <Route path="/createNewBlog" element={<CreateBlog />} />
    </Routes>
  );
};

export default Routing;
