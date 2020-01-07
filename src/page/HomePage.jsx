import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';
import Header from '../component/Header'
import TopArticle from '../component/TopArticle'
import ListArticle from '../component/ListArticle'

class HomePage extends React.Component{
    state = {
        category: 'general'
    }

    setCategory = async (value) => {
        await this.setState({category: value})
    }

    render(){
        return(
            <div>
                <Header setCategory={this.setCategory} />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <TopArticle />
                        </div>
                        <div className="col-lg-8">
                            <ListArticle category={this.state.category}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage