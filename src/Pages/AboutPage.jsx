import React from "react";
import HeaderClass from "../Components/Header";
import FooterClass from "../Components/Footer";
import '../Styles/bootstrap.min.css';
import '../Styles/style.css';
import womanPic from '../Images/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import dotDecoration from '../Images/img-dot.png';


class AboutPage extends React.Component{
    render(){
        return(
            <div>
                <HeaderClass />
                <section class="container-fluid exp-head">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="exp-h1 text-uppercase">About me</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <div class="row about-gap25"></div>
                        <div class="row">
                            <div class="col-lg-8 col-md-6 col-12">
                                <div class="about-information">
                                <p>Versatile Front-end Developer with 3+ years of experience designing, 
                                developing, and managing complex e-commerce sites and internal frameworks.
                                Specializes in AngularJS and responsive design. </p>
                                </div>
                                <div class="about-education">
                                    <h3>Edcuation</h3>
                                    <ul class="about-education-list">
                                        <li class="about-education-tahun"><strong>2014</strong></li>
                                            <ul class="about-education-detail list-unstyled">
                                                <li><strong>DIPLOMA</strong></li>
                                                <li>Computer Engineering - University of Chicago</li>        
                                            </ul>
                                        <li class="about-education-tahun"><strong>2018</strong></li>
                                            <ul class="about-education-detail list-unstyled">
                                                <li><strong>BACHELOR DEGREE</strong></li>
                                                <li>BS Computer Engineering - University of Chicago</li>            
                                            </ul>
                                    </ul>
                                </div>
                                <div class="about-table">
                                    <span>Here's few technologies I've been working with recently</span>
                                    <table class="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>HTML & CSS</td>
                                                <td>Serverless</td>
                                                <td>Scrum</td>
                                            </tr>
                                            <tr>
                                                <td>Programming</td>
                                                <td>Restful API</td>
                                                <td>Test-Driven Dev</td>
                                            </tr>
                                            <tr>
                                                <td>Database</td>
                                                <td>Javascript</td>
                                                <td>Software Testing</td>
                                            </tr>
                                            <tr>
                                                <td>Git & Github</td>
                                                <td>Single Page App</td>
                                                <td>UX/UI Designer</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>  
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="image-2">
                                <img class="image-women" src={womanPic} />
                                <img class="image-dot" src={dotDecoration} />
                                </div>
                            </div>
                        </div>
                        <div class="row about-gap120"></div>
                    </div>
                </section>
                <FooterClass />
            </div>
        );
    }
}

export default AboutPage;