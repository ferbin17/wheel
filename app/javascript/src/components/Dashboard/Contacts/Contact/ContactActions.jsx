import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Dropdown } from "@bigbinary/neetoui";

const ContactActions = ({ contactId }) => {
  const onDeleteClickHandler = selectedContactId => {
    alert(selectedContactId);
  };

  return (
    <Dropdown icon={MenuHorizontal} buttonStyle="text" position="bottom-end">
      <li>Edit</li>
      <li onClick={onDeleteClickHandler.bind(this, contactId)}>Delete</li>
    </Dropdown>
  );
};

export default ContactActions;
