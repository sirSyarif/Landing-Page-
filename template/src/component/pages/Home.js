import React, { Component } from 'react'
import Brand from '../shared/Brand';
import Service from '../shared/Service';
import Shot from '../shared/Shot';
import Slider from '../shared/Slider';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="row-fluid" id="header">
                    <Slider />
                    <Shot /> 
                    <Brand />
                    <Service />
                </div>
            </div>
        )
    }
}
