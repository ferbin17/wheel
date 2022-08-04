import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Dropdown, Typography } from "@bigbinary/neetoui";

const NoteHeader = ({ note, onEditClick, onDeleteClick }) => (
  <div className="flex w-full justify-between">
    <Typography style="h3">{note.title}</Typography>
    <Dropdown icon={MenuVertical} buttonStyle="text" position="bottom-end">
      <li onClick={() => onEditClick(note)}>Edit</li>
      <li onClick={() => onDeleteClick(note)}>Delete</li>
    </Dropdown>
  </div>
);

export default NoteHeader;
