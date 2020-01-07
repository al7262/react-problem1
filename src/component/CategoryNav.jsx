import React from "react";
import {Link} from "react-router-dom";
import '../style/bootstrap.min.css';
import '../style/style.css';

class CategoryNav extends React.Component{
    render(){
        return(
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" onClick={() => this.props.isNews?this.props.setCategory('sports'):this.props.handlingCategory('sports')}>Sports <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" onClick={() => this.props.isNews?this.props.setCategory('economy'):this.props.handlingCategory('economy')}>Economy</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" onClick={() => this.props.isNews?this.props.setCategory('politic'):this.props.handlingCategory('politic')}>Politic</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" onClick={() => this.props.isNews?this.props.setCategory('entertainment'):this.props.handlingCategory('entertainment')}>Entertainment</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" role="button" id="othersToggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Others</a>
                    <div class="dropdown-menu bg-light" aria-labelledby="othersToggle">
                        <Link class="dropdown-item" onClick={() => this.props.isNews?this.props.setCategory('celebrity'):this.props.handlingCategory('celebrity')}>Celebrity</Link>
                        <Link class="dropdown-item" onClick={() => this.props.isNews?this.props.setCategory('random'):this.props.handlingCategory('random')}>Fun Fact</Link>
                        <Link class="dropdown-item" onClick={() => this.props.isNews?this.props.setCategory('electronic'):this.props.handlingCategory('electronic')}>Electronic</Link>
                    </div>
                </li>
            </ul>
        )
    }
}

export default CategoryNav