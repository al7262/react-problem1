import React from "react";
import {Redirect} from 'react-router-dom';
import '../style/bootstrap.min.css';
import '../style/style.css';
import Header from '../component/Header'

class ProfilePage extends React.Component{
    loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    email = localStorage.getItem("email");
    name = localStorage.getItem("name");
    image = localStorage.getItem("image");
    status = localStorage.getItem("status");
    render(){
        console.warn("loggedIn", this.loggedIn);
        if (this.loggedIn === false) {
            return <Redirect to={{ pathname: "/login" }} />;
        } else {
            return (
                <React.Fragment>
                    <Header {...this.props}/>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6 profile-box shadow-sm">
                                <img src={this.image} alt=""/>
                                <h4>{this.name}</h4>
                                <div className="details">
                                    <p><span>Email:</span>{this.email}</p>
                                    <p><span>Status:</span>{this.status}</p>
                                </div>
                            </div>
                            <div className="col-lg-3"></div>
                        </div>
                    </div>
                </React.Fragment>
        );
      }
    }
}

export default ProfilePage