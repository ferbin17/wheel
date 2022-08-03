import React, { useEffect, useState } from "react";

import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { CONTACTS } from "./constants";
import ContactList from "./ContactList";
import ContactsMenu from "./ContactsMenu";
import NewContactPane from "./Pane/Create";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [showContactsMenu, setshowContactsMenu] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setContacts(CONTACTS);
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
      </Container>
    </>
  );
};

export default Contacts;
