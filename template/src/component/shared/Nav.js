import  React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import Home from '../pages/Home';

class Nav extends Component {
    state = {
        profile: []
    }

    componentDidMount(){
        this.getProfile();
    }

    getProfile = async () => {
        var api = 'http://localhost:8000/api/';
        await fetch(`${api}profile`)
        .then(res => res.json())
        .then(json => this.setState({profile : json}));
    }

    render(){
        return(
                <div className="container-fluid fixed-top" id="navbar">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link to="/" className="navbar-brand mr-auto">
                            <img 
                            src="http://localhost:8000/api/profile/logo/logo.png" 
                            alt=""
                            width="80px"
                            height="50px"
                            /> 
                        {this.state.profile.nama}
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon" id="burger"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/product">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>    
                            </ul>
                        </div>  
                    </nav>
                </div>
        );
    }

}
export default Nav;