import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login/index";
import HomePage from "./views/HomePage/index";
import User from "./views/User/index";
import AddUser from "./views/User/addUser";
import EditUser from "./views/User/addUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/users" element={<User />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/editUser/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
