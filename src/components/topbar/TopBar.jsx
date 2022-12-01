import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://blog-api-pt2i.onrender.com/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
      <a href="https://www.facebook.com/groups/0minte.DMC0"  onClick={() => {
          alert("Redirecting to Facebook");
        }} > 
        <i className="topIcon fab fa-facebook-square"></i> </a>

        <a href="https://twitter.com/mgr_minte"  onClick={() => {
          alert("Redirecting to Twitter");
        }} > 
        <i className="topIcon fab fa-twitter-square"></i> </a>
        <a href="https://www.pinterest.com/Minte_DMC"  onClick={() => {
          alert("Redirecting to Pinterest");
        }} > 
        <i className="topIcon fab fa-pinterest-square"></i> </a>

        <a href="https://www.instagram.com/sixdotnetmint/"  onClick={() => {
          alert("Redirecting to Instagram");
        }} > 
        <i className="topIcon fab fa-instagram-square"></i> </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contactUS">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
