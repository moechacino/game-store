import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ManageData from "./components/ManageData";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manage-data" element={<ManageData />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
