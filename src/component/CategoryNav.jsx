import React from "react";
import {Link} from "react-router-dom";
import '../style/bootstrap.min.css';
import '../style/style.css';

const CategoryNav = (props) => {
    return(
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <Link className="nav-link" onClick={() => props.isNews?props.handleChange('category','sports'):props.handlingCategory('sports')}>Sports <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" onClick={() => props.isNews?props.handleChange('category','economy'):props.handlingCategory('economy')}>Economy</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" onClick={() => props.isNews?props.handleChange('category','politic'):props.handlingCategory('politic')}>Politic</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" onClick={() => props.isNews?props.handleChange('category','entertainment'):props.handlingCategory('entertainment')}>Entertainment</Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" id="othersToggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Others</a>
                <div class="dropdown-menu bg-light" aria-labelledby="othersToggle">
                    <Link class="dropdown-item" onClick={() => props.isNews?props.handleChange('category','celebrity'):props.handlingCategory('celebrity')}>Celebrity</Link>
                    <Link class="dropdown-item" onClick={() => props.isNews?props.handleChange('category','random'):props.handlingCategory('random')}>Fun Fact</Link>
                    <Link class="dropdown-item" onClick={() => props.isNews?props.handleChange('category','electronic'):props.handlingCategory('electronic')}>Electronic</Link>
                </div>
            </li>
        </ul>
    )
}


export default CategoryNav