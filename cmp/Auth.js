import React, { Component } from 'react';
import {
    Redirect
} from "react-router-dom";

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            isRegister: false
        }
    }
    login() {
        console.warn("state", this.state)
        fetch('#', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp.success.token);
                localStorage.setItem("auth", JSON.stringify(resp.success.token))
            })
        })
    }
    Register() {
        console.warn("state", this.state)
        fetch('#', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp.success.token);
                localStorage.setItem("auth", JSON.stringify(resp.success.token))
            })
        })
    }
    render() {
        var auth = JSON.parse(localStorage.getItem('auth'))
        return (

            <div>{
                auth ? <Redirect to="home"></Redirect>: null
    }
                {
    this.state.isRegister ?
        <div>
            <input type="text" placeholder="email" onChange={(e) => { this.setState({ email: e.target.value }) }}
            /><br /><br />
            <input type="text" placeholder="password" onChange={(e) => { this.setState({ password: e.target.value }) }}
            /><br /><br />
            <button onClick={(e) => this.login()}>login</button>
            <button onClick={(e) => this.setState({ isRegister: true })}>go to register</button>

        </div>
        :
        <div>
            <input type="text" placeholder="name" onChange={(e) => { this.setState({ name: e.target.value }) }}
            /><br /><br />
            <input type="text" placeholder="email" onChange={(e) => { this.setState({ email: e.target.value }) }}
            /><br /><br />
            <input type="text" placeholder="password" onChange={(e) => { this.setState({ password: e.target.value }) }}
            /><br /><br />
            <input type="text" placeholder="confirm password" onChange={(e) => { this.setState({ c_password: e.target.value }) }}
            /><br /><br />
            <button onClick={(e) => this.login()}>register</button>
            <button onClick={(e) => this.setState({ isRegister: false })}>go to login</button>
        </div>
}

            </div >
        );
    }
}
export default Auth;