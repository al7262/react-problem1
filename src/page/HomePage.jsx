import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';
import Header from '../component/Header';
import TopArticle from '../component/TopArticle';
import ListArticle from '../component/ListArticle';
import { withRouter } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../store/MainStore";

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Header 
                    isNews={true}
                    {...this.props}
                    />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <TopArticle />
                        </div>
                        <div className="col-lg-8">
                            <ListArticle 
                                category={this.props.category}
                                search={this.props.search}
                                {...this.props}
                                />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
        "category, search",
        actions
        )(withRouter(HomePage))