import {  Navigate,useNavigate, Outlet } from 'react-router-dom';
import React, { useEffect,useContext } from 'react'
import UserContext from '../context/UserContext';

function ProtectedRoute() {
  
  
  const { userModel ,setUserModel} = useContext(UserContext);
  
  const navigate = useNavigate();



  return (
    userModel.userRole==="user"? <Outlet/> :  <Navigate to="/user/login" replace />
  )

}
export default ProtectedRoute;