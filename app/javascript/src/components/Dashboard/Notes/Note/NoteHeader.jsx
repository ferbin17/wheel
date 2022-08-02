import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Dropdown, Typography } from "@bigbinary/neetoui";

const NoteHeader = ({ note, onEditClick, onDeleteClick }) => {
  const editClickHandler = selectedNote => {
    onEditClick(selectedNote);
  };

  const deleteClickHandler = selectedNote => {
    onDeleteClick(selectedNote);
  };

  return (
    <div className="flex w-full justify-between">
      <Typography style="h3">{note.title}</Typography>
      <Dropdown icon={MenuVertical} buttonStyle="text" position="bottom-end">
        <li onClick={editClickHandler.bind(this, note)}>Edit</li>
        <li onClick={deleteClickHandler.bind(this, note)}>Delete</li>
      </Dropdown>
    </div>
  );
};

export default NoteHeader;
