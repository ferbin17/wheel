import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  contact: "",
  tag: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  contact: yup.string().required("Contact is required"),
  tag: yup.string().required("Tag is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const TAGS = [
  "Gettings Started",
  "Onboarding",
  "User Flow",
  "UX",
  "Bugs",
  "V2",
];

export const STATUS = ["Drafted", "Created", "Updated"];
export const NAMES = [
  "Debra",
  "Allen",
  "Gerald",
  "Harris",
  "Raymond",
  "Carter",
  "Jacqueline",
  "Torres",
];
