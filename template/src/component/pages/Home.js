import React, { Component } from 'react'
import Banner from '../shared/Banner';
import Blog from '../shared/Blog';
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
                    <Banner />
                    <Blog />
                </div>
            </div>
        )
    }
}
