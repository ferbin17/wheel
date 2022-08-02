import React from "react";

import NoteContainer from "./Note/NoteContainer";
import NoteContent from "./Note/NoteContent";
import NoteFooter from "./Note/NoteFooter";
import NoteHeader from "./Note/NoteHeader";

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
