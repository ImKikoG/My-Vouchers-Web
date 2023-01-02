import React from "react";

export default function AdminStudents() {
  return (
    <div className="admin-container">
      <div class="split left">
        <table>
          <tr>
            <td>
              <input type="text" id="search" name="name_search_input" />
            </td>
          </tr>
          <tr>
            <td id="list">&emsp;Student 1</td>
          </tr>
          <tr>
            <td id="list">&emsp;Student 2</td>
          </tr>
          <tr>
            <td id="list">&emsp;Student 3</td>
          </tr>
          <tr>
            <td id="list">&emsp;Student 4</td>
          </tr>
          <tr>
            <td id="list">&emsp;Student 5</td>
          </tr>
          <tr>
            <td id="list">&emsp;Student 6</td>
          </tr>
          <tr>
            <td id="list">&emsp;Student 7</td>
          </tr>
          <tr>
            <td id="list">&emsp;Student 8</td>
          </tr>
          <tr>
            <td id="list">&emsp;Student 9</td>
          </tr>
        </table>
      </div>
      <div class="split right">
        <table>
          <tr>
            <td id="info_full_name" class="info_name">
              Full name
            </td>
          </tr>
          <tr>
            <td id="info_address" class="info_other">
              Address:
            </td>
          </tr>
          <tr>
            <td id="info_id" class="info_other">
              ID:
            </td>
          </tr>
          <tr>
            <td id="info_application_no" class="info_other">
              Application No:
            </td>
          </tr>
          <tr>
            <td id="info_contact" class="info_other">
              Contact:
            </td>
          </tr>
          <tr>
            <td id="info_vouchers_left" class="info_other">
              Vouchers left:
            </td>
          </tr>
          <tr>
            <td id="info_nex_voucher_eta" class="info_other">
              Next voucher ETA:
            </td>
          </tr>
          <tr>
            <td id="info_state_of_current_order" class="info_other">
              State of current order:
            </td>
          </tr>
          <tr>
            <td id="info_deliverer" class="info_other">
              Deliverer:
            </td>
          </tr>
          <tr>
            <td>
              <a href="" id="info_order_history" class="info_hyperlink">
                Order history
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
