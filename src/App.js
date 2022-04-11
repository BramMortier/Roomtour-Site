import React from "react";
import Homepage from "./pages";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/RoomTour-Website" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
