import React,{useContext} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function AdminNavbar() {
    const { userModel ,setUserModel} = useContext(UserContext);
    const navigate = useNavigate();
    
  
    function handleLogout() {
      setUserModel(null);
      // localStorage.removeItem("token");
       localStorage.removeItem("userModel");
      navigate("/user/login");
    }
  
    return (
  
      <div className='admin-nav-bar'>
        <Link to='/admin/home'>Home</Link>
        <Link to='/admin/home/approveloan'>Approve loan</Link>
        <Link to='/admin/home/appliedloan'>Applied Loan Status</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
  
    )
}
