import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { CONTACTS_FORM_INITIAL_FORM_VALUES } from "../constants";

const NewContactPane = ({ showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h3" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Form onClose={onClose} contact={CONTACTS_FORM_INITIAL_FORM_VALUES} />
    </Pane>
  );
};

export default NewContactPane;
