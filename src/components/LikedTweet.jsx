import React from 'react';
import PropTypes from 'prop-types';
import Tweet from '../models/tweet'

class LikedTweet extends React.Component {

  constructor(props) {
    super(props)
    this.state = {likedStatus: false};
    this.tweetWasLiked = this.tweetWasLiked.bind(this);
  }

  tweetWasLiked(tweet) {
    alert("hello");
  };

  render() {
    var buttonStyle = {
      float: "right",
      marginRight: "10px"
    }

    return(
      <div>
        <button style={buttonStyle}
                onClick={() => { this.tweetWasLiked(this.props.tweet.likedStatus) }}
                >Like</button>
      </div>
    )

    }
  }

  LikedTweet.propTypes = {
    tweet: PropTypes.object
  }

export default LikedTweet;
