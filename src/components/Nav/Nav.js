import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {
    class = {

    }

    render() {
        return (
            <div>
                {/* <h1>Testing Nav</h1> */}
                <div className="user-profile">
                    <h3>{this.props.username}</h3>
                    <img src={this.props.profilePic} />
                </div>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/new'><button>New Post</button></Link>
                <Link to='/'><button>Logout</button></Link>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {username, profilePic} = reduxState
    return {username, profilePic}
}

export default connect(mapStateToProps)(Nav)