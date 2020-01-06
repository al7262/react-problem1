import React from "react";
import '../Styles/bootstrap.min.css';
import '../Styles/style.css';
import logo from '../Images/logo-ALTA-v2.png'


class AboutPage extends React.Component{
    render(){
        return(
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-12 image align-items-center d-flex justify-content-center">
                            <div class="image-bg-color"></div>
                            <img class="image-alterra" src={logo}/>
                        </div>
                        <div class="col-lg-8 col-md-12 col-12 form">
                            <h2>Contact Us</h2>
                            <div>
                                <form action="index.html">
                                    <div class="form-input">
                                        <label for="full-name">Full Name<span style={{color: 'red'}}>*</span></label><br/>
                                        <input type="text" class="form-control" id="full-name" placeholder="Your Full Name..." required /> 
                                    </div>       
                                    <div class="form-input">
                                        <label for="email">Email Address<span style={{color: 'red'}}>*</span></label><br/>
                                        <input type="text" class="form-control" id="email" placeholder="example@alterra.id" required />
                                    </div>
                                    <div class="form-input">
                                        <label for="phone-number">Phone Number<span style={{color: 'red'}}>*</span></label><br/>
                                        <input type="text" class="form-control" id="phone-number" placeholder="08xx xxxx xxxx" required />
                                    </div>
                                    <div class="form-option">
                                        <label for="role">Role</label><br/>
                                        <select class="form-control" id="form-control">
                                            <option selected>selected..</option>
                                            <option value="Fullstack-Developer">Fullstack Developer</option>
                                            <option value="Data-engineer">Data Engineer</option>
                                            <option value="CEO">Chief Executive Organizer</option>
                                            <option value="Alta">Alterra Academy</option>
                                        </select> 
                                    </div>
                                    <div class="message">
                                        <label for="message">Message:</label><br/>
                                        <input type="text" class="form-control" id="message" />
                                    </div>
                    
                                    <div>
                                        <br/><button class="btn main-btn" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;