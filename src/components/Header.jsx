import React from "react";

function Header(props) {
  var listStyle = {
    listStyle: "none",
    display: "inline-block",
    marginRight: "30%",
    // textAlign: "center",
  }
  var listItemStyle = {
    border: "solid 1px lightgrey",
    display: "inline",
    padding: "5"
  }
  var inputStyle = {
    margin: "10",
    display: "inline-block"
  }
  return (
    <div style={props.headerStyleProp}>
      <ul style={listStyle}>
        <li style={listItemStyle}>Home</li>
        <li style={listItemStyle}>Notifications</li>
        <li style={listItemStyle}>Messages</li>
      </ul>
      <input style={inputStyle} type="text" placeholder="Search"></input>
      <input style={inputStyle} type="text" placeholder="Tweet"></input>
      <hr/>
    </div>
  );
}

export default Header;
