import React from "react";
import {Redirect, withRouter} from 'react-router-dom';
import '../style/bootstrap.min.css';
import '../style/style.css';
import Header from '../component/Header'
import { connect } from "unistore/react";
import { actions } from "../store/MainStore";

class ProfilePage extends React.Component{
    loggedIn = this.props.loggedIn
    email = this.props.email
    name = this.props.name
    image = this.props.image
    status = this.props.status
    render(){
        if (this.props.loggedIn === false) {
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

export default connect(
    "loggedIn, email, name, image, status"
    , actions
    )(withRouter(ProfilePage))