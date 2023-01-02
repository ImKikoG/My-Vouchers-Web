import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/pages/Login";
import Admin from "./admin/Admin";
import AdminStudents from "./admin/pages/AdminStudents";
import AdminDeliverers from "./admin/pages/AdminDeliverers";
import AdminRestaurants from "./admin/pages/AdminRestaurants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="students" element={<AdminStudents />}></Route>
        <Route path="restaurants" element={<AdminRestaurants />}></Route>
        <Route path="deliverers" element={<AdminDeliverers />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
