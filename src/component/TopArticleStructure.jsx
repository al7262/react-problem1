import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';

class TopArticleStructure extends React.Component{    
    render(){
        return(
            <div className='top-item'>
                <div className="top-rank">
                    <p># {this.props.number+1}</p>
                </div>
                <a href={this.props.url}>{this.props.title}</a>
            </div>
        )
    }
}

export default TopArticleStructure