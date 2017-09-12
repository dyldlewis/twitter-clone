import React from 'react';
import Tweet from '../models/tweet.js';
import PropTypes from 'prop-types';

class PostInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewTweetFormSubmission = this.handleNewTweetFormSubmission.bind(this);
  }

  handleNewTweetFormSubmission(event) {
    event.preventDefault();
    console.log(this.refs._content.value);
    const { _content } = this.refs;
    var newTweet = new Tweet(_content.value);
    this.props.onNewTweetCreation(newTweet);
  }

  render() {
    var inputStyle = {
      display: "inline-block",
      marginLeft: "50px",
      width: "65%",
      height: "25px"
    }
    var titleStyle = {
      display: "inline-block",
      marginLeft: "10px"
    }

    return(
      <div>
        <h3 style={titleStyle}>Blessed be...</h3>
        <form onSubmit={this.handleNewTweetFormSubmission}>
          <input
            style={inputStyle}
            ref="_content"
            type="text"
            id="content"
            placeholder="Send Blessing"></input>
          <button type="submit">Tweet!</button>
      </form>
      </div>
    )
  }
}

PostInput.proptypes = {
  onNewTweetCreation: PropTypes.func
}

export default PostInput;
