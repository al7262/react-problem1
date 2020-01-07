import React from "react";
import axios from "axios";
import '../style/bootstrap.min.css';
import '../style/style.css';
import TopArticleStructure from './TopArticleStructure'
const apiKey = "74e129a019794840bfbecacf5926d995";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadLine = baseUrl + "top-headlines?language=en&pageSize=5&sortBy=publishedAt&apiKey=" + apiKey;

class TopArticle extends React.Component{
    state = {
        listNews: [],
        isLoading: true,
    }

    getArticle = () => {
        axios
            .get(urlHeadLine)
            .then((response) => {
                this.setState({listNews: response.data.articles, isLoading: false})
                console.log(this.state)
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
        const {listNews, isLoading} = this.state;
        const newsToShow = listNews.map((item, key) => {
            console.log(key)
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

export default TopArticle