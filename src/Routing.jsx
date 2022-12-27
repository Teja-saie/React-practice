import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Project from "./Components/Project";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about/" element={<About />}>
        <Route path="projects" element={<Project />} />
      </Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
};

export default Routing;
