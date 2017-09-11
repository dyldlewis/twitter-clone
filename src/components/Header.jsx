import React from "react";

function Header(props) {
  var listStyle = {
    listStyle: "none",
    // textAlign: "center",
  }
  var listItemStyle = {
    display: "inline-block",
  }
  return (
    <div>
      <ul style={listStyle}>
        <li style={listItemStyle}>Home</li>
        <li>Notifications</li>
        <li>Messages</li>
      </ul>
      <input type="text" placeholder="Search"></input>
      <input type="text" placeholder="Tweet"></input>
    </div>
  );
}

export default Header;
