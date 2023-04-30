import React from "react";
import { Routes, Route } from "react-router-dom";

export default function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
        <Route path="/activeUsers" element={<div>Active User List</div>}></Route>
        <Route path="/disabledusers" element={<div>Disabled User List</div>}></Route>
        <Route path="/profile" element={<div>Profile</div>}></Route>
      </Routes>
    </div>
  );
}
