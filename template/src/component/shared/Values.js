import React, { Component } from 'react'

export default class Values extends Component {
    render() {
        return (
            <div className="col-sm-12" id="values">
                <div className="col-sm-10 offset-sm-2 row" >
                    <div className="col-sm-4">
                        <h1>Our Values</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-sm-2">
                        <i className="fa fa-heart-o"></i>
                        <h6 className="my-3">Empathy</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-sm-2">
                        <i className="fa fa-thumbs-o-up"></i>
                        <h6 className="my-3">Simple Solution</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-sm-2">
                        <i className="fa fa-star-o"></i>
                        <h6 className="my-3">Perfect Quality</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        )
    }
}
