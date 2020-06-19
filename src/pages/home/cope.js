// import React, { Component } from 'react'
// import Home from "./Home";
// import List from "./List";
// import Mine from "./Mine";
// import Shoppingcar from "./components/ShoppingCar"
// import "./css/common.scss"


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            component: <Home></Home>
        }
        this.changeView.bind(this)
    }
    changeView = (path) => {
        switch (path) {
            case "home":
                this.setState({
                    component: <Home></Home>
                })
                break;
            case "list":
                this.setState({
                    component: <List fn={this.changeView}></List>
                })
                break;
            case "mine":
                this.setState({
                    component: <Mine></Mine>
                })
                break;
            case "shoppingcar":
                this.setState({
                    component: <Shoppingcar></Shoppingcar>
                })
                break;
        }
    }
    render() {
        return (
            <div className="app">

                <ul className="nav">
                    <li onClick={() => {
                        this.changeView("home")
                    }}>首页</li>
                    <li onClick={() => {
                        this.changeView("list")
                    }}>列表</li>
                    <li onClick={() => {
                        this.changeView("mine")
                    }}>我的</li>
                </ul>
                <div className="content">
                    {this.state.component}
                </div>
            </div>
        )
    }
}

