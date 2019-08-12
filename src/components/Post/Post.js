import React, {Component} from 'react'

export default class Post extends Component {
    class = {

    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <img src={this.props.img} alt='profile-pic' />
                
            </div>
        )
    }
}