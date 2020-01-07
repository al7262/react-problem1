import React from "react";
import {Link} from "react-router-dom";
import '../style/bootstrap.min.css';
import '../style/style.css';
import logo from '../image/logo.svg'

class Header extends React.Component{
    loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    image = localStorage.getItem("image");
    state = {
        placeholder: 'Search',
        search: ''
    }

    handlingLogout = async () => {
        await localStorage.setItem('loggedIn', false);
        this.props.history.push('/');
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
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item active">
                                        <Link className="nav-link" onClick={() => this.props.isNews?this.props.setCategory('sports'):this.handlingCategory('sports')}>Sports <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => this.props.isNews?this.props.setCategory('economy'):this.handlingCategory('economy')}>Economy</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => this.props.isNews?this.props.setCategory('politic'):this.handlingCategory('politic')}>Politic</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => this.props.isNews?this.props.setCategory('entertainment'):this.handlingCategory('entertainment')}>Entertainment</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" role="button" id="othersToggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Others</a>
                                        <div class="dropdown-menu bg-light" aria-labelledby="othersToggle">
                                            <Link class="dropdown-item" onClick={() => this.props.isNews?this.props.setCategory('celebrity'):this.handlingCategory('celebrity')}>Celebrity</Link>
                                            <Link class="dropdown-item" onClick={() => this.props.isNews?this.props.setCategory('random'):this.handlingCategory('random')}>Fun Fact</Link>
                                            <Link class="dropdown-item" onClick={() => this.props.isNews?this.props.setCategory('electronic'):this.handlingCategory('electronic')}>Electronic</Link>
                                        </div>
                                    </li>
                                </ul>

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
                                {console.warn(this.loggedIn)}
                                    {
                                        this.loggedIn?
                                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                            <li className="nav-item logout">
                                                <Link className="nav-link" to="/" onClick={()=>this.handlingLogout()}>Logout</Link>
                                            </li>
                                            <li className="nav-item mr-0">
                                                <Link className="nav-link" to="/profile"><img className="small-profile" src={this.image} alt=""/></Link>
                                            </li>
                                        </ul>
                                        :
                                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/login">Login</Link>
                                            </li>
                                            <li className="nav-item mr-0">
                                                <a className="nav-link" href="#">Register</a>
                                            </li>
                                        </ul>
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