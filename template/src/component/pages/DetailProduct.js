import React, { Component } from 'react'

export default class DetailProduct extends Component {
    constructor(props){
        super(props);

        this.state = {
            id : this.props.match.params.id,
            product : []
        }
    }

    componentDidMount(){
        this.getProduct();
    }   
        

    getProduct = async () => {
        var id = this.state.id;
        var api = 'http://localhost:8000/api/';
        await fetch(`${api}product/${id}`)
        .then(res => res.json())
        .then(json => this.setState({product : json}));
    }
    render() {
        return (
            <div id="anjing">
                <h2>{this.state.id}</h2>
                <h2>{this.state.product.harga}</h2>
            </div>

        )
    }
}
