import React from "react";
import Body from "./Body.jsx";
import Header from "./Header.jsx";

function App(props){
  var centerAllOfIt = {
    textAlign: "center"
  }
  return(
    <div>
      <Header/>
      <Body bodyStyleProp={centerAllOfIt}/>
    </div>
  );
}

export default App;
