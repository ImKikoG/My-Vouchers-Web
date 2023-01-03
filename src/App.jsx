import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/pages/Login";
import Admin from "./admin/Admin";
import AdminStudents from "./admin/pages/AdminStudents";
import AdminDeliverers from "./admin/pages/AdminDeliverers";
import AdminRestaurants from "./admin/pages/AdminRestaurants";
import Restaurant from "./restaurant/Restaurant";
import RestaurantDashboard from "./restaurant/pages/RestaurantDashboard";
import RestaurantOrderHistory from "./restaurant/pages/RestaurantOrderHistory";
import RestaurantMenu from "./restaurant/pages/RestaurantMenu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="students" element={<AdminStudents />}></Route>
        <Route path="restaurants" element={<AdminRestaurants />}></Route>
        <Route path="deliverers" element={<AdminDeliverers />}></Route>
      </Route>
      <Route path="/restaurant" element={<Restaurant />}>
        <Route path="dashboard" element={<RestaurantDashboard />}></Route>
        <Route path="orderHistory" element={<RestaurantOrderHistory />}></Route>
        <Route path="menu" element={<RestaurantMenu />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
