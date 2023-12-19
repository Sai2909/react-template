import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashBoardLayout";
import Dashboard from "../Dashboard/Dashboard";
import Notifications from "../Notifications/Notifications";
import MyFavorites from "../MyFavorites/MyFavorites";
import MyProducts from "../MyProducts/MyProducts";
const Home = () => {
  return (
    <>
    <div className="App"><h1>Hello World</h1></div>
      
      <BrowserRouter>
        <Routes>
          <Route exact path="" element={<DashboardLayout />}>
            <Route index element={<MyProducts />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="myProducts" element={<MyProducts />} />
            <Route path="myFavorites" element={<MyFavorites />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
