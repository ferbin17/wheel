import React from "react";

import * as yup from "yup";

import ContactAvatar from "./Contact/ContactAvatar";
import ContactDetailText from "./Contact/ContactDetailText";

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
  role: yup.string().required("Role is required"),
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

export const ROLES = ["Regular User", "Editor", "Owner"];
