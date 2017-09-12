import React from 'react';
import PropTypes from 'prop-types';
import LikedTweet from './LikedTweet'

function Tweet(props) {
  var imgStyle = {
    maxWidth: "50",
    display: "inline-block",
    margin: "10",
    marginLeft: "20"
  }
  var tweetStyle = {
    marginLeft: "20",
    display: "inline-block",
    width: "80%",
    overflow: "hidden"
  }


  return(
    <div>
      <img style={imgStyle} src={props.img}/>
      <div style={tweetStyle}>
        <h3>{props.likedStatus}</h3>
        <p>{props.content}</p>
        <LikedTweet
          tweet={props}/>
      </div>
      <hr/>
    </div>
  );
}

Tweet.propTypes = {
  img: PropTypes.string,
  content: PropTypes.string,
  likedStatus: PropTypes.bool
}

export default Tweet;
