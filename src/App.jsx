import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Workout from "./pages/workout/Workout";
import CopyWorkout from "./pages/workout/CopyWorkout";
import AddWorkout from "./pages/workout/addWorkout/AddWorkout";
import Diet from "./pages/Diet";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/workout/add" element={<AddWorkout />} />
        <Route path="/workout/copy" element={<CopyWorkout />} />
        <Route path="/diet" element={<Diet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
