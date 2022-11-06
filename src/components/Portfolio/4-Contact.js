import React, { useRef, useEffect, useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  useGoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
const axios = require("axios");

const FormikForm = () => {
  const recaptchaToken = useRef(null);
  const [isSent, setIsSent] = React.useState(false);
  const YourReCaptchaComponent = ({ disabled }) => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const handleReCaptchaVerify = useCallback(async () => {
      if (!executeRecaptcha) {
        return; // console.log("Execute recaptcha not yet available");
      }

      const token = await executeRecaptcha("yourAction");
      recaptchaToken.current = token;
    }, [executeRecaptcha]);

    return (
      <button
        type="submit"
        className="contactButton"
        disabled={disabled}
        onClick={() => handleReCaptchaVerify()}
      >
        {!disabled ? "Submit" : "Sending Message..."}
      </button>
    );
  };

  const submitForm = async (values, actions, setIsSent) => {
    values = { ...values, recaptcha: recaptchaToken.current };
    await axios.post(`${process.env.REACT_APP_DOMAIN}/messages/`, values);
    actions.setSubmitting(false);
    actions.resetForm({
      values: { name: "", email: "", message: "" },
    });
    setIsSent(true);
  };

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

  useEffect(() => {
    if (isSent) {
      setTimeout(async () => {
        setIsSent(false);
      }, 4000);
    }
  }, [isSent]);

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
            <GoogleReCaptchaProvider
              reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            >
              <YourReCaptchaComponent disabled={isSubmitting} />
            </GoogleReCaptchaProvider>
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
