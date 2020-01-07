import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';
import Header from '../component/Header'
import TopArticle from '../component/TopArticle'
import ListArticle from '../component/ListArticle'

class HomePage extends React.Component{
    state = {
        category: 'general',
        search: ''
    }

    setCategory = async (value) => {
        await this.setState({category: value})
    }

    searchItem = async (value) => {
        await this.setState({search: value})
    }

    render(){
        return(
            <div>
                <Header 
                    setCategory={this.setCategory}
                    searchItem={this.searchItem}
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
                                category={this.state.category}
                                search={this.state.search}
                                {...this.props}
                                />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage