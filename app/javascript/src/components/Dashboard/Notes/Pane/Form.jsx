import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import notesApi from "apis/notes";

import { NAMES, NOTES_FORM_VALIDATION_SCHEMA, TAGS } from "../constants";

export default function NoteForm({ onClose, refetch, note, isEdit }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              label="Title"
              name="title"
              className="w-full flex-grow-0"
              placeholder="Enter note title"
            />
            <Textarea
              required
              label="Description"
              name="description"
              className="w-full flex-grow-0"
              rows={1}
              placeholder="Enter note description"
            />
            <Select
              isClearable
              required
              label="Assigned Contact"
              name="contact"
              className="w-full flex-grow-0"
              options={NAMES.map(name => ({ label: name, value: name }))}
              onChange={e => setFieldValue("contact", e ? e.value : "")}
              placeholder="Select Role"
            />
            <Select
              isClearable
              required
              label="Tag"
              name="tag"
              className="w-full flex-grow-0"
              options={TAGS.map(tag => ({ label: tag, value: tag }))}
              onChange={e => setFieldValue("tag", e ? e.value : "")}
              placeholder="Select Tag"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={() => setSubmitted(true)}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}
