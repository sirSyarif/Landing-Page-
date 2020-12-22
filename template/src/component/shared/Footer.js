import React, { Component } from 'react'

export default class Footer extends Component {
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
    render() {
        return (
            <footer className="footer">
            <div className="footer-left col-md-4 col-sm-6">
              <p className="about">
                <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
              </p>
              <div className="icons">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-google-plus"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
              </div>
            </div>
            <div className="footer-center col-md-4 col-sm-6">
              <div>
                <i className="fa fa-map-marker"></i>
                <p><span> {this.state.profile.alamat}</span>Indonsia</p>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <p> {this.state.profile.telepon}</p>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <p><a href="#"> office@company.com</a></p>
              </div>
            </div>
            <div className="footer-right col-md-4 col-sm-6">
                <img 
                    src="http://localhost:8000/api/profile/logo/logo.png" 
                    alt=""
                    width="80px"
                    height="50px"
                /> 
              <p className="menu">
                <a href="#"> Home</a> |
                <a href="/about"> About</a> |
                <a href="/products"> Product</a> |
                <a href="/contact"> Contact</a> |
              </p>
              <p className="name"> {this.state.profile.nama} &copy; 2020</p>
            </div>
          </footer>
        )
    }
}
