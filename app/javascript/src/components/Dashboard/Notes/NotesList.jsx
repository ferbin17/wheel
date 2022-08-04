import React from "react";

import EmptyNotesListImage from "images/EmptyNotesList";

import EmptyState from "components/Common/EmptyState";

import Note from "./Note";

const NotesList = ({
  notes,
  onEditClick,
  onDeleteClick,
  setShowNewNotePane,
}) => (
  <>
    {notes.length ? (
      <div className="mt-10 flex w-full flex-col">
        {notes.map(note => (
          <Note
            key={note.id}
            note={note}
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    ) : (
      <EmptyState
        image={EmptyNotesListImage}
        title="Looks like you don't have any notes!"
        subtitle="Add your notes to send customized emails to them."
        primaryAction={() => setShowNewNotePane(true)}
        primaryActionLabel="Add Note"
      />
    )}
  </>
);

export default NotesList;
