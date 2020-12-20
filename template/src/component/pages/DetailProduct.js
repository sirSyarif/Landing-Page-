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
            <div id="detail-product">
                <div className="row">
                    <div className="col-md-5">
                        <img 
                            src={"http://localhost:8000/api/promo/foto/" + this.state.product.image}
                            alt=""
                            width="100%"
                            height="500px"
                        />
                    </div>
                    <div className="col-md-5 detailed">
                        <div>
                            <h1>{this.state.product.nama}</h1>
                        </div>
                        <div>
                            <h2>Rp. {this.state.product.harga}</h2><hr/>
                            <p>{this.state.product.detail}</p><hr/>
                            <p>FEATURES:</p>
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </div>

        )
    }
}
