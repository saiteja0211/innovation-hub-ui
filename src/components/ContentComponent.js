import React, { Component } from 'react'
import { Row, Col, Card } from "antd";
import Events from "./Events";
import CurrentActs from "./CurrentActs";
import Leaders from "./Leaders";
import Stories from "./Stories";

export default class ContentComponent extends Component {
    render() {
        return (
            <>
                <div className="gutter-example">
                    <Row gutter={15} style={{paddingTop:"15px"}}>
                        <Col className="gutter-row" span={12} >
                            <Events/>
                        </Col>
                        <Col className="gutter-row" span={12} >
                            <CurrentActs/>
                        </Col>
                    </Row>
                    <Row gutter={15} style={{paddingTop:"15px"}}>
                        <Col className="gutter-row" span={6} >
                            <Leaders/>
                        </Col>
                        <Col className="gutter-row" span={18} >
                            <Stories/>
                        </Col>
                    </Row>
                </div>



            </>
        )
    }
}
