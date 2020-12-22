import React, { Component } from 'react'

export default class Touch extends Component {
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
            <div className="col-sm-12" id="contact">
                <h1 className="d-flex justify-content-center">Get In Touch !</h1>
                <h6 className="d-flex justify-content-center">Lorem ipsum dolor sit amet consectetur,</h6>
                <div className="col-sm-10 offset-sm-2 row kontak">
                    <div className="col-sm-3 kontak-button">
                        <span>
                            <i className="fa fa-instagram d-flex justify-content-center"></i>
                            <h6 className="my-3 d-flex justify-content-center">@{this.state.profile.instagram}</h6>
                        </span>
                    </div>
                    <div className="col-sm-4 kontak-button">
                        <span>
                            <i className="fa fa-phone d-flex justify-content-center"></i>
                            <h6 className="my-3 d-flex justify-content-center">{this.state.profile.telepon}</h6>
                        </span>
                    </div>
                    <div className="col-sm-3 kontak-button">
                        <span>
                            <i className="fa fa-facebook d-flex justify-content-center"></i>
                            <h6 className="my-3 d-flex justify-content-center">@{this.state.profile.facebook}</h6>
                        </span>
                    </div>
                </div>
                <div className="col-sm-12 d-flex justify-content-center map">
                    <iframe title={this.state.profile.alamat} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5696028673096!2d107.62661563843004!3d-6.941928769860389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e86413eb50ad%3A0xf9930b5268e3fee1!2sVocational%20High%20School%204%20Bandung!5e0!3m2!1sen!2sid!4v1608619578068!5m2!1sen!2sid" width="100%" height="600" style={{border:0}} aria-hidden="false"></iframe>
                </div>
            </div>
        )
    }
}
