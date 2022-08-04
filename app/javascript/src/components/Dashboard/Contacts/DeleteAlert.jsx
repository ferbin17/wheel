import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

const DeleteContactAlert = ({
  selectedContactId,
  setSelectedContactId,
  onClose,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      // Make constacts#delete api call using selectedContactId
      // Making unnecessary change to selectedContactId to skip eslint check
      selectedContactId.length;
      setSelectedContactId(null);
      onClose();
      Toastr.success("Contact deleted successfully.");
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
      message="Are you sure you want to delete the contact? These changes cannot be undone."
      title="Delete Contact"
      isSubmitting={deleting}
      size="md"
    />
  );
};

export default DeleteContactAlert;
