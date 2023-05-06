import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import Customerapplyloan from "./components/Customer/Customerapplyloan/Customerapplyloan";
import Customerprofile from "./components/Customer/Customerprofile/Customerprofile";
import Customerloanstatus from "./components/Customer/Customerloanstatus/Customerloanstatus";
import Home from "../src/components/Admin/Home";
import UserContext from "./context/UserContext";
import UserSharedLayout from "./sharedlayout/UserSharedLayout";
import AdminSharedlayout from "../src/sharedlayout/AdminSharedLayout";
import Adminapprovedloan from "../src/components/Admin/adminapprovedloan/Adminapprovedloan";
import Adminappliedloan from "../src/components/Admin/adminappliedloan/Adminappliedloan";
function App() {
  const [userModel, setUserModel] = useState(() => {
    const storedUserModel = localStorage.getItem("userModel");

    if (storedUserModel) {
      return JSON.parse(storedUserModel);
    }

    return null;
  });
  useEffect(() => {
    localStorage.setItem("userModel", JSON.stringify(userModel));
  }, [userModel]);

  return (
    <UserContext.Provider value={{ userModel, setUserModel }}>
      <div className="App">
        <Routes>
          {/* PUBLIC ROUTE */}
          <Route path="/" element={<Login />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/admin/login" element={<Login />} />

          {/* USER ROUTES */}
          
          <Route path="/user/home" element={<UserSharedLayout />}>
            <Route index element={<Customerapplyloan />} />
            <Route path="status" element={<Customerloanstatus />} />
            <Route path="profile" element={<Customerprofile />} />
        
          </Route>
          

          {/* ADMIN ROUTES */}

          <Route path="/admin/home" element={ <AdminSharedlayout />  }>
            <Route index element={<Home />} />
            <Route path="approveloan" element={<Adminapprovedloan />} />
            <Route path="appliedloan" element={<Adminappliedloan />} />
          </Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
