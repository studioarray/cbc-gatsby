import React from "react"
import { Headline } from "../components/Styled"
import {
  Formik,
  Field as FormikField,
  Form as FormikForm,
  ErrorMessage,
} from "formik"
import styled, { css } from "styled-components"
import { settings } from "../utils/settings"
import * as Yup from "yup"
import { FadeWrapper } from "../components/Transitions"
import { useColour } from "../utils/colourContext"

const Contact = () => {
  const { setColour } = useColour()
  setColour("0,0,0")
  return (
    <FadeWrapper>
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
              <Field
                type="email"
                name="email"
                placeholder="Your email address"
              />
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
    </FadeWrapper>
  )
}

const Field = styled(FormikField)`
  font-family: inherit;
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  border-bottom: 2px solid ${settings.colours.black};
  margin-bottom: 1em;
  line-height: 2;
  font-size: ${settings.fontSize.large};
  ${props =>
    props.component === "textarea" &&
    css`
      line-height: 1.5;
      resize: none;
    `}
`

const ErrorWrapper = styled.div`
  font-size: ${settings.fontSize.medium};
  margin-bottom: 1em;
  text-align: center;
  position: absolute;
  bottom: -2.2em;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 100%;
  & > span {
    color: white;
    background: ${settings.colours.grey};
    border-radius: 3px;
    padding: 5px 7px;
    position: relative;
    top: 0;
    white-space: nowrap;
    &::before {
      content: "";
      position: absolute;
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 5px 8px 5px;
      border-color: transparent transparent ${settings.colours.grey} transparent;
    }
  }
`

const Form = styled(FormikForm)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

const FormButton = styled.button`
  font-family: inherit;
  font-size: ${settings.fontSize.large};
  float: right;
  border: 0;
  margin: 0;
  padding: 0.4em 1.2em;
  background: ${settings.colours.black};
  color: white;
  border-radius: 1.2em;
  transition: 0.3s ease opacity;
  &[disabled],
  &[disabled]:hover {
    opacity: 0.3;
    cursor: wait;
  }
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`
const FieldSet = styled.fieldset`
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  &[disabled] {
    opacity: 0.3;
  }
  &[disabled] > *:hover {
    cursor: wait;
  }
`
export default Contact
