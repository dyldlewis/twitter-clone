import React from 'react';
import PostInput from './PostInput';
import TweetFeed from './TweetFeed';

class Centerbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTweetList: [],
    };
    this.addNewTweetToList = this.addNewTweetToList.bind(this);
  }

  addNewTweetToList(newTweet) {
    var newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.push(newTweet);
    this.setState({masterTweetList: newMasterTweetList});
  }

  render() {
    var centerboxStyle = {
      display: "inline-block",
      verticalAlign: "top",
      border: "lightgrey 1px solid",
      float: "center",
      width: "500",
      overflow: "hidden",
      marginLeft: "20",
      marginRight: "20"
    }

    return (
      <div style={centerboxStyle}>
        <PostInput onNewTweetCreation = {this.addNewTweetToList}/>
        <hr/>
        <TweetFeed
          tweetList = {this.state.masterTweetList}/>
      </div>
    )
  }
}

export default Centerbox;
