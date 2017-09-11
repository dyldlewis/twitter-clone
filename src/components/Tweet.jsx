import React from 'react';
import PropTypes from 'prop-types';

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
    width: "80%"
  }
  return(
    <div>
      <img style={imgStyle} src={props.img}/>
      <div style={tweetStyle}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
      <hr/>
    </div>
  );
}

Tweet.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
}

export default Tweet;
