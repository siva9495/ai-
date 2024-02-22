import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Details from "./components/details";
// import Description from "./components/description";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/details" Component={Details} />
        {/* <Route path="/description" Component={Description} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
