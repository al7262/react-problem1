import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';

const TopArticleStructure = (props) => {    
    return(
        <div className='top-item'>
            <div className="top-rank">
                <p># {props.number+1}</p>
            </div>
            <a href={props.url}>{props.title}</a>
        </div>
    )
}

export default TopArticleStructure