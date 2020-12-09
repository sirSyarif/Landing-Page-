import React, { Component } from 'react'
import Button from './Button'

export default class Blog extends Component {
    render() {
        return (
            <div>
                <div id="blog1">
                    <div class="container float-right" id="card1">
                        <div class="card">
                            <div class="card-body">
                                <h4>HOW WE WORK</h4>
                                <h1 className="blog-head">OUR TEAM WORK BLA BLA BLA BLA BLA BLA</h1><br/>
                                <h6>Digital Company Workspace</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptates, rem, ipsam voluptatibus quidem at quis debitis voluptate cumque quo quos odit. Non quae a pariatur est numquam voluptatibus facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, totam corporis explicabo vero inventore incidunt saepe officia earum esse voluptate veniam ex architecto impedit commodi, atque recusandae mollitia minus laborum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint velit sequi consequuntur, illum, dignissimos accusamus ab, quaerat quidem obcaecati quis repellendus ducimus nihil non odio autem officiis nisi eos optio!</p>
                                <Button />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="blog2">
                    <div class="container float-left" id="card2">
                        <div class="card">
                            <div class="card-body">
                                <h4>HOW WE GOT PAY</h4>
                                <h1 className="blog-head">OUR TEAM PAY BLA BLA BLA BLA BLA BLA</h1><br/>
                                <h6>Digital Company Workspace</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptates, rem, ipsam voluptatibus quidem at quis debitis voluptate cumque quo quos odit. Non quae a pariatur est numquam voluptatibus facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, totam corporis explicabo vero inventore incidunt saepe officia earum esse voluptate veniam ex architecto impedit commodi, atque recusandae mollitia minus laborum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint velit sequi consequuntur, illum, dignissimos accusamus ab, quaerat quidem obcaecati quis repellendus ducimus nihil non odio autem officiis nisi eos optio!</p>
                                <Button />
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}
