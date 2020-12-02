import React from 'react';

let nodeTitle = "This is note title";
let nodeContent = "This is note content";

function Note() {
  return <div className="noteDiv">
            <h3>{nodeTitle}</h3>
            <p>{nodeContent}</p>
         </div>
}


export default Note;