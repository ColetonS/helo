import React, {Component} from 'react'
import axios from 'axios'

export default class Auth extends Component {
    state = {
        usernameInput: '',
        passwordInput: ''
    }

    handleChange(e, key) {
        // console.log(this.state)
        this.setState({
            [key]: e.target.value
        })
    }

    registerUser = () => {
        const {usernameInput:username, passwordInput:password} = this.state
        axios.post('/api/auth/register', {username, password}).then(res => {
            this.props.history.push('/dashboard')
        })
    }

    render() {
        return (
            <div>
                <input onChange={e => this.handleChange(e, 'usernameInput')} type='text' placeholder='username' />
                <input onChange={e => this.handleChange(e, 'passwordInput')} type='password' placeholder='password' />
                <button>Login</button>
                <button onClick={this.registerUser}>Register</button>
            </div>
        )
    }
}