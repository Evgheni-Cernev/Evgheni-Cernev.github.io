import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";


import { validation } from "./utils";
import {initialFormValues} from './constants';
import {InitialFormValuesTypes} from './types';
import "./styles.css";

const Forms = () => {
  const submittingData = (data: any) => {
    fetch('https://a708-89-28-121-208.ngrok.io/item/add', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) 
    })
  }

  return (
    <div>
      <Formik
        initialValues={initialFormValues}
        onSubmit={(values: InitialFormValuesTypes, actions: FormikHelpers<InitialFormValuesTypes>) => {
          submittingData(values)
          actions.setSubmitting(false);
        }}
        validationSchema={validation}
      >
        {() => (
          <Form>
            <label htmlFor="email">From:</label>
            <Field type="email" name="email" text="email" />
            <ErrorMessage name="email" component="div" className="validation" />

            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" text="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="validation"
            />

            <label htmlFor="confirm">Password confirmation:</label>
            <Field type="password" name="confirm" text="confirm" />
            <ErrorMessage
              name="confirm"
              component="div"
              className="validation"
            />

            <label htmlFor="where">Where:</label>
            <Field as="select" name="where">
              <option value="">Select...</option>
              <option value="developers">Developers</option>
              <option value="managers">Managers</option>
              <option value="devops">Devops</option>
            </Field>
            <ErrorMessage
              name="where"
              component="div"
              className="validation"
            />

            <label htmlFor="message:">Message:</label>
            <Field as="textarea" id="message" name="message" />
            <ErrorMessage
              name="message"
              component="div"
              className="validation"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forms;
