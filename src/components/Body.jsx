import React from "react";
import Sidebar from "./Sidebar.jsx";
import Centerbox from "./Centerbox.jsx";

function Body(props) {
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
  return(
    <div>
      <Sidebar />
      <Centerbox styleRuleProp={centerboxStyle}/>
    </div>
  )
}

export default Body;
