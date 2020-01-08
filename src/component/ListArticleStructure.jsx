import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';

const ListArticleStructure = (props) => {
    return(
        <div className="list-article-box shadow-sm">
            <img src={props.image} alt="article-picture"/>
            <h4>
                <a href={props.url}>
                    {props.title}
                </a>
            </h4>
            <p>{props.brief}</p>
            <label>{props.date}</label>
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

export default ListArticleStructure