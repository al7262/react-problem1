import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';

class ListArticleStructure extends React.Component{
    render(){
        return(
            <div className="list-article-box shadow-sm">
                <img src={this.props.image} alt="article-picture"/>
                <h4>
                    <a href={this.props.url}>
                        {this.props.title}
                    </a>
                </h4>
                <p>{this.props.brief}</p>
                <label>{this.props.date}</label>
                <div className="list-action bg-light">
                    <a href="">
                        <i className="material-icons">favorite</i>
                    </a>
                    <a href="">
                        <i className="material-icons">share</i>
                    </a>
                    <a href="">
                        <i className="material-icons">thumb_down</i>
                    </a>
                </div>
            </div>
                   
        )
    }
}

export default ListArticleStructure