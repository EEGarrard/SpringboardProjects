import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Planets from "../pages/Planets/Planets";
import Spacecrafts from "../pages/Spacecrafts/Spacecrafts";
import Spacecraft from "../pages/Spacecraft/Spacecraft";
import SpacecraftConstruction from "../pages/SpacecraftConstruction/SpacecraftConstruction";
import React from "react";

export default function AppRoutes() {
  return (
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/planets" element={<Planets/>}/>
  <Route path="/spacecrafts" element={<Spacecrafts/>}/>
  <Route path="/spacecrafts/new" element={<SpacecraftConstruction />} /> {/* Add this line */}
  <Route path="/spacecrafts/:id" element={<Spacecraft />} />
  <Route path="/spacecrafts/edit/:id" element={<SpacecraftConstruction />} />
</Routes>
  );
}
