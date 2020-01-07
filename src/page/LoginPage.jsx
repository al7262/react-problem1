import React from "react";
import axios from "axios";
import '../style/bootstrap.min.css';
import '../style/style.css';
import Header from '../component/Header'

class LoginPage extends React.Component{
    state = {
        username: '',
        password: ''
    }

    postLogin = () => {
        const { username, password } = this.state;
        const data = {
          username: username,
          password: password
        };
        const self = this;
        axios
          .post("https://justrandomapi.free.beeceptor.com/auth", data)
          .then(function (response) {
              if (response.data.hasOwnProperty("token")) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("name", response.data.name);
                localStorage.setItem("email", response.data.email);
                localStorage.setItem("status", response.data.status);
                localStorage.setItem("image", response.data.image);
                self.props.history.push("/profile");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      };

    changeInput = event =>{
        this.setState({[event.target.name]: event.target.value})
    }

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
                                    onChange={event=>this.changeInput(event)}
                                    /><br/>
                                <label htmlFor='password'>Password:</label><br/>
                                <input type="password"
                                    name='password'
                                    id='password'
                                    placeholder='Input your password'
                                    onChange={event=>this.changeInput(event)}
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

export default LoginPage