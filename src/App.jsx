import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./auth/pages/Login";
import Admin from "./admin/Admin";
import AdminStudents from "./admin/pages/AdminStudents";
import AdminDeliverers from "./admin/pages/AdminDeliverers";
import AdminRestaurants from "./admin/pages/AdminRestaurants";
import Restaurant from "./restaurant/Restaurant";
import RestaurantDashboard from "./restaurant/pages/RestaurantDashboard";
import RestaurantOrderHistory from "./restaurant/pages/RestaurantOrderHistory";
import RestaurantMenu from "./restaurant/pages/RestaurantMenu";
import { AuthService } from "./auth/services/authService";
import { onAuthStateChanged } from "@firebase/auth";
import { auth, db } from "./common/services/firebaseService";
import { doc, getDoc } from "@firebase/firestore";

function App() {
  const [user, setUser] = useState();

  const getUser = async (uid) => {
    try {
      // const userQuery = doc(db, "user", uid);
      // const userRes = await getDoc(userQuery);
      // console.log(userRes);
      console.log("hello");
    } catch (e) {
      alert(e);
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      getUser(user.uid);
      setUser(user);
    }
  });

  return (
    <AuthService>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/"
          element={!user ? <Navigate replace to="/login" /> : <Admin />}
        >
          <Route path="students" element={<AdminStudents />}></Route>
          <Route path="restaurants" element={<AdminRestaurants />}></Route>
          <Route path="deliverers" element={<AdminDeliverers />}></Route>
        </Route>
        <Route path="/restaurant" element={<Restaurant />}>
          <Route path="dashboard" element={<RestaurantDashboard />}></Route>
          <Route
            path="orderHistory"
            element={<RestaurantOrderHistory />}
          ></Route>
          <Route path="menu" element={<RestaurantMenu />}></Route>
        </Route>
      </Routes>
    </AuthService>
  );
}

export default App;
