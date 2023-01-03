import React from "react";

export default function RestaurantDashboard() {
  return (
    <div>
      <div className="info_restaurant_name"> Restaurant Name</div>
      <div className="info_stats">Orders completed today: </div>
      <div className="info_stats">Orders completed this month: </div>
      <div className="info_stats">Orders cancelled: </div>
      <div className="info_pending">Pending orders: </div>

      <div className="order">
        <div className="order_name">Order 1</div>
        <div className="customer_name">Customer Name</div>
      </div>
      <div className="order">
        <div className="order_name">Order 2</div>
        <div className="customer_name">Customer Name</div>
      </div>
      <div className="order">
        <div className="order_name">Order 3</div>
        <div className="customer_name">Customer Name</div>
      </div>
      <div className="order">
        <div className="order_name">Order 4</div>
        <div className="customer_name">Customer Name</div>
      </div>
    </div>
  );
}
