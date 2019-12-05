import React, { Component } from 'react'
import {  List } from "antd";
import styled from "styled-components";

export default class Stories extends Component {
    state = {
        stories: 
        [
            {title: "Hawk Eye", data:"eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"},
        {title: "App Security", data:"eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"},
        {title: "Work & Life", data:"eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"}
        ]
    }
    render() {
        return (
            <>
                <div style={{ minHeight: "270px", borderRadius:"6px" }} className="event-class">
                    <div style={{ textAlign: "center", fontSize: "20px", textDecoration:"underline" }}><strong>Success Stories</strong></div>
                    <FixedHeightList
            
            itemLayout="horizontal"
            dataSource={this.state.stories}
            renderItem={(story,key) => (
              <List.Item
              >
                <List.Item.Meta
                  title={
                      <>
                    <p style={{fontSize: "15px", paddingLeft:"15px"}}>{`${key+1}. ${story.title}`}</p>
                    <p style={{fontSize: "13px", paddingLeft:"15px"}}>{story.data}</p>
                    </>
                  }
                />
              </List.Item>
            )}
          />
                    {/* <ol type="1">
                        {this.state.stories.map(story => { return <li style={{fontSize: "15px"}}><p>{story.title}</p><p>{story.data}</p></li> })}
                    </ol> */}
                </div>
            </>
        )
    }
}


const FixedHeightList = styled(List)`
  & .ant-list-items,
  & .ant-list-empty-text {
    height: 228px;
    overflow-y: auto;
  }

  &.ant-list-bordered .ant-list-item {
    padding-left: 12px;
    padding-right: 12px;
  }

  & h4 {
    font-size: 12px;
    line-height: 1.5;
    font-weight: normal;
    color: #000;
  }
`;