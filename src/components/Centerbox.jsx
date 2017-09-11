import React from 'react';
import PostInput from './PostInput';
import TweetFeed from './TweetFeed';

function Centerbox(props) {

  return (
    <div style={props.styleRuleProp}>
      <PostInput/>
      <hr/>
      <TweetFeed/>
    </div>
  )
}

// proptype

export default Centerbox;
