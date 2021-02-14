import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [zoomedIn, setZoomedIn] = useState(false);

  function zoomClick() {
    setZoomedIn(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    if (note.title === "" && note.content === "") {
      alert("Enter title and note!");
    } else if (note.title === "") {
      alert("Enter title field!");
    } else if (note.content === "") {
      alert("Enter some note!");
    } else {
      props.onAdd(note);
    }
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {zoomedIn && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={zoomClick}
          value={note.content}
          placeholder="Write a note..."
          rows={!zoomedIn ? "1" : "3"}
        />
        <Zoom in={zoomedIn}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
