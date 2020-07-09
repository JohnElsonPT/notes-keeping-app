import React, { useState } from "react";
// to use these icon things from material-ui, you need to use the dependencies: material-ui/core and material-ui/icons 
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
//Fab = floating action button from material-ui
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      {/* below ands input for title of note when you click in text area, where content of note is typed */}
      {isExpanded ? 
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Take a note..."
          // if you click the textarea it increases size of text area
          rows={isExpanded ? 3: 1}
        />
        {/* add button is only rendered when you click the text area */}
        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={submitNote}>
            {/* retrieved from here: https://material-ui.com/components/material-icons/ */}
            <AddCircleOutlineIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
