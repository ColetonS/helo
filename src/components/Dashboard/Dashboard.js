import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import Post from "../../components/Post/Post";

class Dashboard extends Component {
  state = {
    searchInput: "",
    userPostsShown: true,
    allPosts: []
  };

  handleChange(e, key) {
    console.log(e.target.value);
    this.setState({
      [key]: e.target.value
    });
  }

  toggleUserPostsShown() {
    this.setState({
      userPostsShown: !this.state.userPostsShown
    });
  }

  searchPosts = () => {
    axios
      .get(
        `/api/posts/${this.props.user_id}?search=${
          this.state.searchInput
        }&userposts=${this.state.userPostsShown}`
      )
      .then(res => {
        this.setState({
          allPosts: res.data
        });
      });
  };

  componentDidMount() {
    axios.get("/api/posts").then(res => {
      this.setState({
        allPosts: res.data
      });
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <input
          onChange={e => this.handleChange(e, "searchInput")}
          type="text"
          placeholder="Search by title"
        />
        <button onClick={this.searchPosts}>Search</button>
        <button>Reset</button>
        <input
          type="checkbox"
          checked={this.state.userPostsShown}
          onChange={() => this.toggleUserPostsShown()}
        />{" "}
        My posts
        <div className="allPosts">
          <h2>Posts</h2>
          {this.state.allPosts.map(post => {
            return (
                <Post key={post.id} title={post.title} img={post.img} />
            )
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user_id
  };
}

export default connect(mapStateToProps)(Dashboard);
