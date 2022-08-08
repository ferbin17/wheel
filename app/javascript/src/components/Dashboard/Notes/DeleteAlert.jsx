import React, { useState } from "react";

import { Alert } from "neetoui";

import notesApi from "apis/notes";

const DeleteAlert = ({ refetch, onClose, selectedNote, setSelectedNote }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await notesApi.destroy({ ids: [selectedNote.id] });
      onClose();
      setSelectedNote({});
      refetch();
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      closeButton={false}
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to delete the note? This cannot be undone."
      title="Delete Note"
      isSubmitting={deleting}
      size="md"
    />
  );
};

export default DeleteAlert;
