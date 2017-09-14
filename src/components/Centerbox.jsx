import React from 'react';
import PostInput from './PostInput';
import TweetFeed from './TweetFeed';
import Likes from './Likes';

class Centerbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTweetList: [],
    };
    this.addNewTweetToList = this.addNewTweetToList.bind(this);
    this.tweetWasLiked = this.tweetWasLiked.bind(this);
    this.tweetWasUnliked = this.tweetWasUnliked.bind(this);
  }

  addNewTweetToList(newTweet) {
    var newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.unshift(newTweet);
    this.setState({masterTweetList: newMasterTweetList});
  }

  componentDidMount() {
    this.timeSinceOpenedChecker = setInterval(() =>
      this.updateTweetTimeSinceOpened(),
      5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timeSinceOpenedChecker);
  }

  updateTweetTimeSinceOpened() {
     let newMasterTweetList = this.state.masterTweetList.slice();
     newMasterTweetList.forEach((tweet) =>
       tweet.setTimeSinceOpened()
     );
     this.setState({masterTweetList:newMasterTweetList})
   }

   tweetWasLiked(tweet) {
     var newMasterTweetList = this.state.masterTweetList.slice();
     for (var i = 0; i < newMasterTweetList.length; i++) {
       if (newMasterTweetList[i] === tweet) {
         newMasterTweetList[i].likedStatus = true;
         this.setState({masterTweetList: newMasterTweetList});
       }
     }

   }

   tweetWasUnliked(tweet) {
     var newMasterTweetList = this.state.masterTweetList.slice();
     for (var i = 0; i < newMasterTweetList.length; i++) {
       if (newMasterTweetList[i] === tweet) {
         newMasterTweetList[i].likedStatus = false;
         this.setState({masterTweetList: newMasterTweetList});
       }
     }
   }

  render() {
    var centerboxStyle = {
      display: "inline-block",
      verticalAlign: "top",
      border: "lightgrey 1px solid",
      float: "center",
      width: 500,
      overflow: "hidden",
      marginLeft: 20,
      marginRight: 20
    }

    var likesStyle = {
      color: "lightblue"
    }
    return (
      <div style={centerboxStyle}>
        <PostInput onNewTweetCreation = {this.addNewTweetToList}/>
        <hr/>
        <TweetFeed
          tweetList = {this.state.masterTweetList}
          childTweetWasLiked={this.tweetWasLiked}
          childTweetWasUnliked={this.tweetWasUnliked}/>
        <div style={likesStyle}>
          <Likes

            tweetList={this.state.masterTweetList}/>
        </div>
      </div>
    )
  }
}

export default Centerbox;
