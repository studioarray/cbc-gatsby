import React from "react"
import Layout from "../components/Layout"
import ChangeLogoColour from "../components/ChangeLogoColour"
import {
  Headline,
  StyledField as Field,
  StyledForm as Form,
  ErrorWrapper,
  FieldSet,
  FormButton,
} from "../components/Styled"
import { Formik, ErrorMessage } from "formik"
import * as Yup from "yup"

export default () => (
  <Layout>
    <ChangeLogoColour newColour="0,0,0" />
    <Headline>Contact</Headline>
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        message: "",
      }}
      validationSchema={Yup.object().shape({
        fullName: Yup.string().required("Please tell us your name."),
        email: Yup.string()
          .email("Please check that your email address is correct.")
          .required("We need your email so that we can reply."),
        message: Yup.string().required("The message field can not be empty."),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2))
          alert("Thank you for your email.")
          setSubmitting(false)
          resetForm()
        }, 500)
      }}
      render={({ isSubmitting, errors, touched }) => (
        <Form>
          <FieldSet disabled={isSubmitting}>
            <Field type="text" name="fullName" placeholder="Your name" />
            <ErrorMessage name="fullName">
              {msg => (
                <ErrorWrapper>
                  <span>{msg}</span>
                </ErrorWrapper>
              )}
            </ErrorMessage>
          </FieldSet>
          <FieldSet disabled={isSubmitting}>
            <Field type="email" name="email" placeholder="Your email address" />
            <ErrorMessage name="email">
              {msg => (
                <ErrorWrapper>
                  <span>{msg}</span>
                </ErrorWrapper>
              )}
            </ErrorMessage>
          </FieldSet>
          <FieldSet disabled={isSubmitting}>
            <Field
              component="textarea"
              rows="8"
              name="message"
              placeholder="Message"
            />
            <ErrorMessage name="message">
              {msg => (
                <ErrorWrapper>
                  <span>{msg}</span>
                </ErrorWrapper>
              )}
            </ErrorMessage>
          </FieldSet>
          <FormButton type="submit" disabled={isSubmitting}>
            Send
          </FormButton>
        </Form>
      )}
    />
  </Layout>
)
