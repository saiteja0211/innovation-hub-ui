import React, { Component } from 'react'
import {Icon } from "antd";

export default class CurrentActs extends Component {

    state = {
        acts: [
            "Developing an APi to retrieve account Info",
            "Platform acting as a ridge between customer and client",
            "User access management Tool"
        ]
    }
    render() {
        return (
            <>
                <div style={{ minHeight: "250px", borderRadius:"6px" }} className="event-class">
                    <div style={{ textAlign: "center", fontSize: "20px", textDecoration:"underline" }}><strong>Current Activities</strong></div>
                    <ol type="1"  style ={{paddingTop:"18px"}}>
                        {this.state.acts.map(act => { return <li style={{fontSize: "15px"}}>{act}</li> })}
                    </ol>
                    <p style ={{paddingTop:"18px", paddingLeft:"15px"}}>And more activities are yet to come... <Icon type ="like"style={{fontSize:"18px"}}  /></p>
                </div>
            </>
        )
    }
}