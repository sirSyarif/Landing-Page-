import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link } from "react-router-dom";

export default class Product extends Component {
    state = {
        product: []
    }

    componentDidMount(){
        this.getProduct();
    }   

    getProduct = async () => {
        var api = 'http://localhost:8000/api/';
        await fetch(`${api}product`)
        .then(res => res.json())
        .then(json => this.setState({product : json}));
    }

    loopItem(item){
        return (
            <div className="col-md-4 mt-4 shot-product" key={item.id}>
                <Link to={`/product/${item.id}`} className="shot-link">
                <div className="card profile-card shot">
                    <div className="card-img-block">
                        <img className="card-img-top" 
                        src={"http://localhost:8000/api/product/image/"+item.image} 
                        alt="cap"
                        width="200px"
                        height="200px"
                        />
                        </div>
                        <div className="card-body pt-0">
                            <h5 className="card-title">{item.nama}</h5>
                            <p className="card-text">{item.deskripsi}</p>
                            <p className="card-text float-right">Rp. {item.harga}</p>
                        </div>
                    </div>
                </Link>
            </div>
                    
            )
    }
    render() {
        return (
            <div className="container-fluid" id="product-page">
                <div className="">
                </div>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase judul">Our Products
                    <div className="inner"></div>
                    </h2>
                    <p className="isi">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur voluptas quas adipisci iusto ullam explicabo sint debitis. Architecto suscipit quod incidunt, reiciendis debitis sunt quo molestiae? Quod labore adipisci omnis.</p>
                </div>
                <div className="row">
                    {this.state.product.map(this.loopItem)}  
                </div>
            </div>
        )
    }
}
