import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Bio from "../portfolio-content/Bio";
// import Projects from "../portfolio-content/Projects";
import Contact from "../portfolio-content/Contact";
// import Login from "../portfolio-content/Login";
// import Resume from "../portfolio-content/Resume";
// import Error from "../portfolio-content/Error";

export default function Content({ setSelectedIndex, btnSound }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Bio setSelectedIndex={setSelectedIndex} btnSound={btnSound} />
        }
      />
      {/* <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} /> */}
            <Route path="/contact" element={<Contact btnSound />} />

    </Routes>
  );
}