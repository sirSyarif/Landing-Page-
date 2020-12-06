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
            <div className="carousel-item ">
                <img 
                    src={"http://localhost:8000/api/promo/foto/"+item.image}
                    alt=""
                    width="80px"
                    height="50px"
                    key={item.id}
                />          
            </div>
        )
    }

    render() {
        return (
            <div className="row-fluid">
                <div id="demo" className="carousel slide " data-ride="carousel">

                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1" class=""></li>
                    <li data-target="#demo" data-slide-to="2" class=""></li>
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
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
            
        )
    }
}
