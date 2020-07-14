import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

const CreateArea = ({ onAdd }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitNote = (e) => {
    onAdd(note);
    e.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  };
  const expand = () => {
    setIsExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            value={note.title}
            onChange={handleChange}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expand}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : 1}
          onChange={handleChange}
        />
        <Zoom in={isExpanded}>
          <button onClick={submitNote}>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
