import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';
import json from '../json/TopArticle.json'

class TopArticle extends React.Component{
    render(){
        return(
            <div className="top-article-box">
                <div className="top-title">
                    <p>TOP ARTICLE</p>
                    <a href="">see more</a>
                </div>
                {
                    json.map((item)=>(
                        <div className='top-item'>
                            <div className="top-rank">
                                <p># {json.indexOf(item)+1}</p>
                            </div>
                            <a href="">{item.title}</a>
                        </div>

                    ))
                }
            </div>
        )
    }
}

export default TopArticle