import React from "react";

import EmptyNotesListImage from "images/EmptyNotesList";

import EmptyState from "components/Common/EmptyState";

import { TAGS, STATUS, NAMES } from "./constants";
import Note from "./Note";

const NotesList = ({
  notes,
  onEditClick,
  onDeleteClick,
  setShowNewNotePane,
}) => {
  // Only for data creation purpose
  const chooseRandomElement = list => {
    const randomNumber = Math.floor(Math.random() * list.length);

    return list[randomNumber];
  };

  // Only for data creation purpose
  const addTagToNote = allNotes =>
    allNotes.map(note => {
      const tag = chooseRandomElement(TAGS);
      return { ...note, tag };
    });

  // Only for data creation purpose
  const addStatusToNote = allNotes =>
    allNotes.map(note => ({ ...note, status: chooseRandomElement(STATUS) }));

  // Only for data creation purpose
  const addUserToNote = allNotes =>
    allNotes.map(note => ({
      ...note,
      user: {
        firstName: chooseRandomElement(NAMES),
        lastName: chooseRandomElement(NAMES),
      },
      contact: chooseRandomElement(NAMES),
    }));

  if (notes.length) {
    notes = addTagToNote(notes);
    notes = addStatusToNote(notes);
    notes = addUserToNote(notes);
  }

  return (
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
};

export default NotesList;
