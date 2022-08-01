import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Dropdown, Typography } from "@bigbinary/neetoui";

const NoteHeader = ({ note, onEditClick }) => {
  const editClickHandler = selectedNote => {
    onEditClick(selectedNote);
  };

  return (
    <div className="flex w-full justify-between">
      <Typography style="h3">{note.title}</Typography>
      <Dropdown icon={MenuVertical} buttonStyle="text" position="bottom-end">
        <li onClick={editClickHandler.bind(this, note)}>Edit</li>
        <li>Delete</li>
      </Dropdown>
    </div>
  );
};

export default NoteHeader;
