import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";


const Note = ({ title, content, onDelete, id }) => {
  const handleClick = () => {
    onDelete(id);
  };
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
