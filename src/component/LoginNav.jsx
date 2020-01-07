import React from "react";
import {Link} from "react-router-dom";
import '../style/bootstrap.min.css';
import '../style/style.css';

class LogoutNav extends React.Component{
    render(){
        return(
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item mr-0">
                    <a className="nav-link" href="#">Register</a>
                </li>
            </ul>
        )
    }
}

export default LogoutNav