import React from "react";
import {Link} from "react-router-dom";
import '../style/bootstrap.min.css';
import '../style/style.css';
import logo from '../image/logo.svg';
import CategoryNav from './CategoryNav'
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'

class Header extends React.Component{
    loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    state = {
        placeholder: 'Search',
        search: ''
    }

    handlingChange = async event => {
        if (event.target.value !== this.state.search){
            await this.setState({search: event.target.value})
            this.props.searchItem(this.state.search)
        }
    }

    handlingCategory = async (value) => {
        await this.props.history.replace("/category/" + value);
    }

    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                    <div className="container-fluid row">
                        <div className="col-lg-2 d-flex align-items-center">
                            <Link to='/' onClick={()=>this.props.isNews?this.props.setCategory('general'):this.handlingCategory('general')} className="navbar-brand">
                                <img src={logo} style={{height: '40px'}} />
                                <span>RandomNews</span>
                            </Link>
                            <button className="navbar-toggler toggler-btn" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse col-lg-10" id="navbar">
                            <div className="col-lg-6">
                                { this.loggedIn? <CategoryNav handlingCategory={this.handlingCategory}{...this.props}/>:null }

                            </div>

                            <div className="col-lg-4">
                                <div className="search-navbar">
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control search-form"
                                            type="search" 
                                            placeholder={this.state.placeholder} 
                                            aria-label="Search" 
                                            value={this.state.search}
                                            onChange={this.handlingChange}
                                            />
                                        <button className="btn btn-outline-secondary my-2 my-sm-0 search-btn" type="submit">
                                            <i className='material-icons'>search</i>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-2 pr-0">
                                    {
                                        this.loggedIn? <LogoutNav {...this.props}/> : <LoginNav {...this.props}/>
                                    }
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;