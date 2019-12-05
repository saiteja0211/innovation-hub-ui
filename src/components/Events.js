import React, { Component } from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";

export default class Details extends Component {
  render() {
    return (import React, { Component } from 'react'

export default class Events extends Component {
    state = {
        events: ["Hackathon", "Insight", "Ignite", "JingleBells", "People of Purpose"]
    }

    render() {
        return (
                <div style={{ minHeight: "250px", borderRadius:"6px" }} className="event-class">
                    <div style={{ textAlign: "center", fontSize: "20px", textDecoration:"underline" }}><strong>Events</strong></div>
                    <ol type="1"  style ={{paddingTop:"18px"}}>
                        {this.state.events.map(event => { return <li style={{fontSize: "15px"}}>{event}</li> })}
                    </ol>
                </div>
        )
    }
}
