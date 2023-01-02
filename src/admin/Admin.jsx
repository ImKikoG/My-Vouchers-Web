import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/admin/deliverers">Deliverers</Link>
          <Link to="/admin/students">Students</Link>
          <Link to="/admin/restaurants">Restaurants</Link>
          <Link to="/">Log out</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
