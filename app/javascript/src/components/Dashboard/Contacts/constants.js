import React from "react";

import dayjs from "dayjs";
import * as yup from "yup";

import Avatar from "./Contact/Avatar";
import DetailText from "./Contact/DetailText";

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
    render: name => <Avatar name={name} />,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "35%",
    render: email => (
      <DetailText text={email} classes="neeto-ui-text-gray-600" />
    ),
  },
  {
    title: "Created at",
    dataIndex: "created_at",
    key: "created_at",
    width: "30%%",
    render: created_at => (
      <DetailText
        text={dayjs(created_at).format("MMM, D, YYYY")}
        classes="neeto-ui-text-gray-600"
      />
    ),
  },
  {
    dataIndex: "icon_button",
    key: "icon_button",
    title: "",
    width: "5%",
  },
];

export const ROLES = ["Regular User", "Editor", "Owner"];
