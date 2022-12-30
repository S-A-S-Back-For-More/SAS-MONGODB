import "./btn-profile.css";
// import { Routes } from "./routes/Routes";
// import { Route } from "react-router-dom";

// import  Login  from "../pages/Login";
import { useNavigate } from "react-router-dom";
// import {Link} from "react-router-dom"

function BtnProfile() {
  let navigate = useNavigate();
  return (
    <>
      <div className="group-btn">
        <div className="login-btn-wrapper">
          {/* <Link to={`/${<Login/>}`}> */}
          <button
            className="delete"
            id="delete-btn"
            onClick={() => {
              navigate("/");
            }}
          >
            <span className="btn--anim"></span>
            <span className="btn--anim"></span>
            <span className="btn--anim"></span>
            <span className="btn--anim"></span>
            DELETE ALL
          </button>
          {/* </Link> */}
        </div>
        <div className="register-btn-wrapper">
          <button
            className="add"
            id="add-btn"
            onClick={() => {
              navigate("/add-post");
            }}
          >
            <span className="btn--anim1"></span>
            <span className="btn--anim1"></span>
            <span className="btn--anim1"></span>
            <span className="btn--anim1"></span>
            ADD POST
          </button>
        </div>
      </div>
    </>
  );
}
export default BtnProfile;
