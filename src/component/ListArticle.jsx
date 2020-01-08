import React from "react";
import axios from "axios"
import '../style/bootstrap.min.css';
import '../style/style.css';
import ListArticleStructure from '../component/ListArticleStructure';
import { withRouter } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../store/MainStore";

const apiKey = "7ff942b76b864ea8904d8458191e56b0";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadLine = baseUrl + "everything?language=en&pageSize=10&sortBy=publishedAt&apiKey=" + apiKey;

class ListArticle extends React.Component{
    resetState = () => {
        this.props.handleChange('listArticle', [])
        this.props.handleChange('listLoading', true)
    }
    
    setCategory = async (value) => {
        await this.props.handleChange('category', value);
        if(value!=='general'){
            await this.props.history.replace("/category/" + value);
        }
        const params = await this.props.match.params.category
        console.warn(this.props)
        value = await params===undefined? value : params
        if (this.props.category!==value){
            await this.setState({category: value});
        }
        this.getArticle(value)
    }

    setSearch = async (value) => {
        if (value!==this.props.search){
            await this.props.handleChange('search', value)
            console.warn("From inside search", this.props)
        }
        await this.getArticle(this.props.search)
    }

    getArticle = async (keyword) => {
        await axios
        .get(`${urlHeadLine}&q="${keyword}"`)
        .then( async (response) => {
            await this.props.handleChange('listArticle', response.data.articles);
            await this.props.handleChange('listLoading', false);
            })
        .catch( async (error) => {
            await this.props.handleChange('listLoading', false);
        })
    }

    componentDidMount = () => {
        const self = this;
        self.setCategory(self.props.category)
    }

    componentWillReceiveProps = async (nextProps) => {
        const self = this;        
        if (nextProps.search!==self.props.search){
            await this.setSearch(nextProps.search)
        }
        else if (nextProps.category!==self.props.category){
            self.resetState()
            await this.setCategory(nextProps.category)
        }
    }

    render(){
        const listNews = this.props.listArticle,
            isLoading = this.props.listLoading
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
                    date={item.publishedAt}
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

export default connect(
    "listArticle, listLoading",
    actions
    )(withRouter(ListArticle));