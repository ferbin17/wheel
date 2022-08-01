import React from "react";

import NoteContainer from "./Note/NoteContainer";
import NoteContent from "./Note/NoteContent";
import NoteFooter from "./Note/NoteFooter";
import NoteHeader from "./Note/NoteHeader";

const Note = ({ note, user, onEditClick }) => (
  <NoteContainer key={note.id}>
    <NoteHeader note={note} onEditClick={onEditClick} />
    <NoteContent description={note.description} />
    <NoteFooter
      tag="Getting Started"
      created_at={note.created_at}
      user={user}
    />
  </NoteContainer>
);

export default Note;
