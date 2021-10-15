import React from "react";
import { Formik, Form, Field, /* ErrorMesssage */ } from "formik";

const initialValues = {
  message: "",
};


export default function ChatForm(props) {
  return (
    <Formik 
    initialValues={initialValues}
    onSubmit = {props.onSubmit} 
    >
      
      {(formikProps) => {
        return (
          <Form>
            <Field name="message" />
              <button type="submit">Send</button>
          </Form>
        );
      }}
    </Formik>
  );
}
