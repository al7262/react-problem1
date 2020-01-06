import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';
import json from '../json/ListArticle.json'

class ListArticle extends React.Component{
    render(){
        return(
            <div>
                {
                    json.map( (item) => (
                        <div className="list-article-box shadow-sm">
                            <img src={item.image} alt=""/>
                            <h4>{item.title}</h4>
                            <p>{item.brief}</p>
                            <label>{item.date}</label>
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
                    ))
                }
            </div>
        )
    }
}

export default ListArticle