import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';
import Header from '../component/Header'
import TopArticle from '../component/TopArticle'
import ListArticle from '../component/ListArticle'

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <TopArticle />
                        </div>
                        <div className="col-lg-8">
                            <ListArticle />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage