import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div className="admin-page-container">
      <nav className="admin-nav">
        <div className="left-align">
          <Link to="/admin/deliverers">Deliverers</Link>
          <Link to="/admin/students">Students</Link>
          <Link to="/admin/restaurants">Restaurants</Link>
        </div>
        <div className="right-align">
          <Link to="/">Log out</Link>
        </div>
      </nav>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}
