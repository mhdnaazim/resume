import React from "react";
import Home from "./Components/Home";
import Form from "./Components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/resume/">
        <Routes>
          <Route index element={<Form />} />
          <Route path="/Resume" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App