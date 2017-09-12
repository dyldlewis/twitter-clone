import React from "react";
import Sidebar from "./Sidebar.jsx";
import Centerbox from "./Centerbox.jsx";
import RightSide from "./RightSide.jsx";

function Body(props) {
  return(
    <div style={props.bodyStyleProp}>
      <Sidebar />
      <Centerbox/>
      <RightSide/>
    </div>
  )
}

export default Body;
