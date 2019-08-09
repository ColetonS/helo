import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUser} from '../../ducks/reducer'


class Auth extends Component {
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
            this.props.setUser({username})
            this.props.history.push('/dashboard')
        })
    }

    login = () => {
        const {usernameInput:username, passwordInput:password} = this.state
        axios.post('/api/auth/login', {username, password}).then(res => {
            const {username, password} = res.data.user
            this.props.setUser({username})
            this.props.history.push('/dashboard')
        })
    }

    render() {
        return (
            <div>
                <input onChange={e => this.handleChange(e, 'usernameInput')} type='text' placeholder='username' />
                <input onChange={e => this.handleChange(e, 'passwordInput')} type='password' placeholder='password' />
                <button onClick={this.login}>Login</button>
                <button onClick={this.registerUser}>Register</button>
            </div>
        )
    }
}

export default connect(null, {setUser})(Auth)