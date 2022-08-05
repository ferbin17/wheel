import React from "react";

import Actions from "./Contact/Actions";

import { NAMES } from "../Notes/constants";

const fetchContactValues = onDeleteClick =>
  Array(5)
    .fill(NAMES)
    .flat()
    .map(name => {
      const lastName = NAMES[Math.floor(Math.random() * NAMES.length)];
      const contactId = Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(2, 10);
      const startDate = new Date(2012, 0, 1);
      const endDate = new Date();

      return {
        id: contactId,
        key: contactId,
        name: `${name} ${lastName}`,
        role: "Owner",
        email: `${name.toLowerCase()}${lastName.toLowerCase()}@example.com`,
        created_at:
          startDate.getTime() +
          Math.random() * (endDate.getTime() - startDate.getTime()),
        icon_button: (
          <Actions contactId={contactId} onDeleteClick={onDeleteClick} />
        ),
      };
    });

export { fetchContactValues };
