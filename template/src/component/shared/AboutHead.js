import React, { Component } from 'react'

export default class AboutHead extends Component {
    render() {
        return (
            <div className="col-sm-12" id="about">
                <div className="col-sm-5 offset-sm-1 about-header">
                    <h1 className="about-head">ABOUT</h1>
                    <h1>DMS COMPANY</h1>
                    <div className="about-line"></div><br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quasi eum itaque natus nihil necessitatibus vitae, deleniti error, nobis dolorum dolores ut, harum laudantium dicta fugit at laboriosam soluta suscipit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ducimus quas vitae culpa dignissimos alias earum quis iure nihil cum esse, dolorum ex voluptates? Excepturi perspiciatis ipsam enim eum ad.</p><br/><br/>
                    <center>
                        <img 
                            src="https://i.ibb.co/m5Sbz0T/team.jpg" 
                            alt="team"
                        />
                    </center>
                </div> 
            </div>
        )
    }
}