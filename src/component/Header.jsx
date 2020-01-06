import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';
import logo from '../image/logo.svg'

class Header extends React.Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                    <div className="container-fluid row">
                        <div className="col-lg-2 d-flex align-items-center">
                            <a className="navbar-brand" href="#">
                                <img src={logo} style={{height: '40px'}} />
                                <span>RandomNews</span>
                            </a>
                            <button className="navbar-toggler toggler-btn" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse col-lg-10" id="navbar">
                            <div className="col-lg-6">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Sports <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Economy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Politic</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Entertainment</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" id="othersToggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Others</a>
                                        <div class="dropdown-menu bg-light" aria-labelledby="othersToggle">
                                            <a class="dropdown-item" href="#">Celebrity</a>
                                            <a class="dropdown-item" href="#">Fun Fact</a>
                                            <a class="dropdown-item" href="#">Electronic</a>
                                        </div>
                                    </li>
                                </ul>

                            </div>

                            <div className="col-lg-4">
                                <div className="search-navbar">
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control search-form" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-info my-2 my-sm-0 search-btn" type="submit">
                                            <i className='material-icons'>search</i>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-2 pr-0">
                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Login <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item mr-0">
                                        <a className="nav-link" href="#">Register</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;