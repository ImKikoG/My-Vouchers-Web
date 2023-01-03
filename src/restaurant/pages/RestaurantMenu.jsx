import React from "react";

export default function RestaurantMenu() {
  return (
    <div>
      <div className="restaurant_search_bar">
        <input type="text" placeholder="Search..." id="search" className="admin_search" name="name_search_input"/>
      </div>

      <div className="menu_entry">
        <div className="menu_order_name">Order 1</div>
        <div className="menu_ingredients">Ingredients: </div>
        <div className="menu_duration">Time to prepare: </div>
      </div>
      <div className="menu_entry">
        <div className="menu_order_name">Order 2</div>
        <div className="menu_ingredients">Ingredients: </div>
        <div className="menu_duration">Time to prepare: </div>
      </div>
      <div className="menu_entry">
        <div className="menu_order_name">Order 3</div>
        <div className="menu_ingredients">Ingredients: </div>
        <div className="menu_duration">Time to prepare: </div>
      </div>
      <div className="menu_entry">
        <div className="menu_order_name">Order 4</div>
        <div className="menu_ingredients">Ingredients: </div>
        <div className="menu_duration">Time to prepare: </div>
      </div>
    </div>
  );
}
