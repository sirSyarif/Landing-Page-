import React, { Component } from 'react'

export default class Gallery extends Component {
    render() {
        return (
            <div className="col-sm-12">
                <center>
                <h2>anjg</h2>
                        <div className="col-sm-10 row gallery">
                            <div className="col-sm-4">
                                <img 
                                    src="https://i.ibb.co/7tMy8Jq/tim1.jpg" 
                                    alt=""
                                    width="100%"
                                    height="380px"
                                />
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <img 
                                        src="https://i.ibb.co/QkjDQsw/tim2.jpg" 
                                        alt=""
                                        className="image"
                                    />
                                    <img 
                                        src="https://i.ibb.co/NjgRnBm/tim3.png" 
                                        alt=""
                                        className="image"
                                    />
                                </div>
                                <div>
                                    <img 
                                        src="https://i.ibb.co/jLbPNn8/tim4.jpg" 
                                        alt=""
                                        className="image"
                                    />
                                    <img 
                                        src="https://i.ibb.co/jfLj5kF/tim5.jpg" 
                                        alt=""
                                        className="image"
                                    />
                                </div>
                            </div>
                        </div>
                </center>
            </div>
        )
    }
}
