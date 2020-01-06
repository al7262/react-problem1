import React from "react";
import HeaderClass from "../Components/Header";
import FooterClass from "../Components/Footer";
import '../Styles/bootstrap.min.css';
import '../Styles/style.css';

class ExperiencePage extends React.Component{
    render(){
        return(
            <div>
                <HeaderClass />
                <section className="container-fluid exp-head">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="exp-h1 text-uppercase">Experience</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container">
                    <div className="row exp-gap50"></div>
                    <div className="row exp-gap50"></div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 col-sm-12 exp-vl">
                            <div className="row">
                                <div className="col-md-1 col-sm-1 d-flex align-items-center dots-mobile">
                                    <span className="exp-dot"></span>
                                </div>
                                <div className="col-md-11 col-sm-11 exp-box">
                                    <h6 className="exp-h6 text-uppercase">Full-stack engineer - alterra academy</h6>
                                    <p className="exp-date">May, 2019 - Present</p>
                                    <hr className="exp-hr" />
                                    <p className="exp-content">
                                        - Write modern, performant, maintainable code for a diverse array of client and internal projects<br/>
                                        - Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify
                                    </p>
                                </div>
                            </div>
                            <div className="row exp-gap80"></div>
                            <div className="row">
                                <div className="col-md-1 col-sm-1 d-flex align-items-center dots-mobile">
                                    <span className="exp-dot"></span>
                                </div>
                                <div className="col-md-11 col-sm-11 exp-box">
                                    <h6 className="exp-h6 text-uppercase">FRONTEND ENGINEER - APPLE</h6>
                                    <p className="exp-date">May, 2018 - May, 2019</p>
                                    <hr className="exp-hr" />
                                    <p className="exp-content">
                                        Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript
                                    </p>
                                </div>
                            </div>
                            <div className="row exp-gap80"></div>
                            <div className="row">
                                <div className="col-md-1 col-sm-1 d-flex align-items-center dots-mobile">
                                    <span className="exp-dot"></span>
                                </div>
                                <div className="col-md-11 col-sm-11 exp-box">
                                    <h6 className="exp-h6 text-uppercase">UI/UX DESIGN - SCOUT</h6>
                                    <p className="exp-date">Januari, 2018 - April, 2018</p>
                                    <hr className="exp-hr" />
                                    <p className="exp-content">
                                        - Developed and shipped highly interactive web applications for Apple Music using Ember.js <br/>
                                        - Architected and implemented the front-end of Apple Music’s embeddable web player widget, which lets users log in and listen to full songs in the browse
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row exp-gap50"></div>
                    <div className="row exp-gap50"></div>
                    <div className="row exp-gap50"></div>
                </section>
                <FooterClass />
            </div>
        );
    }
}

export default ExperiencePage;