import React from "react";
import {Link} from "react-router-dom";
import '../style/bootstrap.min.css';
import '../style/style.css';

class ListArticleStructure extends React.Component{
    image = localStorage.getItem("image");

    handlingLogout = async () => {
        await localStorage.setItem('loggedIn', false);
        this.props.history.push('/');
    }

    render(){
        return(
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item logout">
                    <Link className="nav-link" to="/" onClick={()=>this.handlingLogout()}>Logout</Link>
                </li>
                <li className="nav-item mr-0">
                    <Link className="nav-link" to="/profile"><img className="small-profile" src={this.image} alt=""/></Link>
                </li>
            </ul>
        )
    }
}

export default ListArticleStructure