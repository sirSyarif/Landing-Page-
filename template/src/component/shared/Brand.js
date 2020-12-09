import React, { Component } from 'react'

export default class Brand extends Component {
    render() {
        return (
            <div className="row-fluid d-flex justify-content-center alignt-items-center" id="brand">
                <div className="customers">
                    <div className="client-logo-wrapper">
                        <img src="https://res.cloudinary.com/sharonnt/image/upload/v1535569285/client-1.jpg" width="130" alt="hanya foto"/>
                        <img src="https://res.cloudinary.com/sharonnt/image/upload/v1535569862/client-2.jpg" width="130" alt="hanya foto"/>
                        <img src="https://res.cloudinary.com/sharonnt/image/upload/v1535569994/client-3.jpg" width="130" alt="hanya foto"/>
                        <img src="https://res.cloudinary.com/sharonnt/image/upload/v1535570114/client-4.jpg" width="130" alt="hanya foto"/>
                    </div>
                </div>
            </div>
        )
    }
}
