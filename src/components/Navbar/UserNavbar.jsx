import React,{useContext} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function UserNavbar() {
  const { userModel ,setUserModel} = useContext(UserContext);
  const navigate = useNavigate();
  

  function handleLogout() {
    setUserModel(null);
    // localStorage.removeItem("token");
     localStorage.removeItem("userModel");
    navigate("/user/login");
  }

  return (

    <div className='nav-bar'>
      <Link to='/user/home'>Home</Link>
      <Link to='/user/home/status'>status</Link>
      <Link to='/user/home/profile'>profile</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>

  )
}
