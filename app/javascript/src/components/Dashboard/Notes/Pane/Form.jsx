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
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              label="Title"
              name="title"
              className="w-full flex-grow-0"
              placeholder="Enter note title"
              required
            />
            <Textarea
              label="Description"
              name="description"
              className="w-full flex-grow-0"
              rows={1}
              placeholder="Enter note description"
              required
            />
            <Select
              label="Assigned Contact"
              name="contact"
              className="w-full flex-grow-0"
              isClearable
              options={NAMES.map(name => ({ label: name, value: name }))}
              placeholder="Select Role"
              required
            />
            <Select
              label="Tag"
              name="tag"
              className="w-full flex-grow-0"
              isClearable
              options={TAGS.map(tag => ({ label: tag, value: tag }))}
              placeholder="Select Tag"
              required
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
