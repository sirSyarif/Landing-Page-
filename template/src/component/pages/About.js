import React, { Component } from 'react'
import AboutHead from '../shared/AboutHead'
import Gallery from '../shared/Gallery'
import Mission from '../shared/Mission'
import Values from '../shared/Values'

export default class About extends Component {
    render() {
        return (
            <div>
                <AboutHead />  
                <Gallery />
                <Mission />
                <Values />
            </div>

        )
    }
}
