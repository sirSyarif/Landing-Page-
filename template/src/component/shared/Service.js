import React, { Component } from 'react'

export default class Service extends Component {
    render() {
        return (
            <div className="row-fluid" id="service">
                <div className="text-center">
                    <h6 className="section-heading text-uppercase subjudul">We help you stay safe</h6>
                    <h2 className="section-heading text-uppercase judul">Our Service
                    <div className="inner"></div>
                    </h2>
                    <p className="isi">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur voluptas quas adipisci iusto ullam explicabo sint debitis. Architecto suscipit quod incidunt, reiciendis debitis sunt quo molestiae? Quod labore adipisci omnis.</p>
                </div>
                <section className="services-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="single-serviecs-block">
                            <i className="fa fa-code"></i>
                            <h3><a>Easy to Understand</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="single-serviecs-block">
                            <i className="fa fa-user-circle"></i>
                            <h3><a>User Friendly</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="single-serviecs-block">
                            <i className="fa fa-bolt"></i>
                            <h3><a>Fast Service</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}
