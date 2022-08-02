import React, { useState } from "react";

import Note from "./Note";
import EditNotePane from "./Pane/Edit";

const NotesList = ({ notes, user, fetchNotes }) => {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  const onEditClickHandler = selectedNote => {
    setSelectedNote(selectedNote);
    setShowEditNote(true);
  };

  return (
    <>
      <div className="mt-10 flex w-full flex-col">
        {notes.map(note => (
          <Note
            key={note.id}
            note={note}
            user={user}
            onEditClick={onEditClickHandler}
          />
        ))}
      </div>
      <EditNotePane
        showPane={showEditNote}
        setShowPane={setShowEditNote}
        note={selectedNote}
        fetchNotes={fetchNotes}
      />
    </>
  );
};

export default NotesList;
