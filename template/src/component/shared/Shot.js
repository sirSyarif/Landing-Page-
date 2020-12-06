import React, { Component } from 'react'

export default class Shot extends Component {
    state = {
        product: []
    }

    componentDidMount(){
        this.getProduct()
            .then(() => console.log(this.state.product[0].nama));
    }   

    getProduct = async () => {
        var api = 'http://localhost:8000/api/';
        await fetch(`${api}product`)
        .then(res => res.json())
        .then(json => this.setState({product : json}));
    }

    loopItem(item){
        return <h2 key="item.id">{item.nama}</h2>
    }

    render() {
        return (
            this.state.product.map(this.loopItem)
        )
    }
}
