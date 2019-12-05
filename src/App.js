import React, { Component } from 'react'
import { BrowserRouter} from "react-router-dom";
import "./App.css";
import ContentComponent from './components/ContentComponent'
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



export default class App extends Component {

    state = {
        collapsed: false,
    };
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <BrowserRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['home']} mode="inline">
                            <Menu.Item key="home">
                                <Icon type="home" />
                                <span>Home</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span>Jayasri</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="3">My Profile</Menu.Item>
                                <Menu.Item key="4">Settings</Menu.Item>
                                <Menu.Item key="5">Log Out</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="location"
                                title={
                                    <span>
                                        <Icon type="pie-chart" />
                                        <span>Location</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="location1">Hyderabad</Menu.Item>
                                <Menu.Item key="location2">Chicago</Menu.Item>
                                <Menu.Item key="location3">Stanford</Menu.Item>
                                <Menu.Item key="location4">Kettering</Menu.Item>
                            </SubMenu>

                            <Menu.Item key="9">
                                <Icon type="wechat" />
                                <span>Contact Us</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: 'white', textAlign: "center",fontSize: "25px", fontStyle: "italic", fontWeight: "bold", borderRadius: "10px" ,boxShadow: "0 2px 8px rgba(0, 0, 0, 0.09)" }} ><span>Innovation Hub<sub>{` Home of communications`}</sub></span></Header>
                        <Content style={{ margin: '0 16px' }}>
                            <ContentComponent/>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>IHub ©2019 Created by <a href="https://www.synchrony.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(15, 71, 247)", textDecoration: "underline" }}>Synchrony</a></Footer>
                    </Layout>
                </Layout>
            </BrowserRouter>

        )
    }
}
