import React from 'react';

function PostInput(props) {
  var inputStyle = {
    display: "inline-block",
    marginLeft: "50px",
    width: "65%",
    height: "25px"
  }
  var titleStyle = {
    display: "inline-block",
    marginLeft: "10px"
  }
  return(
    <div>
      <h3 style={titleStyle}>Blessed be...</h3>
      <input style={inputStyle} type="text" placeholder="Send Blessing"></input>
    </div>
  )
}

export default PostInput;
