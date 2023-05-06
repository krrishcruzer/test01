import React,{useEffect,useContext} from 'react'
import UserContext from '../../../context/UserContext';
import {useNavigate} from 'react-router-dom'

export default function Adminapprovedloan() {
  const { userModel ,setUserModel} = useContext(UserContext);



  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userModel'));
    if (storedUser && storedUser.userRole === 'user') {
      localStorage.removeItem("userModel");
      console.log("token removal is done by admin home")
      setUserModel(null)
      navigate('/user/login');
    }
  }, [navigate]);

  
  return (
    <div>
      admin approved loan component
    </div>
  )
}
