import React from 'react'

export default function AdminRestaurants() {
  return (
    <div>
        <html lang="en">
            <head>
            </head>
            <body>
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
                                <td id="admin_list">&emsp;Restaurant 1</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Restaurant 2</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Restaurant 3</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Restaurant 4</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Restaurant 5</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Restaurant 6</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Restaurant 7</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Restaurant 8</td>
                            </tr>
                            <tr>
                                <td id="admin_list">&emsp;Restaurant 9</td>
                            </tr>
                        </table>
                </div>
                <div class="split right">
                        <table class="admin_table">
                                <tr>
                                    <td id="info_full_name" class="info_name">Restaurant name</td>
                                </tr>
                                <tr>
                                    <td id="info_address" class="info_other">Address:</td>
                                </tr>
                                <tr>
                                    <td id="info_tax_number" class="info_other">Tax number:</td>
                                </tr>
                                <tr>
                                    <td id="info_registration" class="info_other">Registration:</td>
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