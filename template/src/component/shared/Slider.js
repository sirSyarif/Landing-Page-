import React, { Component } from 'react'

export default class Slider extends Component {
    state = {
        promo: []
    }

    componentDidMount(){
        this.getPromo();
    }

    getPromo = async () => {
        var api = 'http://localhost:8000/api/';
        await fetch(`${api}promo`)
        .then(res => res.json())
        .then(json => this.setState({promo : json}));
    }

    loopName(item){
        return (
            <div className="carousel-item " key={item.id}>
                <img 
                    src={"http://localhost:8000/api/promo/foto/"+item.image}
                    alt=""
                    width="80px"
                    height="50px"
                />          
            </div>
        )
    }

    render() {
        return (
            <div className="row-fluid">
                <div id="demo" className="carousel slide " data-ride="carousel">

                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1" ></li>
                    <li data-target="#demo" data-slide-to="2" ></li>
                </ul>

                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img 
                        src="http://localhost:8000/api/promo/foto/promo1.png"
                        alt=""
                        width="100%"
                        height="500px"
                    />
                    </div>
                    {this.state.promo.map(this.loopName)}
                    
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
            
        )
    }
}
