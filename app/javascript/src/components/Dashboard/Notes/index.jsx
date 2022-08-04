import React, { useState, useEffect } from "react";

import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";

import DeleteAlert from "./DeleteAlert";
import NotesList from "./NotesList";
import NotesMenu from "./NotesMenu";
import NewNotePane from "./Pane/Create";
import EditNotePane from "./Pane/Edit";
import { addDummyDataToNotes } from "./utils";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNotesMenu, setshowNotesMenu] = useState(false);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showEditNote, setShowEditNote] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNote, setSelectedNote] = useState({});

  const handleEdit = note => {
    setSelectedNote(note);
    setShowEditNote(true);
  };

  const handleDelete = note => {
    setSelectedNote(note);
    setShowDeleteAlert(true);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(addDummyDataToNotes(data.notes));
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <NotesMenu showNotesMenu={showNotesMenu} />
      <Container>
        <Header
          title="All Notes"
          menuBarToggle={() => {
            setshowNotesMenu(prevState => !prevState);
          }}
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add Note"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />

        <NotesList
          notes={notes}
          onEditClick={handleEdit}
          onDeleteClick={handleDelete}
          setShowNewNotePane={setShowNewNotePane}
        />

        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          fetchNotes={fetchNotes}
        />
        <EditNotePane
          showPane={showEditNote}
          setShowPane={setShowEditNote}
          note={selectedNote}
          fetchNotes={fetchNotes}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNote={selectedNote}
            onClose={() => setShowDeleteAlert(false)}
            refetch={fetchNotes}
            setSelectedNote={setSelectedNote}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
