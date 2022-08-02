import React from "react";

import { Table } from "@bigbinary/neetoui";
import EmptyNotesListImage from "images/EmptyNotesList";

import EmptyState from "components/Common/EmptyState";

import { CONTACTS_TABLE_COLUMN_DATA } from "./constants";

const ContactList = ({ contacts, setShowNewContactPane }) => (
  <>
    {contacts.length ? (
      <Table
        columnData={CONTACTS_TABLE_COLUMN_DATA}
        rowData={contacts}
        defaultPageSize={9}
        currentPageNumber={3}
        allowRowClick={false}
      />
    ) : (
      <EmptyState
        image={EmptyNotesListImage}
        title="Looks like you don't have any contacts!"
        subtitle="Add your contacts to send customized emails to them."
        primaryAction={() => setShowNewContactPane(true)}
        primaryActionLabel="Add Contact"
      />
    )}
  </>
);

export default ContactList;
