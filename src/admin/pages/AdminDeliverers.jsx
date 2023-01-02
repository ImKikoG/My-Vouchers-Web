import React from "react";

export default function AdminDeliverers() {
  return (
    <div>
      <div className="split left">
        <table className="admin_table">
          <tr>
            <td>
              <input
                type="text"
                id="search"
                className="admin_search"
                name="name_search_input"
              />
            </td>
          </tr>
          <tr>
            <td className="admin_list">&emsp;Deliverer 1</td>
          </tr>
          <tr>
            <td className="admin_list">&emsp;Deliverer 2</td>
          </tr>
          <tr>
            <td className="admin_list">&emsp;Deliverer 3</td>
          </tr>
          <tr>
            <td className="admin_list">&emsp;Deliverer 4</td>
          </tr>
          <tr>
            <td className="admin_list">&emsp;Deliverer 5</td>
          </tr>
          <tr>
            <td className="admin_list">&emsp;Deliverer 6</td>
          </tr>
          <tr>
            <td className="admin_list">&emsp;Deliverer 7</td>
          </tr>
          <tr>
            <td className="admin_list">&emsp;Deliverer 8</td>
          </tr>
          <tr>
            <td className="admin_list">&emsp;Deliverer 9</td>
          </tr>
        </table>
      </div>
      <div className="split right">
        <table className="admin_table">
          <tr>
            <td id="info_full_name" className="info_name">
              Full name
            </td>
          </tr>
          <tr>
            <td id="info_restaurant_name" className="info_other">
              Restaurant name:
            </td>
          </tr>
          <tr>
            <td id="info_restaurant_address" className="info_other">
              Restaurant address:
            </td>
          </tr>
          <tr>
            <td id="info_student_name" className="info_other">
              Student name:
            </td>
          </tr>
          <tr>
            <td id="info_student_address" className="info_other">
              Student address:
            </td>
          </tr>
          <tr>
            <td id="info_state_of_current_delivery" className="info_other">
              State of current delivery:
            </td>
          </tr>
          <tr>
            <td id="info_contact" className="info_other">
              Contact:
            </td>
          </tr>
          <tr>
            <td>
              <a href="" id="info_order_history" className="info_hyperlink">
                Order history
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
