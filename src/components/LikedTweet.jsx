import React from 'react';
import PropTypes from 'prop-types';
import Tweet from '../models/tweet'

class LikedTweet extends React.Component {

  constructor(props) {
    super(props)
    this.state = {likedStatus: false};
    this.tweetWasLiked = this.tweetWasLiked.bind(this);
    this.tweetWasUnliked = this.tweetWasUnliked.bind(this);
  }

  tweetWasLiked(tweet) {
    // console.log(tweet.likedStatus);
    this.setState({likedStatus: true});
    // tweet.likedStatus = true;
  };

  tweetWasUnliked(tweet) {
    this.setState({likedStatus: false});
    // tweet.likedStatus = false;
  }

  render() {
    var buttonStyle = {
      float: "right",
      marginRight: "10px"
    }
    var imgStyle = {
      maxWidth: "25px",
      float: "right",
      marginRight: "10px"
    }

    let likeAreaContent = null;
    if (this.state.likedStatus) {
      likeAreaContent = <img style={imgStyle} src="https://freeiconshop.com/wp-content/uploads/edd/heart-compact-flat.png" onClick={() => { this.tweetWasUnliked(this.props.tweet)}}/>
    } else {
      likeAreaContent = <button style={buttonStyle} onClick={() => { this.tweetWasLiked(this.props.tweet)}}>Like</button>
    }

    console.log(this.props.tweet);

    return(
      <div>
        {likeAreaContent}
      </div>
    )
  }
}
  LikedTweet.propTypes = {
    tweet: PropTypes.object
  }

export default LikedTweet;
