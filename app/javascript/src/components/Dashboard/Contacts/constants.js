import React from "react";

import * as yup from "yup";

import ContactActions from "./Contact/ContactActions";
import ContactAvatar from "./Contact/ContactAvatar";
import ContactDetailText from "./Contact/ContactDetailText";

import { NAMES } from "../Notes/constants";

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().required("Email Address is required"),
  role: yup.object().required("Role is required").nullable(),
});

export const CONTACTS_TABLE_COLUMN_DATA = [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    width: "35%",
    render: name => <ContactAvatar name={name} />,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "35%",
    render: email => (
      <ContactDetailText text={email} classes="neeto-ui-text-gray-600" />
    ),
  },
  {
    title: "Created at",
    dataIndex: "created_at",
    key: "created_at",
    width: "30%%",
    render: created_at => {
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const date = new Date(created_at);
      const date_value = `${month[date.getMonth()].slice(
        0,
        3
      )}, ${date.getDate()}, ${date.getFullYear()}`;

      return (
        <ContactDetailText text={date_value} classes="neeto-ui-text-gray-600" />
      );
    },
  },
  {
    dataIndex: "icon_button",
    key: "icon_button",
    title: "",
    width: "5%",
  },
];

export const CONTACTS = Array(5)
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
      icon_button: <ContactActions contactId={contactId} />,
    };
  });

export const ROLES = ["Regular User", "Editor", "Owner"];
