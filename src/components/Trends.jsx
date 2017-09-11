import React from 'react';

function Trends(props) {
  var trendsBoxStyle = {
    display: "inline-block",
    border: "lightgrey 1px solid",
    overflow: "hidden",
    padding: "10",
    width: "91%",
  }
  var titleStyle = {
    textAlign: "center"
  }
  return (
    <div style={trendsBoxStyle}>
      <h3 style={titleStyle}>Trends</h3>
      <hr/>
      <p>Not if the hipsters have anything to say about it: @mnhippi @kfrist4 Kitties for everyone! #hipsterjesus dyed for your sins. @jazzpastord Amen and amen @QuickSnipeJordy I am with you always @fathertorey @MuphdSmith Still around. They keep putting me into tombs, I keep coming back :-)</p>
      <p>As we get ready to remember the week when I was executed by the state, a simple message: Stop. Killing. People. Currently reading Don't forget the real meaning of Easter. It's not the candy or the bunny. It's The Jesus @juliana_saludes Of course A building project I can get behind. You bring the water and invite the neighbors, I'll do the rest. (h/t Midway Hill CC, Dallas)</p>
    </div>
  )
}

export default Trends;
