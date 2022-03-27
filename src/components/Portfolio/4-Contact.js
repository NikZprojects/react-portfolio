import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const axios = require("axios");

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Please include a valid name.")
    .max(50, "Name exceeds character limit.")
    .required("Please include your name."),
  email: Yup.string().email("Invalid email.").required("Email is required."),
  message: Yup.string()
    .min(5, "This message is too short.")
    .max(
      500,
      "Please shorten your message. Alternatively, email me at NikZprojects@gmail.com."
    )
    .required("Message is required."),
});

const submitForm = async (values, actions, setIsSent) => {
  setTimeout(async () => {
    await axios.post("https://www.nikzprojects.com/api/messages/", values);
    actions.setSubmitting(false);
    actions.resetForm({
      values: { name: "", email: "", message: "" },
    });
    setIsSent(true);
  }, 400);
};

const FormikForm = () => {
  const [isSent, setIsSent] = React.useState(false);
  return (
    <div>
      <h1>Contact</h1>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          submitForm(values, actions, setIsSent);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="name" placeholder="Name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />

            <Field type="email" placeholder="Email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />

            <Field
              type="message"
              as="textarea"
              placeholder="Message"
              name="message"
              className="form-textarea"
            />
            <ErrorMessage name="message" component="div" className="error" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            {isSent ? (
              <div className="success">Message received. Thank you.</div>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
