import React, { Component } from 'react'

export default class Gallery extends Component {
    render() {
        return (
            <div className="col-sm-12" id="galeri">
                <center>
                    <h1>We have professional, creative &</h1>
                    <h1>diligent team</h1>
                    <p>Perfect Team for Your Business</p><br/>
                        <div className="col-sm-10 offset-sm-2 row gallery">
                            <div className="col-sm-4">
                                <img 
                                    src="https://i.ibb.co/7tMy8Jq/tim1.jpg" 
                                    alt=""
                                    width="100%"
                                    height="410px"
                                />
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <img 
                                        src="https://i.ibb.co/QkjDQsw/tim2.jpg" 
                                        alt=""
                                        className="image"
                                        width="200px"
                                    />
                                    <img 
                                        src="https://i.ibb.co/NjgRnBm/tim3.png" 
                                        alt=""
                                        className="image"
                                        width="200px"
                                    />
                                </div>
                                <div>
                                    <img 
                                        src="https://i.ibb.co/jLbPNn8/tim4.jpg" 
                                        alt=""
                                        className="image"
                                        width="200px"
                                    />
                                    <img 
                                        src="https://i.ibb.co/jfLj5kF/tim5.jpg" 
                                        alt=""
                                        className="image"
                                        width="200px"
                                    />
                                </div>
                            </div>
                        </div>
                </center>
            </div>
        )
    }
}
