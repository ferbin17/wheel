import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Dropdown } from "@bigbinary/neetoui";

const ContactActions = ({ contactId, onDeleteClick }) => (
  <Dropdown icon={MenuHorizontal} buttonStyle="text" position="bottom-end">
    <li>Edit</li>
    <li onClick={() => onDeleteClick(contactId)}>Delete</li>
  </Dropdown>
);

export default ContactActions;
