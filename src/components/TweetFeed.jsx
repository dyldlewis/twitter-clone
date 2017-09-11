import React from 'react';
import Tweet from './Tweet';

function TweetFeed(props) {
  return (
    <div>
      <Tweet
        img="http://www.iconsdb.com/icons/preview/gray/twitter-xxl.png"
        title="OMG"
        content="He's just not that into you, Margaret."
      />
      <Tweet
        img="https://didatticattivablog.files.wordpress.com/2016/12/bbe0fbe844c72eea190bf8b51b401be0.jpg"
        title="Why doesn't he like me?"
        content="Philip is so freaking cute. Why won't he ever notice me, huh ladies?!?"
      />
      <Tweet
        img="http://www.iconsdb.com/icons/preview/gray/twitter-xxl.png"
        title="Philip"
        content="What a dreamboat"
      />
    </div>
  );
}

export default TweetFeed;
