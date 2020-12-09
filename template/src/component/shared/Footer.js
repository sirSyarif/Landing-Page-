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
            <h1>ini footer y ajg</h1>
        )
    }
}
