import React from "react";
import {Link, withRouter} from "react-router-dom";
import '../style/bootstrap.min.css';
import '../style/style.css';
import logo from '../image/logo.svg';
import CategoryNav from './CategoryNav'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'
import { connect } from "unistore/react";
import { actions } from "../store/MainStore";

class Header extends React.Component{
    
    handlingCategory = async (value) => {
        await this.props.history.replace("/category/" + value);
    }

    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                    <div className="container-fluid row">
                        <div className="col-lg-2 d-flex align-items-center">
                            <Link to='/' onClick={()=>this.props.isNews?this.props.handlingChange('category', 'general'):this.handlingCategory('general')} className="navbar-brand">
                                <img src={logo} style={{height: '40px'}} />
                                <span>RandomNews</span>
                            </Link>
                            <button className="navbar-toggler toggler-btn" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse col-lg-10 pr-0" id="navbar">
                            <div className="col-lg-6 pr-0">
                                { this.props.loggedIn? <CategoryNav isNews={this.props.isNews} handlingCategory={this.handlingCategory}{...this.props}/>:null }
                            </div>

                            <div className="col-lg-4 d-flex justify-content-center pr-0">
                                <div className="search-navbar">
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control search-form"
                                            type="search" 
                                            name="search"
                                            placeholder="Search"
                                            aria-label="Search" 
                                            value={this.props.search}
                                            onChange={event => this.props.handleInput(event)}
                                            />
                                        <button className="btn btn-outline-secondary my-2 my-sm-0 search-btn" type="submit">
                                            <i className='material-icons'>search</i>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-2 pr-0">
                                { this.props.loggedIn? <LogoutNav {...this.props}/> : <LoginNav {...this.props}/> }
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default connect(
    "loggedIn, search",
    actions)(withRouter(Header));