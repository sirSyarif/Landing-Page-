import React, { Component } from 'react'
import Nav from '../shared/Nav';
import Shot from '../shared/Shot';
import Slider from '../shared/Slider';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="row-fluid" id="header">
                    <Shot /> 
                </div>
            </div>
        )
    }
}
