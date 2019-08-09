import React, {Component} from 'react'
import axios from 'axios';

export default class Dashboard extends Component {
    state = {
        searchInput: '',
        userPostsShown: true,
        allPosts: []
    }

    handleChange(e, key) {
        // console.log(this.state)
        this.setState({
            [key]: e.target.value
        })
    }

    componentDidMount() {
        axios.get('/api/posts').then(res => {
            this.setState({
                allPosts: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <input onChange={e => this.handleChange(e, 'searchInput')} type='text' placeholder='Search by title' />
                <button>Search</button>
                <button>Reset</button>
                <input type='checkbox' value='userPostsShown' /> My posts

                <div className="allPosts">
                    <h2>Posts</h2>
                    {this.state.allPosts.map(post => {
                        return (
                            <div>
                                <h3>
                                    {post.title}
                                </h3>
                                <h4>
                                    {post.img}
                                </h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}