import React from "react";
import axios from "axios"
import '../style/bootstrap.min.css';
import '../style/style.css';
import ListArticleStructure from '../component/ListArticleStructure';

const apiKey = "74e129a019794840bfbecacf5926d995";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadLine = baseUrl + "everything?language=en&pageSize=10&sortBy=publishedAt&apiKey=" + apiKey;

class ListArticle extends React.Component{
    state = {
        listNews: [],
        isLoading: true,
        category: this.props.category
    }

    resetState = () => {
        this.setState({listNews: [], isLoading: true})
    }
    
    setCategory = (value) => {
        this.setState({category: value})
    }

    getArticle = (category) => {
        this.setCategory(category)
        axios
            .get(`${urlHeadLine}&q=${category}`)
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
        self.getArticle(self.state.category)
    }

    componentWillReceiveProps = (nextProps) => {
        const self = this;
        self.resetState()
        if (nextProps!==self.state.category){
            self.getArticle(nextProps.category)
        }
    }

    render(){
        const {listNews, isLoading, category } = this.state;
        const newsFiltered = listNews.filter(item => {
            if (item.content !== null && item.image !== null){
                return item
            }
            return false
        })

        const newsToShow = newsFiltered.map((item, key) => {
            return (
                <ListArticleStructure
                    key={key}
                    title={item.title}
                    image={item.urlToImage}
                    brief={item.description}
                    url={item.url}
                />
            )
        })
        const loading = <div className='loading-content'><i className='material-icons'>cached</i></div>
        return(
            <div>
                {isLoading? loading : newsToShow}
            </div>
                   
        )
    }
}

export default ListArticle