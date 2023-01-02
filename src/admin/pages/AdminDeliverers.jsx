import React from 'react'

export default function AdminDeliverers() {
  return (
    <div>
        <html lang="en" class="admin_html">
            <head>
            </head>
            <body class="admin_body">
                <header>
                    <nav class="admin_nav">
                        <ul class="admin_ul">
                            <li class="active_tab" id="li_restaurants"><a class="admin_tabs" href="admin_restaurants.html">Restaurants</a></li>
                            <li class="inactive_tab" id="li_students"><a class="admin_tabs" href="admin_deliverers.html">Deliverers</a></li>
                            <li class="inactive_tab" id="li_deliverers"><a class="admin_tabs" href="admin_students.html">Students</a></li>
                            <li class="inactive_tab" id="li_logout"><a class="admin_logout" href="">Log out</a></li>
                        </ul>                
                    </nav>
                </header>
                <div class="split left">
                        <table class="admin_table">
                            <tr>
                                <td>                            
                                    <input type="text" id="search" class="admin_search" name="name_search_input"/>
                                </td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Deliverer 1</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Deliverer 2</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Deliverer 3</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Deliverer 4</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Deliverer 5</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Deliverer 6</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Deliverer 7</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Deliverer 8</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Deliverer 9</td>
                            </tr>
                        </table>
                </div>
                <div class="split right">
                        <table class="admin_table">
                                <tr>
                                    <td id="info_full_name" class="info_name">Full name</td>
                                </tr>
                                <tr>
                                    <td id="info_restaurant_name" class="info_other">Restaurant name:</td>
                                </tr>
                                <tr>
                                    <td id="info_restaurant_address" class="info_other">Restaurant address:</td>
                                </tr>
                                <tr>
                                    <td id="info_student_name" class="info_other">Student name:</td>
                                </tr>
                                <tr>
                                    <td id="info_student_address" class="info_other">Student address:</td>
                                </tr>
                                <tr>
                                    <td id="info_state_of_current_delivery" class="info_other">State of current delivery:</td>
                                </tr>
                                <tr>
                                    <td id="info_contact" class="info_other">Contact:</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="" id="info_order_history" class="info_hyperlink">Order history</a>
                                    </td>
                                </tr>
                        </table>
                </div>
            </body>
        </html>
    </div>
  )
}
