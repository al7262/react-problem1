import React from "react";
import {Link} from "react-router-dom";
import '../style/bootstrap.min.css';
import '../style/style.css';

class LogoutNav extends React.Component{
    image = localStorage.getItem("image");

    loggedOut = () =>{
        this.props.handleChange('loggedIn', false)
        this.props.history.push('/')
        alert('You have logged out!')
    }
    render(){
        return(
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item logout">
                    <Link className="nav-link" onClick={this.loggedOut}>Logout</Link>
                </li>
                <li className="nav-item mr-0">
                    <Link className="nav-link" to="/profile"><img className="small-profile" src={this.image} alt="small-profile-pic"/></Link>
                </li>
            </ul>
        )
    }
}

export default LogoutNav