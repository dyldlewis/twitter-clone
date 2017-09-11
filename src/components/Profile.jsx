import React from 'react';

function Profile(props) {
  var profileBoxStyle = {
    textAlign: "left",
    border: "lightgrey 1px solid",
    display: "inline-block",
    overflow: "hidden",
    padding: "10",
    width: "91%"
  }
  var listStyle = {
    listStyle: "none",
    paddingLeft: "0"
  }
  var listItemStyle = {
    display: "inline",
    padding: "5",
    listStylePosition: "outside",
    color: "grey",
    fontSize: "12"
  }
  var imgStyle = {
    maxWidth: "75",
    borderRadius: "10",
  }
  var nameStyle = {
    float: "right",
    marginRight: "7",
    marginTop: "50"
  }
  return(
    <div style={profileBoxStyle}>
      <img style={imgStyle} src="http://icons.veryicon.com/png/Internet%20%26%20Web/Simple%201/twitter.png"/>
      <h3 style={nameStyle}>Hipster Jesus</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>TWEETS</li>
        <li style={listItemStyle}>FOLLOWING</li>
        <li style={listItemStyle}>FOLLOWERS</li>
      </ul>
    </div>
  )
}

export default Profile;
