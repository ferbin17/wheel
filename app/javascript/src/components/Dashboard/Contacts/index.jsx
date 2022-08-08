import React, { useEffect, useState } from "react";

import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import ContactList from "./ContactList";
import ContactsMenu from "./ContactsMenu";
import DeleteContactAlert from "./DeleteAlert";
import NewContactPane from "./Pane/Create";
import { fetchContactValues } from "./utils";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [showContactsMenu, setshowContactsMenu] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteContactAlert, setShowDeleteContactAlert] = useState(false);

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContactId, setSelectedContactId] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = selectedId => {
    setSelectedContactId(selectedId);
    setShowDeleteContactAlert(true);
  };

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setContacts(fetchContactValues(handleDelete));
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
      <ContactsMenu showContactsMenu={showContactsMenu} />
      <Container>
        <Header
          title="All Contacts"
          menuBarToggle={() => {
            setshowContactsMenu(prevState => !prevState);
          }}
          actionBlock={
            <Button
              onClick={() => setShowNewContactPane(true)}
              label="Add Contact"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />

        <ContactList
          contacts={contacts}
          setShowNewContactPane={setShowNewContactPane}
        />

        <NewContactPane
          showPane={showNewContactPane}
          setShowPane={setShowNewContactPane}
        />

        {showDeleteContactAlert && (
          <DeleteContactAlert
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
            onClose={() => setShowDeleteContactAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Contacts;
