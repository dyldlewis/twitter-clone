import React from "react";
import Tweet from "./Tweet";
import PropTypes from "prop-types";


function TweetFeed(props) {

  return (
    <div>
      {props.tweetList.map((tweet, index) =>
        <Tweet
          img="http://www.iconsdb.com/icons/preview/gray/twitter-xxl.png"
          key={index}
          tweet={tweet}
          grandTweetWasLiked={props.childTweetWasLiked}
          grandTweetWasUnliked={props.childTweetWasUnliked}/>
      )}
    </div>
  );
}

TweetFeed.propTypes = {
  tweetList: PropTypes.array,
  childTweetWasLiked: PropTypes.func,
  childTweetWasUnliked: PropTypes.func
}

export default TweetFeed;
