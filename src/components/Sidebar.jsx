import React from 'react';
import Profile from './Profile.jsx';
import Trends from './Trends.jsx';

function Sidebar(props) {
  var sidebarStyle = {
    maxWidth: "250",
    overflow: "hidden"
  }
  return(
    <div style={sidebarStyle}>
      <Profile/>
      <Trends/>
    </div>
  )
}

export default Sidebar;
