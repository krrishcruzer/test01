import React ,{useEffect,useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import UserContext from "../../../context/UserContext";

export default function Adminappliedloan() {

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
      Applied loans
    </div>
  )
}
