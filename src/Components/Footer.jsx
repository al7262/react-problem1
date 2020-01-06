import React from "react";
import logo from '../Images/logo-ALTA-v2.png';
import '../Styles/style.css';
import '../Styles/bootstrap.min.css';
import fb_logo from '../Images/ic_fb.png';
import twitter_logo from '../Images/ic-twitter.png';
import linkedin_logo from '../Images/ic-linkedin.png';
import instagram_logo from '../Images/ic-instagram.png';

class FooterClass extends React.Component {
    render () {
        return(
            <footer>
                <div className="container align-items-center">
                    <div className="row align-items-center">
                        <div className="col-md-4 justify-content-center d-flex">
                            <img src={logo} style={{height: '50px'}}/>
                        </div>
                        <div className="col-md-4 footer-socmed">
                            <div className="row align-items-center">
                                <div className="footer-socmed-title">Social Media</div><br></br>
                            </div>
                            <div className="row footer-socmed">    
                                <ul className="footer-socmed-list list-unstyled">
                                    <li><a href="https://www.facebook.com/alterra.id/"><img src={fb_logo} /></a></li>
                                    <li><a href="https://twitter.com/alterraid?lang=en"><img src={twitter_logo} /></a></li>
                                    <li><a href="https://www.instagram.com/alterra.id/"><img src={instagram_logo} /></a></li>
                                    <li><a href="https://www.linkedin.com/company/alterraid"><img src={linkedin_logo} /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 vl"> 
                            <div className="d-flex justify-content-center">
                                <h5 className="copyright">Copyright &copy; 2019 Alterra</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterClass;