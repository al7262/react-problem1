import React from "react";
import axios from "axios"
import '../style/bootstrap.min.css';
import '../style/style.css';
import ListArticleStructure from '../component/ListArticleStructure';

const apiKey = "fa53fb2789cb4ec9b6074252dc28440d";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadLine = baseUrl + "everything?language=en&pageSize=10&sortBy=publishedAt&apiKey=" + apiKey;

class ListArticle extends React.Component{
    state = {
        listNews: [],
        isLoading: true,
        category: this.props.category,
        search: this.props.search
    }

    resetState = () => {
        this.setState({listNews: [], isLoading: true})
    }
    
    setCategory = async (value) => {
        console.warn("CATEGORY");
        await this.setState({category: value});
        if(value!=='general'){
            await this.props.history.replace("/category/" + value);
        }
        const params = await this.props.match.params.category
        value = await params===undefined? value : params
        if (this.state.category!==value){
            await this.setState({category: value});
        }
        this.getArticle(value)
    }

    setSearch = async (value) => {
        console.warn("SEARCH");
        if (value!==this.state.search){
            await this.setState({search: value})
            console.warn("From inside search", this.state)
        }
        await this.getArticle(this.state.search)
    }

    getArticle = async (keyword) => {
        await axios
        .get(`${urlHeadLine}&q="${keyword}"`)
        .then( async (response) => {
            await this.setState({listNews: response.data.articles, isLoading: false})
                console.log(this.state)
            })
            .catch((error) => {
                this.setState({isLoading: false})
            })
    }

    componentDidMount = () => {
        const self = this;
        self.setCategory(self.state.category)
    }

    componentWillReceiveProps = async (nextProps) => {
        const self = this;        
        if (nextProps.search!==self.state.search){
            await this.setSearch(nextProps.search)
        }
        else if (nextProps.category!==self.state.category){
            self.resetState()
            await this.setCategory(nextProps.category)
        }
    }

    render(){
        const {listNews, isLoading } = this.state;
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