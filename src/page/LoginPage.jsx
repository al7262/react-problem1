import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom"
import '../style/bootstrap.min.css';
import '../style/style.css';
import Header from '../component/Header';
import { connect } from "unistore/react";
import { actions } from "../store/MainStore";

class LoginPage extends React.Component{
    postLogin = async () => {
        const data = await {
          username: this.props.username,
          password: this.props.password
        };
        const self = this;
        await axios
          .post("https://justrandomapi2.free.beeceptor.com/auth", data)
          .then(function (response) {
              if (response.data.hasOwnProperty("token")) {
                self.props.handleChange("token", response.data.token);
                self.props.handleChange("loggedIn", true);
                self.props.handleChange("name", response.data.name);
                self.props.handleChange("email", response.data.email);
                self.props.handleChange("status", response.data.status);
                self.props.handleChange("image", response.data.image);
                self.props.history.push("/profile");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        alert('Welcome back!')
    };

    render(){
        return(
            <React.Fragment>
                <Header {...this.props}/>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4 login-box shadow-sm">
                            <h3>LOGIN</h3>
                            <form onSubmit={event => event.preventDefault()}>
                                <label htmlFor='username'>Username:</label><br/>
                                <input type="text"
                                    name='username'
                                    id='username'
                                    placeholder='Input your username'
                                    onChange={event=>this.props.handleInput(event)}
                                    /><br/>
                                <label htmlFor='password'>Password:</label><br/>
                                <input type="password"
                                    name='password'
                                    id='password'
                                    placeholder='Input your password'
                                    onChange={event=>this.props.handleInput(event)}
                                    /><br/>
                                <div className="button">
                                    <button className="btn btn-secondary" onClick={()=>this.postLogin()}>Login</button>
                                    <button className="btn btn-danger" type="reset">Reset</button>
                                </div>
                            </form>                        
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    "username, password, loggedIn",
    actions
    )(withRouter(LoginPage))