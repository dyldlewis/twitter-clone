import React from "react";
import PropTypes from "prop-types";



function Likes(props) {

// findLikes() {
//   var likedTweets = [];
//   for (var i = 1; props.tweetList.length; i++) {
//     if (props.tweetList[i].likedStatus === true) {
//       likedTweets.push(props.tweetList[i])
//     }
//   }
// }


  return (
    <div>
      <h1>Likes</h1>
        {props.tweetList.map(x => {
        	if (x.likedStatus === true){
        		return <p>{x.content}</p>
        	}
        })}
    </div>
  );
}

Likes.propTypes = {
  tweetList: PropTypes.array
}

export default Likes;
