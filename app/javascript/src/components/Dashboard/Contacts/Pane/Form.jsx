import React, { useState } from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { CONTACTS_FORM_VALIDATION_SCHEMA, ROLES } from "../constants";

const ContactForm = ({ contact, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async values => {
    try {
      // Call contacts#create api using values
      // Making unnecessary change to values to skip eslint check
      Object.keys(values);
      onClose();
      Toastr.success("Contact added successfully.");
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={contact}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full justify-between">
              <Input
                label="First Name"
                name="firstName"
                className="mr-2 w-full flex-grow-0"
                placeholder="Enter first name"
                required
              />
              <Input
                label="Last Name"
                name="lastName"
                className="ml-2 w-full flex-grow-0"
                placeholder="Enter last name"
                required
              />
            </div>
            <Input
              label="Email Address"
              name="email"
              className="w-full flex-grow-0"
              placeholder="Enter your email address"
              required
            />
            <Select
              label="Role"
              name="role"
              className="w-full flex-grow-0"
              isClearable
              options={ROLES.map(role => ({ label: role, value: role }))}
              placeholder="Select Role"
              required
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label="Save Changes"
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={() => setSubmitted(true)}
              icon={Check}
              iconPosition="right"
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
};

export default ContactForm;
