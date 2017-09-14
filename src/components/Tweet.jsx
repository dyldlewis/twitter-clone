import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function Tweet(props) {
  var imgStyle = {
    maxWidth: "50",
    display: "inline-block",
    margin: 10,
    marginLeft: 20
  }
  var tweetStyle = {
    marginLeft: 20,
    display: "inline-block",
    width: "80%",
    overflow: "hidden"
  }

  var tweetTimerStyle = {
    float: "left",
    fontSize: "12px",
    fontStyle: "itlaic"
  }

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
  if (props.tweet.likedStatus) {
    likeAreaContent = <img style={imgStyle} src="http://www.pngpix.com/wp-content/uploads/2016/05/PNGPIX-COM-Heart-Shape-PNG-Image.png" onClick={() => { props.grandTweetWasUnliked(props.tweet)}}/>
  } else {
    likeAreaContent = <Button bsStyle="info" bsSize="small" style={buttonStyle} onClick={() => {props.grandTweetWasLiked(props.tweet)}}>Like</Button>
  }

  return(
    <div>
      <img style={imgStyle} src={props.img}/>
      <div style={tweetStyle}>
        <p>{props.tweet.content}</p>
        <p style={tweetTimerStyle}>{props.tweet.timeSinceOpened} ago</p>
        {likeAreaContent}
      </div>
      <hr/>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object,
  grandTweetWasLiked: PropTypes.func,
  grandTweetWasUnliked: PropTypes.func
}

export default Tweet;
