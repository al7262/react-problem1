import React from "react";
import axios from "axios";
import '../style/bootstrap.min.css';
import '../style/style.css';
import TopArticleStructure from './TopArticleStructure'
import { withRouter } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../store/MainStore";

const apiKey = "7ff942b76b864ea8904d8458191e56b0";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadLine = baseUrl + "top-headlines?language=en&pageSize=5&sortBy=publishedAt&apiKey=" + apiKey;

class TopArticle extends React.Component{
    getArticle = () => {
        axios
            .get(urlHeadLine)
            .then((response) => {
                this.props.handleChange('topArticle', response.data.articles);
                this.props.handleChange('topLoading', false);
            })
            .catch((error) => {
                this.setState({isLoading: false})
            })
    }

    componentDidMount = () => {
        const self = this;
        self.getArticle()
    }

    render(){
        const listNews = this.props.topArticle,
            isLoading = this.props.topLoading
        const newsToShow = listNews.map((item, key) => {
            return (
                <TopArticleStructure
                    key={key}
                    number={key}
                    title={item.title}
                    url={item.url}
                />
            )
        })
        const loading = <div className='loading-sidebar'><i className='material-icons'>cached</i></div>
        return(
            <div className="top-article-box">
                <div className="top-title">
                    <p>TOP ARTICLE</p>
                    <a href="">see more</a>
                </div>
                {isLoading? loading : newsToShow}
            </div>
        )
    }
}

export default connect(
    "topArticle, topLoading",
    actions
    )(withRouter(TopArticle))