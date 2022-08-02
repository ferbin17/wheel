import React from "react";

import EmptyNotesListImage from "images/EmptyNotesList";

import EmptyState from "components/Common/EmptyState";

import Note from "./Note";

const DUMMY_TAGS = [
  "Gettings Started",
  "Onboarding",
  "User Flow",
  "UX",
  "Bugs",
  "V2",
];
const STATUS = ["Drafted", "Created", "Updated"];
const NAMES = [
  "Debra",
  "Allen",
  "Gerald",
  "Harris",
  "Raymond",
  "Carter",
  "Jacqueline",
  "Torres",
];

const NotesList = ({
  notes,
  onEditClick,
  onDeleteClick,
  setShowNewNotePane,
}) => {
  // Only for data creation purpose
  const chooseRandomTags = () => {
    const shuffled = DUMMY_TAGS.sort(() => 0.5 - Math.random());
    const randomNumber = Math.floor(
      Math.random() * (DUMMY_TAGS.length - 1) + 1
    );

    return shuffled.slice(0, randomNumber);
  };

  // Only for data creation purpose
  const addTagsToNote = allNotes =>
    allNotes.map(note => {
      const tags = chooseRandomTags();
      return { ...note, tags };
    });

  // Only for data creation purpose
  const addStatusToNote = allNotes =>
    allNotes.map(note => {
      const randomNumber = Math.floor(Math.random() * STATUS.length);
      return { ...note, status: STATUS[randomNumber] };
    });

  // Only for data creation purpose
  const addUserToNote = allNotes =>
    allNotes.map(note => {
      const randomNumber1 = Math.floor(Math.random() * NAMES.length);
      const randomNumber2 = Math.floor(Math.random() * NAMES.length);
      return {
        ...note,
        user: {
          firstName: NAMES[randomNumber1],
          lastName: NAMES[randomNumber2],
        },
      };
    });

  if (notes.length) {
    notes = addTagsToNote(notes);
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
