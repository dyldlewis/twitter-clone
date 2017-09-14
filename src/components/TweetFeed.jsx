import React from 'react';
import Tweet from './Tweet';
import PropTypes from "prop-types";

function TweetFeed(props) {
  return (
    <div>
      {props.tweetList.map((tweet, index) =>
        <Tweet
          img="http://www.iconsdb.com/icons/preview/gray/twitter-xxl.png"
          content={tweet.content}
          likedStatus={tweet.likedStatus}
          timeSinceOpened={tweet.timeSinceOpened}
          key={index}/>

      )}
    </div>
  );
}

TweetFeed.propTypes = {
  tweetList: PropTypes.array
}

export default TweetFeed;
