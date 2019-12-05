import React, { Component } from 'react'

export default class Leaders extends Component {
    state={
        leaders:["Sundar Pichai", "Remi gaillard", "Bala Krishna", "Satya Nadella", "Pawan Kalyan"]
    }
    render() {
        return (
            <>
                <div style={{ minHeight: "270px", borderRadius:"6px" }} className="event-class">
                    <div style={{ textAlign: "center", fontSize: "20px", textDecoration:"underline" }}><strong>The Leaders</strong></div>
                    <ol type="1" style ={{paddingTop:"18px"}}>
                        {this.state.leaders.map(leader => { return <li style={{fontSize: "15px"}}>{leader}</li> })}
                    </ol>
                </div>
            </>
        )
    }
}