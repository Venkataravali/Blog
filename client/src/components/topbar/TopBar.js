import {Link} from "react-router-dom";
import "./topbar.css"

const TopBar = () => {
  const user = false;
  return (
    <div className="top">
     <div className="topLeft">
     <i className="topIcon fab fa-square-facebook"></i>
     <i className="topIcon fab fa-square-twitter"></i>
     <i className="topIcon fab fa-square-instagram"></i>
     <i className="topIcon fab fa-square-pinterest"></i>
     </div>
     <div className="topCenter">
       <ul className="topList">
        <li className="topListItem">
          <Link to ="/" className="link" >HOME</Link>
        </li>
        <li className="topListItem"> <Link to ="/" className="link" >ABOUT</Link></li>
        <li className="topListItem"> <Link to ="/" className="link" >CONTACT</Link></li>
        <li className="topListItem"> <Link to ="/write" className="link" >WRITE</Link></li>
        <li className="topListItem"> 
        {user && "LOGOUT"}
        </li>
       </ul>
     </div>
     <div className="topRight">
      {
        user ? (

        <img className="topImg"
        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
        alt=""/>
        ) : (
          <ul classame="topList">
        <li className="topListItem">
        <Link className="link" to="/login">
            LOGIN</Link></li>  
            <li className="topListItem">
        <Link className="link" to="/register">
            REGISTER</Link></li> 
          </ul>
        )
}
<i className="topSearchIcon fas fa-search"></i>
      
     </div>
    </div>
  )
}

export default TopBar
