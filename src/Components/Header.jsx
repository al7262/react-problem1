import React from "react";
import logo from '../Images/logo-ALTA.png';
import '../Styles/bootstrap.min.css'
import '../Styles/style.css';

class HeaderClass extends React.Component {
    render () {
        return(
            <header class="border-bottom fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12 col-sm-3 logo">
                            <img src={logo} style={{height: '100%'}} />
                        </div>
                        <div className="col-md-9 col-12 col-sm-9 d-flex justify-content-end">
                            <nav className="navbar navbar-expand-lg">
                                <ul className="navbar-nav mr-auto nav-mobile">
                                    <li className="nav-item font-weight-bold">
                                        <a href="index.html" className="nav-link">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="about.html" className="nav-link active">ABOUT</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="experience.html" className="nav-link">EXPERIENCE</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact.html" className="nav-link">CONTACT</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderClass;