import React from "react";

import NoteContainer from "./NoteContainer";
import NoteContent from "./NoteContent";
import NoteFooter from "./NoteFooter";
import NoteHeader from "./NoteHeader";

const Note = ({ note, onEditClick, onDeleteClick }) => (
  <NoteContainer key={note.id}>
    <NoteHeader
      note={note}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
    />
    <NoteContent note={note} />
    <NoteFooter note={note} />
  </NoteContainer>
);

export default Note;
