import React, { useState, useEffect, useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  useGoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
const axios = require("axios");

const FormikForm = () => {
  const ContactForm = () => {
    const [isSent, setIsSent] = useState(false);
    const [messageFailed, setMessageFailed] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const handleReCaptchaVerify = useCallback(async () => {
      if (!executeRecaptcha) {
        return; // console.log("Execute recaptcha not yet available");
      }
      const token = await executeRecaptcha("sendMessage");
      return token;
    }, [executeRecaptcha]);

    const submitForm = async (values, actions, setIsSent) => {
      try {
        const recaptchaToken = await handleReCaptchaVerify();
        values = { ...values, recaptcha: recaptchaToken };
        const response = await axios.post(
          `${process.env.REACT_APP_DOMAIN}/messages/`,
          values
        );
        // console.log(response);
        if (response.status === 200) {
          actions.resetForm({
            values: { name: "", email: "", message: "" },
          });
          setIsSent(true);
        } else {
          setMessageFailed(true);
        }
      } catch (err) {
        console.log(err);
        setMessageFailed(true);
      }
      actions.setSubmitting(false);
    };

    const SignupSchema = Yup.object().shape({
      name: Yup.string()
        .min(3, "Please include a valid name.")
        .max(50, "Name exceeds character limit.")
        .required("Please include your name."),
      email: Yup.string()
        .email("Invalid email.")
        .required("Email is required."),
      message: Yup.string()
        .min(5, "This message is too short.")
        .max(
          500,
          "Please shorten your message. Alternatively, email me at NikZprojects@gmail.com."
        )
        .required("Message is required."),
    });

    useEffect(() => {
      // Removes "message sent" message after 4 seconds
      if (isSent || messageFailed) {
        setTimeout(async () => {
          setIsSent(false);
          setMessageFailed(false);
        }, 4000);
      }
    }, [isSent, messageFailed]);

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
              <button
                onClick={() => handleReCaptchaVerify}
                type="submit"
                className="contactButton"
                disabled={isSubmitting}
              >
                {!isSubmitting ? "Submit" : "Sending Message..."}
              </button>
              {isSent && (
                <div className="success">Message received. Thank you.</div>
              )}
              {messageFailed && (
                <div className="failed">
                  Unable to send message right now. Please try again later.
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    );
  };

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
    >
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
};

export default FormikForm;
